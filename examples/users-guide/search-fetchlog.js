const lib = require("./lib.js");

async function run() {
    const server = await lib.getServerConnection("clouds5");
    await (await server.openProject("WHEELY_OBSERVABLE"))
        .searchForItems("mrql:category=REQ or category=UC");
    console.log(server.getFetchLog().join("\n"));
}

run().then(() => process.exit(0));