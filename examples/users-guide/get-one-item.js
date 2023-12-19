const lib = require("./lib.js");

async function run() {
    const server = await lib.getServerConnection("clouds5");
    // List the projects available on this server:
    const project = await server.openProject("WHEELY_OBSERVABLE");
    const reqs = await project.searchForIds("mrql:Category=REQ");
    const wheelyFirstREQ = await project.getItem(reqs[0]); 
    console.log("ID: " + wheelyFirstREQ.getId());
    console.log("Title: " + wheelyFirstREQ.getTitle());
    const descriptionHandler = wheelyFirstREQ.getSingleFieldByName("Description").getHandler();
    const desc = descriptionHandler.getHtml();
    console.log(`Description: ${desc}`);
}

run().then(() => process.exit(0));

