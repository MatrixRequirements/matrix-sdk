const lib = require("./lib.js");

async function run() {
    const server = await lib.getServerConnection("clouds5");
    const wheely = await server.openProject("WHEELY_OBSERVABLE");

    // Construct a mask that only includes labels.
    let mask = wheely.constructSearchFieldMask(false, true, false, false);

    const catUC = wheely.getCategory("UC");
    const ucStepsFieldId = catUC.getFieldIdFromLabel("Use Case Steps")[0];
    mask.addMask(catUC, [ucStepsFieldId]);

    const items = await wheely.searchForItems("mrql:category=TC", "", false, mask);
    let foundLabels = new Set();
    for (let item of items) {
        for (let label of item.getLabels()) {
            foundLabels.add(label);
        }
    }
    let output = [];
    for (let l of foundLabels.values()) output.push(l);
    console.log(`Found the following labels on TC Items: ${output.join(", ")}`);
}

run().then(() => process.exit(0));

