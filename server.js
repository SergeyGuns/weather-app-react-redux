const http = require('http');
const ALL_CITY = require('./city.list.json')

const cityQuery = '/?city='
const weatherQuery = '/?weather='


http.createServer(function (req, res) {
  if (req.url.indexOf(cityQuery) !== -1) {
    res.writeHead( 200, {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    })
    let query = decodeURI(req.url.replace(cityQuery, ''))
    if(query)
      res.end(JSON.stringify(filterCityName(query, ALL_CITY), null, ''));
    else
      res.end(JSON.stringify([]))
  }
  console.log(req.url)
}).listen(8080);





function filterCityName(query, data) {
  let response = []
  let regex = new RegExp('^' + query, 'i')
  data['cities']['country'].map(country=> {
 
    if (Array.isArray(country.city)) {
      country.city.map(el => {
        if (regex.test(el['#text'])) {
          el.temp = (Math.random()*60-30).toFixed(0)
          response.push(el)
        }
      })
    }
  })
  return response
}

// console.log(filterCityName(query, data))