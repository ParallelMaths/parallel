const { getPaginatedTableItemsInner, updateItem } = require('../utils/dynamodb');
const path = require('path');
const fs = require('fs');

const run = async () => {
    const file = path.join(__dirname, `../../private/tmp-users.json`);
    const accounts = JSON.parse(fs.readFileSync(file)).users;

    const data = await getPaginatedTableItemsInner('prod-users');

    const toWrite = [];

    for (const user of data) {
        const foundAccount = accounts.find(account => account.localId === user.id);

        if(foundAccount) {
            toWrite.push({
                id: user.id,
                email: foundAccount.email
            });
        } else {
            console.log('Not found!', user);
            process.exit();
        }
    }

    for(const entry of toWrite) {
        const params = {
            TableName: "prod-users",
            Key: {
                "id": entry.id
            },
            UpdateExpression: "set email = :x",
            ExpressionAttributeValues: {
                ":x": entry.email
            }
        };

        const item = await updateItem(params);
        console.log('Updated', item, entry);
    }
}

run();
