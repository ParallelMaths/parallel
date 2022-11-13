const AWS = require('aws-sdk');
const path = require('path');

AWS.config.loadFromPath(path.join(__dirname, '../../private/aws-account.json'));

const ddbDocumentClient = new AWS.DynamoDB.DocumentClient({ apiVersion: '2012-08-10' });

const getPaginatedTableItemsInner = async (tableName, lastEvaluatedKey) => {
  try {
    const params = {
      TableName: tableName,
      ExclusiveStartKey: lastEvaluatedKey
    };
    const result = await ddbDocumentClient.scan(params).promise();

    if (result.LastEvaluatedKey) {
        console.log('Paginating after', result.Items.length, 'items')
        const newData = (await getPaginatedTableItemsInner(
          tableName,
          result.LastEvaluatedKey
        ));
  
        return [...(result.Items || []), ...newData];
      }

    return result.Items;
  } catch (error) {
    console.error(error);
  }
};

const getPaginatedTableItems = async (tableName) => {
    const items = await getPaginatedTableItemsInner(tableName);
    console.log('Found', items.length, 'items in dynamodb database table');
    return items;
}

const getCirclePointsForUsers = async () => {
    const data = await getPaginatedTableItems('prod-live_points');

    return data.reduce((acc, entry) => {
        const previous = acc[entry.userId] || {};
        const previousPoints = previous[entry.level] || 0;

        acc[entry.userId] = {
            ...previous,
            [entry.level]: previousPoints + entry.computedPoints
        }
        
        return acc;
    }, {})
}

module.exports = {
    getCirclePointsForUsers
}
