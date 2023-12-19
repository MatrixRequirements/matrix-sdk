const lib = require("./lib.js");

async function run() {
    const server = await lib.getServerConnection("clouds5");
    // List the projects available on this server:
    const project = await server.openProject("WHEELY_OBSERVABLE");
    const reqs = await project.searchForIds("mrql:Category=REQ");
    console.log(reqs.join(", "));
}

run().then(() => process.exit(0));

