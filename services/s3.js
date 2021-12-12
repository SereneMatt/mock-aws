const { s3 } = require('./config');

const createBucketWithContent = (content) => {
  const params = { Bucket: 'marvel' };

  s3.createBucket(params, (err) => {
    if (err) {
      console.error(err);
    } else {
      s3.putObject({ Key: 'index.html', Body: content }, (err, data) => {
        console.log('Uploaded data:\n', data);
    
        if (err) {
          console.error('Oops 😱', err);
        }
      });
    }
  });
};

const getContentFromS3 = async () => (
  await s3.getObject({ Bucket: 'marvel', Key: 'index.html' }).promise()
);

module.exports = { createBucketWithContent, getContentFromS3 }
