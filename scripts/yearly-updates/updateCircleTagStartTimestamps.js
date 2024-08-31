var AWS = require('aws-sdk');

AWS.config.update({
  region: 'eu-west-1'
});

var docClient = new AWS.DynamoDB.DocumentClient();

console.log('Querying for movies from 1985.');

var params = {
  TableName: 'prod-live-tags'
};

docClient.scan(params, function (err, data) {
  if (err) {
    console.error('Unable to query. Error:', JSON.stringify(err, null, 2));
  } else {
    console.log('Query succeeded.');
    data.Items.forEach(function (item) {
      console.log(item.id);
      docClient.update(
        {
          TableName: 'prod-live-tags',
          Key: {
            id: item.id
          },
          UpdateExpression: 'REMOVE startTimestamp'
        },
        function (err, data) {
          if (err) {
            console.error('Unable to update. Error:', JSON.stringify(err, null, 2));
          } else {
            console.log('Update succeeded.');
          }
        }
      );
    });
  }
});
