const express = require('express');
const app = express();
const port = 3000;

const { getContentFromS3 } = require('./services/s3');

app.get('/', async (req, res) => {
  const response = await getContentFromS3();

  res.send(response.Body);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
