const lib = require("./lib.js");

/*
function getCharacterizations(projects) {
  function makeTable(proj) {
    const itemConfig = proj.getItemConfig();
    let res = '<table><thead><th scope="row">Item</th><th scope="row">Fields</th></thead><tbody>';
    let cats = itemConfig.getCategories();
    // Ignore DOCs and REPORTs for now.
    cats.splice(cats.indexOf("DOC"), 1);
    cats.splice(cats.indexOf("REPORT"), 1);
    for (let cat of cats) {
      // Get the fields of the category.
      let fields = [];
      for (let field of itemConfig.getItemConfiguration(cat).fieldList) {
          fields.push(`${field.label}(<i>${field.fieldType}</i>)`);
      }
      let renderedFields = fields.join(", ");
      res += `<tr><td>${cat}</td><td>${renderedFields}</td></tr>`;
    }
    res += `</tbody></table>`;
    return res;
  }
  let rows = "";
  for (let project in projects) {
    rows += `<tr><td>${projects[project].getName()}</td><td>${makeTable(projects[project])}</td></tr>\n`
  }
  return `<table>${rows}</table>`;
}
*/

async function run() {
    const server = await lib.getServerConnection("clouds5");
    let projects = {};
    projects.wheely = await server.openProject("WHEELY_OBSERVABLE");
    projects.insulin = await server.openProject("INSULINEPEN_SDK");
    // List the projects available on this server:
    // console.log((await server.getProjects()).join(", "));
}

/*
async function run() {
    const server = await lib.getServerConnection("clouds5");
    let projects = {};
    projects.wheely = await server.openProject("WHEELY_OBSERVABLE");
    projects.insulin = await server.openProject("INSULINEPEN_SDK");
    // console.log(getCharacterizations(projects));
}
*/

run().then(() => process.exit(0));
