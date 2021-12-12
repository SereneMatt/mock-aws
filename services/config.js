const AWSMock = require('mock-aws-s3');

AWSMock.config.basePath = 'dist/buckets/';
const s3 = AWSMock.S3({
	params: { Bucket: 'marvel' }
}); 

module.exports = { s3 };
