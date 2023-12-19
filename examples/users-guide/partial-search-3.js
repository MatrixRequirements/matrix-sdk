const assert = require("assert");
const lib = require("./lib.js");

async function run() {
    const server = await lib.getServerConnection("clouds5");
    const wheely = await server.openProject("WHEELY_OBSERVABLE");

    // Construct a mask that includes fields, but no labels or up or down links.
    let mask = wheely.constructSearchFieldMask(true, false, false, false);

    const catUC = wheely.getCategory("UC");
    const ucStepsFieldId = catUC.getFieldIdFromLabel("Use Case Steps")[0];
    mask.addMask(catUC, [ucStepsFieldId]);

    const UCs = await catUC.getItems({ mask });
    let total = 0;
    for (let uc of UCs) {
        assert(!uc.hasAllFields());
        assert(uc.hasFieldId(ucStepsFieldId));

        const fieldHandler = uc.getFieldById(ucStepsFieldId).getHandler();
        total += fieldHandler.getRowCount();
    }
    console.log(`The average number of Use Case Steps in UC Items is ${total / UCs.length}`);
}

run().then(() => process.exit(0));

