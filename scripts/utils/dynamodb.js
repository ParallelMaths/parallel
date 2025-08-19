const AWS = require('aws-sdk');
const path = require('path');
const fs = require('fs');

const awsConfigPath = path.join(__dirname, '../../private/aws-account.json');

if(fs.existsSync(awsConfigPath)) {
  AWS.config.loadFromPath(awsConfigPath);
} else {
  console.error('\n\n\n🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨\n\nAWS config file not found at "private/aws-account.json"\nAcademy information may be missing/incorrect\n\n🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨\n\n\n');
}

const ddbDocumentClient = new AWS.DynamoDB.DocumentClient({ apiVersion: '2012-08-10', region: 'eu-west-1' });

const getPaginatedTableItemsInner = async (tableName, lastEvaluatedKey) => {
  const params = {
    TableName: tableName,
    ExclusiveStartKey: lastEvaluatedKey
  };
  const result = await ddbDocumentClient.scan(params).promise();

  if (result.LastEvaluatedKey) {
      console.log('Paginating dynamodb after', result.Items.length, 'items')
      const newData = (await getPaginatedTableItemsInner(
        tableName,
        result.LastEvaluatedKey
      ));

      return [...(result.Items || []), ...newData];
    }

  return result.Items;
};

const updateItem = async (params) => {
  return ddbDocumentClient.update(params).promise();
}

const getTableItem = async (tableName, id) => {
  const params = {
    TableName: tableName,
    Key: {
      id
    }
  };

  const res = await ddbDocumentClient.get(params).promise();
  return res.Item;
}

const getPaginatedTableItems = async (tableName) => {
    const items = await getPaginatedTableItemsInner(tableName);
    console.log('Found', items.length, 'items in dynamodb database table', tableName);
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

const getAcademyDatabaseForUsers = async () => {
  const data = await getPaginatedTableItems('prod-users');

  return data.reduce((acc, entry) => {
      acc[entry.id] = entry
      return acc;
  }, {})
}

module.exports = {
    updateItem,
    getTableItem,
    getCirclePointsForUsers,
    getPaginatedTableItemsInner,
    getAcademyDatabaseForUsers
}
