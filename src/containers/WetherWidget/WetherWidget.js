import React from 'react'

import * as icons from './img'

const WetherWidget = props => {
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
      <img width='50' height='50' key={cityObj['-id']} src={randomIcons()} alt="" className="wedget__icon"/>
      <div className="wedget__temp">{ plusOrMinus(cityObj.temp)} C</div>
    </div>
  </div>
}

function randomIcons() {
  let index = Math.ceil(Math.random()*6)
  return icons['icon_'+index]
}

export default WetherWidget