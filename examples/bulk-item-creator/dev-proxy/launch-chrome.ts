import open, {apps} from "open"
import tmp from "tmp-promise"
import {Mockttp} from "mockttp";

export async function launchChrome(url: string, server: Mockttp, caFingerprint: string) {
    // const tmp = require('tmp-promise');
    // const open, {apps} = require('open');

    const profileDir = await tmp.dir({ unsafeCleanup: true });

    // Launch the browser, using this proxy & trusting our CA certificate:
    await open(url, {
        app: {
            name: apps.chrome,
            arguments: [
                `--proxy-server=localhost:${server.port}`,
                `--ignore-certificate-errors-spki-list=${caFingerprint}`,
                `--user-data-dir=${profileDir.path}`,
                '--no-first-run'
            ]
        }
    });
}