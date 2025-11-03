const uuid = require('uuid').v4;
const { getPaginatedTableItems, updateItem } = require('./utils/dynamodb');

// interface School {
//   notStateFunded: boolean;
//   postcode: string;
//   emails: string[];
//   establishmentNumber: string;
//   phoneNumbers: string[];
//   address: string;
//   inviteLists: {
//     teacherIds: string[];
//     id: string;
//     studentIds: string[];
//     teacherShareCode: string;
//     type: 'primary' | 'secondary';
//     studentInviteCode: string;
//   }[];
//   id: string;
//   name: string;
//   verifyCode: string;
// }

const listTypeToCopy = 'secondary'
const newListType = 'secondarytwo'

const makeLowerAlphanumericString = (length) => {
  let result = '';
  const characters = 'abcdefghjkmnpqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
};

const run = async () => {
  const schools = await getPaginatedTableItems('prod-euclid-schools');

  for (let school of schools) {

    const secondaryLists = school.inviteLists.filter(l => l.type === listTypeToCopy);
    const secondaryTwoLists = school.inviteLists.filter(l => l.type === newListType);

    const newLists = secondaryLists.map((list) => {
      const ids = list.teacherIds.sort().join(',');

      if(secondaryTwoLists.find(l => l.teacherIds.sort().join(',') === ids)) {
        console.log('Already has this list, skipping', school.name, ids);
        return null;
      }
      
      const newList = {
        teacherIds: list.teacherIds,
        id: `EI-${uuid()}`,
        studentIds: [],
        teacherShareCode: makeLowerAlphanumericString(10),
        type: newListType,
        studentInviteCode: makeLowerAlphanumericString(6)
      }

      return newList;
    }).filter(Boolean)

    if (newLists.length === 0) {
      console.log('No lists to copy, skipping', school.name);
      continue;
    }

    console.log(newLists);
    
    console.log('Adding new lists to', school.name, school.id, newLists);

    await updateItem({
      TableName: 'prod-euclid-schools',
      Key: {
        id: school.id
      },
      UpdateExpression: 'SET inviteLists = list_append(inviteLists, :newList)',
      ExpressionAttributeValues: {
        ':newList': newLists
      }
    })
  }

  process.exit();
}

run();
