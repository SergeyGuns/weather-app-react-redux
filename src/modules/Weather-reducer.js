// import CITY_LIST from '../data/city.list.json'

export const INPUT_CHANGE = 'weather/INPUT_CHANGE'
export const INPUT_SET = 'weather/INPUT_SET'
export const INPUT_KEY_PRESS = 'weather/INPUT_KEY_PRESS'
export const FORM_SUBMIT = 'weather/FORM_SUBMIT'
export const AUTO_COMPLITE_REPLACE = 'weather/AUTO_COMPLITE_REPLACE'

const initState = {
  filteredcity: [],
  chosedcity : [],
  inputValue : '',
  currCityId : null
}

export default (state = initState, action) => {
  console.log(action)
  switch (action.type) {
    case INPUT_CHANGE: {
        return {
          ...state,
          inputValue: action.payload
        }
    }
    case AUTO_COMPLITE_REPLACE: {
      console.log(action)
      return {
        ...state,
        filteredcity: action.data
      }
    }
    case INPUT_SET: {
        return {
          ...state,
          inputValue : action.payload.name,
          filteredcity: []
        }
    }
    case INPUT_KEY_PRESS: {
        return {
          ...state,
          inputValue : action.payload
        }
    }
    case FORM_SUBMIT: {
      let newChosedCity = state.chosedcity
      newChosedCity.push(action.payload)
      return {
        ...state,
        chosedcity: newChosedCity,
        filteredcity: [],
      }
    }
    default:
      return state
  }
}

