const fs = require('fs')
const LIST = require('./city.list.json')

fs.writeFileSync('./myjsonfile.json', JSON.stringify(
  LIST.filter(el => el.country === 'RU')
    .filter(el => el.coord.lon > 36 && el.coord.lon < 38)
, null, ' '))