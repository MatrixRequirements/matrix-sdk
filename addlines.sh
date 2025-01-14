#!/bin/sh
# Include the simpledateformat library.
sed -i 's/class DateTimeBL/const SimpleDateFormat = require("simpledateformat").SimpleDateFormat; class DateTimeBL/' server/index.js
echo 'lines replaced'