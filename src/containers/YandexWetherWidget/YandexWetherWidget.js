import React from 'react'

import * as icons from './img'

const YandexWetherWidget = props => {
  console.log(props)
  return props.chosedcity.map(
    el => Widget(el)
  )
}


function Widget(cityObj) {

  let elemsArr = [];
  for (const key in cityObj) {
    if (cityObj.hasOwnProperty(key)) {
      elemsArr.push(<div key={key}>{cityObj[key]}</div>);
    }
  }
  function plusOrMinus(temp) {
    if(temp > 0) {
      return '+'+temp
    }
    return temp
  }
  return <div className='wedget'>
    <div className="wedget__city">{cityObj['#text']}</div>
    <div className="wrapper-temp-icon">
      <img width='30' height='30' key={cityObj['-id']} src={randomIcons()} alt="" className="wedget__icon"/>
      <div className="wedget__temp">{ plusOrMinus(cityObj.temp)} C</div>
    </div>
    {/* {Object.keys(cityObj).map(
      key => <div key={key}>
        {cityObj[key]}
      </div>
    )} */}
  </div>
}

function randomIcons() {
  let index = Math.ceil(Math.random()*6)
  return icons['icon_'+index]
}

export default YandexWetherWidget