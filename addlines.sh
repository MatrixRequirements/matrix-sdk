#!/bin/sh
# Include the simpledateformat library.
perl -i -pe 's/class DateTimeBL/const SimpleDateFormat = require("simpledateformat").SimpleDateFormat; class DateTimeBL/' server/index.js
# Fix trailing sourceMappingURL comments to match the published map filenames.
perl -i -pe 's|sourceMappingURL=clientSdk\.js\.map|sourceMappingURL=index.js.map|' client/index.js
perl -i -pe 's|sourceMappingURL=serverSdk\.js\.map|sourceMappingURL=index.js.map|' server/index.js
perl -i -pe 's|sourceMappingURL=serverSdkESM\.js\.map|sourceMappingURL=index.mjs.map|' server/index.mjs
echo 'lines replaced'