import fetch from "node-fetch"
import {launchChrome} from "./launch-chrome.js";
import * as mockttp from "mockttp"
import {Mockttp, MockttpServer} from "mockttp";
// https://httptoolkit.github.io/mockttp/interfaces/Mockttp.html#forGet
// https://github.com/httptoolkit/mockttp/tree/main

(async () => {
    if (process.argv.length < 4) {
        console.error("You need to provide the name of the instance as the second parameter");
        process.exit(-1);
    }
    const instance = process.argv[2]
    const scriptFile = process.argv[3]
    
    // Create a proxy server with a self-signed HTTPS CA certificate:
    const https = await mockttp.generateCACertificate();
    const server = mockttp.getLocal({ https, debug: false });
    // server.on("rule-event", r => console.log("Event", r))
        
    const target = `${instance}.matrixreq.com`
    const baseURL = `https://${target}`
    const url = /^\/?(\/[A-Za-z]+\/\w+-\w+(-\w+))?$/
    const adminUrl = /^\/adminConfig(\/\w+)?$/
    const qmsUrl = /^\/pub\/QMS(\/\S+)?$/

    const addedUrl = `<script src="/${scriptFile}"></script>`
    const replaced = `${addedUrl}\n</body>\n</html>`
    const page = await fetch(baseURL).then(data => data.text())
    const patchedPage = page.replace(/<\/body>\s*<\/html>/, replaced)
    const adminPage = await fetch(`${baseURL}/adminConfig`).then(data => data.text())
    const patchedAdminPage = adminPage.replace(/<\/body>\s*<\/html>/, replaced)

    await server.forAnyWebSocket().always()
        .thenPassThrough();
    await server.forGet(url).always()
        .thenReply(200, patchedPage);
    await server.forGet(adminUrl).always()
        .thenReply(200, patchedAdminPage);
    await server.forGet(qmsUrl).always()
       .thenPassThrough({ beforeRequest: async (req) => {
            const stringBody = await req.body.getText();
            if (stringBody) {
                const patchedStringBody = stringBody.replace(/<\/body>\s*<\/html>/, replaced)
                return { body: patchedStringBody };
            } else {
                console.log(`Failed to load plugin for ${req.url}`);
            }
            return undefined;
        }
       });
    await server.forGet(`${baseURL}/${scriptFile}`).always()
        .thenFromFile(200, `../dist/${scriptFile}`);
    await server.forGet(`${baseURL}/${scriptFile}.map`).always()
        .thenFromFile(200, `../dist/${scriptFile}.map`);
    await server.forAnyRequest().forHostname(target).always()
        .thenPassThrough();
    await server.start();

    const caFingerprint = mockttp.generateSPKIFingerprint(https.cert);

    if (process.argv[4] === 'chrome') {
        // Launch an intercepted Chrome using this proxy:
        await launchChrome(baseURL, server, caFingerprint);
        process.on('SIGINT', function() {
            console.log("Caught interrupt signal");
            // Find a way to kill the Chrome process
            process.exit();
        });
    } else {
        // Print out the server details for manual configuration:
        console.log(`Server running on port ${server.port}`);
        console.log(`CA cert fingerprint ${caFingerprint}`);
    }
    
})();
