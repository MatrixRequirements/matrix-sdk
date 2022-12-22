# matrix-api

[Matrix Requirements](https://matrixreq.com/) offers Quality Management Systems,
Requirements, Risk & Test Management for Medical Devices.

It can be useful to extend the software with custom plugins. This project
contains type declaration files (for TypeScript programming) and code for
using the Matrix software from node or from custom plugins that get loaded
by a Matrix instance at runtime.

## How to update (for Matrix Requirements developers)

Copy the declaration file produced by the Clouds client build into this
directory (`matrix-client-server/server/Clouds/client/build/js/matrixApi.d.ts`).

If a new version is made, update the version number in the package.json file,
and publish it with `npm publish`.
