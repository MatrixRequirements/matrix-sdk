const fs = require("fs");
const sdk = require("matrix-requirements-sdk/server");

// Securely connect to a server with stored credentials
async function getServerConnection(key) {
    const credentialsFilename = "./credentials.json";
    const db = JSON.parse(fs.readFileSync(credentialsFilename, "utf-8"));
    return await sdk.createConsoleAPI(db[key]);
}

module.exports = { sdk, getServerConnection };
