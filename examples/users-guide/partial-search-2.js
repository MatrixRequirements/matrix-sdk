const assert = require("assert");
const lib = require("./lib.js");

async function run() {
    const server = await lib.getServerConnection("clouds5");
    const wheely = await server.openProject("WHEELY_OBSERVABLE");

    // Construct a mask that includes fields, but no labels or up or down links.
    let mask = wheely.constructSearchFieldMask(true, false, false, false);

    const catREQ = wheely.getCategory("REQ");
    const descriptionFieldId = catREQ.getFieldIdFromLabel("Description")[0];
    mask.addMask(catREQ, [descriptionFieldId]);

    const catUC = wheely.getCategory("UC");
    const ucStepsFieldId = catUC.getFieldIdFromLabel("Use Case Steps")[0];
    mask.addMask(catUC, [ucStepsFieldId]);

    // Now bring down all Items of category REQ and UC with this field mask.
    const reqs = await wheely.searchForItems("mrql:category=REQ or category=UC", "", false, mask);

    let reqCount = 0, ucCount = 0;
    for (let i = 0; i < reqs.length; i++) {
        const item = reqs[i];
        assert(!item.hasAllFields());

        if (item.getCategory() == catUC) {
            assert(item.hasFieldId(ucStepsFieldId));
            ucCount++;
        } else if (item.getCategory() == catREQ) {
            assert(item.hasFieldId(descriptionFieldId));
            reqCount++;
        }
    }
    console.log(`Project has ${reqCount} REQ Items, and ${ucCount} UC Items`);
}

run().then(() => process.exit(0));

