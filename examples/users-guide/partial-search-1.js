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

    // Now bring down all Items of category REQ with this field mask.
    const reqs = await wheely.searchForItems("mrql:category=REQ", "", false, mask);

    let rows = [];
    for (let i = 0; i < Math.min(5, reqs.length); i++) {
        const item = reqs[i];
        assert(!item.hasAllFields());
        assert(item.hasFieldId(descriptionFieldId));

        const id = item.getId();
        const title = item.getTitle();
        const descriptionField = item.getSingleFieldByName("Description").getHandler();
        const description = descriptionField.getHtml();
        rows.push(`<tr><td>${id}</td><td>${title}</td><td>${description}</td></tr>`);
    }
    console.log(`<table>${rows.join('\n')}</table>`);
}

run().then(() => process.exit(0));

