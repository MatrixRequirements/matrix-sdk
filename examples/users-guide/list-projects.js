const lib = require("./lib.js");

async function run() {
    const server = await lib.getServerConnection("clouds5");
    // List the projects available on this server:
    console.log((await server.getProjects()).join(", "));
}

run().then(() => process.exit(0));

