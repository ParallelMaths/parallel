const fs = require('fs');
const path = require('path');
const fb = require('firebase-admin');
const downloadUsers = require('./utils/downloadUsers');
const { getTableItem, updateItem } = require('./utils/dynamodb');

// ---------------------

const email = 'example@hotmail.com'
const first = 'Bob';
const last = 'Smith';

const setGuardianName = false;
const guardianName = 'John Smith'

// ---------------------

const userDb = fb.firestore().collection('users');
const run = async () => {
  await downloadUsers();

  console.log('\n\n\n\n');

  const file = path.join(__dirname, `../private/tmp-users.json`);
  const accounts = JSON.parse(fs.readFileSync(file)).users;

  const userId = accounts.find(a => a.email.toLowerCase() === email.toLowerCase()).localId;

  if(!userId) {
    console.log('User not found by email');
    process.exit();
  }

  const liveDoc = (await userDb.doc(userId).get()).data();

  if(!liveDoc) {
    console.log('User not found by id');
    process.exit();
  }

  const dynamoUser = await getTableItem('prod-users', userId);

  if(dynamoUser.id !== userId) {
    console.log('User id mismatch', dynamoUser.id, userId);
    process.exit();
  }

  console.log('Before:')
  console.log(`User "${email}" had firebase name "${liveDoc.first} ${liveDoc.last}"`);
  console.log(`User "${email}" had dynamo name "${dynamoUser.first} ${dynamoUser.last}"`);
  console.log(`User "${email}" had firebase guardianName "${liveDoc.guardianName}"`);

  await userDb.doc(userId).set({ first, last, ...(setGuardianName ? { guardianName } : {}) }, {merge: true});

  await updateItem({
    TableName: "prod-users",
    Key: {
        "id": userId
    },
    UpdateExpression: "set #firstName = :firstName, #lastName = :lastName",
    ExpressionAttributeValues: {
        ":firstName": first,
        ":lastName": last
    },
    ExpressionAttributeNames: {
      '#firstName': 'first',
      '#lastName': 'last'
    },
  });

  const liveDocNew = (await userDb.doc(userId).get()).data();
  const dynamoUserNew = await getTableItem('prod-users', userId);

  console.log('\n\nAfter:')
  console.log(`User "${email}" now has firebase name "${liveDocNew.first} ${liveDocNew.last}"`);
  console.log(`User "${email}" now has dynamo name "${dynamoUserNew.first} ${dynamoUserNew.last}"`);
  console.log(`User "${email}" now has firebase guardianName "${liveDocNew.guardianName}"`);

  process.exit();
}

run();
