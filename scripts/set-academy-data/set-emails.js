const { getPaginatedTableItemsInner, updateItem } = require('../utils/dynamodb');
const path = require('path');
const fs = require('fs');
const downloadUsers = require('../utils/downloadUsers');

const dry = false;

const run = async () => {
    const users = await downloadUsers();
    const file = path.join(__dirname, `../../private/tmp-users.json`);
    const accounts = JSON.parse(fs.readFileSync(file)).users;

    const data = await getPaginatedTableItemsInner('prod-users');

    const toWrite = [];

    for (const user of data) {
        const foundAccount = accounts.find(account => account.localId === user.id);
        const foundUser = users[user.id]

        if(foundAccount && foundUser) {
            toWrite.push({
                id: user.id,
                email: foundAccount.email,
                gender: foundUser.gender || null,
            });
        } else {
            // console.log('Not found!', user, foundAccount, foundUser);
            // process.exit();
        }
    }
    

    for(const entry of toWrite) {
        const params = {
            TableName: "prod-users",
            Key: {
                "id": entry.id
            },
            UpdateExpression: "set email = :x, gender = :y",
            ExpressionAttributeValues: {
                ":x": entry.email,
                ":y": entry.gender
            }
        };

        if (dry) {
            console.log('Would update:');
            console.log(JSON.stringify(params, null, 2));
            continue;
        }

        const item = await updateItem(params);
        console.log('Updated', item, entry);
    }
}

run();
