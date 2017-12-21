const fs = require('fs')
const LIST = require('./city.list.json')

fs.writeFileSync('./myjsonfile.json', JSON.stringify(LIST.filter(el => el.country === 'RU'), null, ' '))