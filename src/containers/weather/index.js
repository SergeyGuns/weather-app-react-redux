import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Autosuggest from 'react-autosuggest';
import {
  addInputChange,
  setInputValue,
  handleInputKey,
  handleFormSubmit,
  fetchData
} from '../../modules/weather'

import './weather.css'

const Weather = props => {
  return <div>
    { props.currCityId }
    <form onSubmit={props.handleFormSubmit} className='form'>
      <div className='form__hypothesis'>{props.filteredcity[0] && props.filteredcity[0].name}</div>
      <input 
        type='text'
        onKeyPress={props.handleInputKey} 
        value={props.inputValue}
        autoComplete='off'
        className='form__input-city' 
        onChange={()=>{props.addInputChange(), props.fetchData()}}/>
      {
        props.filteredcity[0] && props.filteredcity[0].name !== props.inputValue && 
          <div className='form__auto-complite'>
            {
              props.filteredcity.map(el => <div data-id={el.id} data-name={el.name} onClick={props.setInputValue} key={el.id}> {el.name}</div>)
            }
        </div>
      }
      <button>
        +
      </button>
    </form>
    <div className="chosed-list">
      { console.log(props.chosedcity) }
      { props.chosedcity.map(el=> <div key={el} className='chosed-city'>{ el }</div>) }
    </div>
  </div>

}


const mapStateToProps = state => ({
  filteredcity: state.weather.filteredcity,
  inputValue: state.weather.inputValue,
  currCityId: state.weather.currCityId,
  chosedcity: state.weather.chosedcity
})

const mapDispatchToProps = dispatch => bindActionCreators({
  addInputChange,
  setInputValue,
  handleInputKey,
  handleFormSubmit,
  fetchData
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Weather)