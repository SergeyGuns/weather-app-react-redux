var http = require('http');
// var static = require('node-static');
var ALL_CITY = require('./city.list.json')
// var fs = require('fs')
var cityQuery = '/?city='

http.createServer(function (req, res) {
  if (req.url.indexOf(cityQuery) !== -1) {
    res.writeHead( 200, {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    })
    let query = decodeURI(req.url.replace(cityQuery, ''))
    res.end(JSON.stringify(filterCityName(query, ALL_CITY), null, ''))
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
          response.push(el)
        }
      })
    }
  })
  return response
}

// console.log(filterCityName(query, data))