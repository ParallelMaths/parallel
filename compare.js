var jsonDiff = require('json-diff')

const { data: old } = require('./private/cache-users-old.json')
const { data: cache } = require('./private/cache-users.json')

const ids = Object.keys(old);


ids.forEach(id => {



    console.log(id, jsonDiff.diffString(old[id], cache[id]))

})
