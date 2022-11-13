const {getCirclePointsForUsers} = require('./utils/dynamodb')

const run = async () => {
    const circlePoints = await getCirclePointsForUsers();
    console.log(circlePoints['1Sb99eMoRUcYVCHL0z6dUPRdz0B2'])
}

run()
