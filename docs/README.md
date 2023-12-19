# Matrix Requirements SDK Documentation

To see our reference documentation, open `./web/index.html` in a web browser.

The interesting classes are:

* StandaloneMatrixSDK - The "top level" object, which can list and open Projects
* Project - The Project class contains methods for creating and removing Items, searching, exporting Documents to files.
* Category - Each Item belongs to a Category. A Category has configured Fields
* Field - a Field in a Category.
* Item - an Item from a Matrix Instance, which is a collection of Fields from the given Category, as well as properties common to all Items.
* TreeFolder - A representation of a folder on the Matrix Instance, with a cached list of subfolders and a pointer to its parent folder.

The classes `ItemFieldMask` and `ItemsFieldMask` are useful for constructing powerful searches that return `Item` objects
that contain only the fields you are interested in.

The [Matrix SDK User's Guide](https://matrixrequirements.github.io/matrix-sdk-docs/)
contains practical information on using the SDK. Additionally, code examples
from the guide can be found in this project at `../examples/users-guide`.

