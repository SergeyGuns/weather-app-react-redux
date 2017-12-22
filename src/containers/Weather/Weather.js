import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import classnames from 'classnames'
import Autosuggest from 'react-autosuggest';
import {
  addInputChange,
  setInputValue,
  handleInputKey,
  handleFormSubmit
} from '../../modules/Weather-actions'

import './Weather.css'

const Weather = props => {
  let hipotise;
  if (props.filteredcity[0] !== undefined) {
    hipotise = props.filteredcity[0]['#text']
  }

  return <div>
    {props.currCityId}
    <form onSubmit={props.handleFormSubmit} className='form'>
      <div
        className='form__hypothesis'>{hipotise}</div>
      <input
        type='text'
        onKeyPress={props.handleInputKey}
        value={props.inputValue}
        autoComplete='off'
        className='form__input-city'
        onChange={props.addInputChange} />
      {
        props.filteredcity[0] && props.filteredcity[0].name !== props.inputValue &&
        <div className='form__auto-complite'>
          {
            props.filteredcity.map((el, index) =>
              <div
                data-id={index}
                className={classnames({
                  form__hide: el['#text'] === props.inputValue
                })}
                data-name={el['#text']}
                onClick={props.setInputValue}
                key={el.id}>
                {el['#text']}
              </div>
            )
          }
        </div>
      }
      <button>
        +
      </button>
    </form>
    <div className="chosed-list">
      {console.log(props.filteredcity)}
      {props.chosedcity.map(el => <div key={el} className='chosed-city'>{el}</div>)}
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
  handleFormSubmit
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Weather)