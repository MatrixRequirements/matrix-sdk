const lib = require("./lib.js");

function getMaskString(project) {
    // Construct a mask for the purposes of getting a mask field string
    let mask = project.constructSearchFieldMask(true, false, false, false);
    const catREQ = project.getCategory("REQ");
    mask.addMaskByNames(catREQ, ["Description"]);
    const catUC = project.getCategory("UC");
    mask.addMaskByNames(catUC, ["Use Case Steps"]);
    return mask.getFieldMaskString();
}

async function run() {
    const server = await lib.getServerConnection("clouds5");
    const wheely = await server.openProject("WHEELY_OBSERVABLE");
    const maskString = getMaskString(wheely);
    let searchResults = await wheely.searchRaw("mrql:category=REQ or category=UC", "", maskString);
    for (let result of searchResults) {
        const strValue = JSON.stringify(result);
        console.log(`${strValue.substring(0, 60)}...`);
    }
}

run().then(() => process.exit(0));