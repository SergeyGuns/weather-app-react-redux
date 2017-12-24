import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import classnames from 'classnames'
import YandexWetherWidget from '../YandexWetherWidget'
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
  } else {
    hipotise = ''
  }

  return <div>
    {props.currCityId}
    <form onSubmit={props.handleFormSubmit} className='form'>
      <div className='form__input-wrapper'>

        <input
          type='text'
          onKeyPress={props.handleInputKey}
          value={props.inputValue}
          autoComplete='off'
          className='form__input-city'
          onChange={props.addInputChange} />
        <input
          type='text'
          className='form__hypothesis' 
          value={hipotise}/>
      </div>
      <button className={
        classnames('form__btn', { 'form__btn_disable': props.filteredcity[0] && props.inputValue === props.filteredcity[0]['#text']})
      }>
        +
      </button>
      {
        <div
          className={classnames(
            'form__auto-complite',
            {
              'form__hide': (props.filteredcity[0] && props.filteredcity[0]['#text'] === props.inputValue) ||
                            (props.filteredcity[0] === undefined)
            }
          )}
        >
          {
            props.filteredcity.map((el, index) =>
              <div
                data-id={index}
                
                data-name={el['#text']}
                onClick={props.setInputValue}
                key={el['-id']}>
                {el['#text']}
              </div>
            )
          }
        </div>
      }
     
    </form>
    <div className="chosed-list">
      {console.log(props.chosedcity)}      
      <YandexWetherWidget chosedcity={props.chosedcity} />
      
    </div>
  </div>

}


const mapStateToProps = state => ({
  filteredcity: state.wetherReducer.filteredcity,
  inputValue: state.wetherReducer.inputValue,
  currCityId: state.wetherReducer.currCityId,
  chosedcity: state.wetherReducer.chosedcity
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