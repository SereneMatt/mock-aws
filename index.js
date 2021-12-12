const fs = require('fs');

const { createBucketWithContent } = require("./services/s3");

const fileToUpload = fs.readFileSync('./index.html');
createBucketWithContent(fileToUpload);
