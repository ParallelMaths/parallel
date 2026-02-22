const { getPaginatedTableItemsInner, updateItem } = require('../utils/dynamodb');
const fs = require('fs');

const dry = true;
const table = 'prod-euclid-schools';

const run = async () => {
    const { urnMap } = JSON.parse(fs.readFileSync('/Users/drew.mcmillan/dev/parallel-squared/packages/appsync-school-resolver/src/data.json'));

    const data = await getPaginatedTableItemsInner(table);

    console.log('Schools in DB:', data.length);

    const toWrite = [];

    for (const school of data) {
        const matching = urnMap[school.id];

        if(matching) {
            toWrite.push({
                id: school.id,
                name: matching.name || null,
                address: matching.address || null,
                postcode: matching.postcode || null,
                establishmentNumber: matching.establishmentNumber || null,
                lowAge: matching.lowAge || null,
                highAge: matching.highAge || null
            });
        }
    }

    for(const entry of toWrite) {
        const params = {
            TableName: table,
            Key: {
                "id": entry.id
            },
            UpdateExpression: "set #name = :x, address = :y, postcode = :z, establishmentNumber = :a, lowAge = :b, highAge = :c",
            ExpressionAttributeValues: {
                ":x": entry.name,
                ":y": entry.address,
                ":z": entry.postcode,
                ":a": entry.establishmentNumber,
                ":b": entry.lowAge,
                ":c": entry.highAge
            },
            ExpressionAttributeNames: {
                "#name": "name"
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
