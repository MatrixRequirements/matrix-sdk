# Bulk-item-creator

This project implements an administration panel in a Matrix instance which creates
project items according to the users specification.

It is based on the [matrix-ui-plugin-boilerplate-24 template](https://github.com/MatrixRequirements/matrix-ui-plugin-boilerplate-24/).

## Local build

Run the following commands:

```
npm install
npm run build
```

In the `./dist` directory you'll find `BulkItemCreator.js`, as well as a map file
for more easily debugging TypeScript.

## Testing the Plugin

This project contains a test proxy that can load your plugin in a running instance. To do
this it will modify the main page of the Matrix instance to include your script file
and then server the script file from your local disk. Everything else will be fetched from
your remote Matrix instance.

Setup:

* Copy `Proxy.env.template` to `Proxy.env` and set your instance name
* cd into dev-proxy and `npm install` to get all dependencies
* Make sure the plugin has been built
* Close Chrome (if running)
* In this directory, run `./proxy.sh` to launch the proxy.

This should open a new Chrome and if you inspect the main page you should see
`<script src="/BulkItemCreator.js"></script>` at the end of the page. This URL
will load the local `dist/BulkItemCreator.js` script and will always be up to date with your
local build.

