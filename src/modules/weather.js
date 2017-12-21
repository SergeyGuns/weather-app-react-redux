import CITY_LIST from '../data/city.list.json'

export const INPUT_CHANGE = 'weather/INPUT_CHANGE'
export const INPUT_SET = 'weather/INPUT_SET'
export const INPUT_KEY_PRESS = 'weather/INPUT_KEY_PRESS'
export const FORM_SUBMIT = 'weather/FORM_SUBMIT'

const initState = {
  filteredcity: [],
  chosedcity : [],
  inputValue : '',
  currCityId : null
}

export const handleFormSubmit = ( event ) => {
  event.preventDefault()
  const submitedCity = event.target[0].value
  console.log(submitedCity)
  return dispatch => {
    dispatch({
      type: FORM_SUBMIT
    })
  }
}

export const addInputChange = ( event ) => {
  let payload = event.target.value
  return dispatch => {
    dispatch({
      type : INPUT_CHANGE,
      payload: payload
    })
  }
}

export const setInputValue = ( event ) => {
  console.log(event.target.dataset.name)
  let payload = { 
    name: event.target.dataset.name,
    id: event.target.dataset.id
  }
  return dispatch => {
    dispatch({
      type: INPUT_SET,
      payload: payload
    })
  }
}

export const handleInputKey = ( event ) => {
  console.log(event.key)
  // event.preventDefault()
  // let payload = event.target.key
  return dispatch => {
    dispatch({
      type: INPUT_KEY_PRESS
    })
  }
}

export default (state = initState, action) => {
  console.log(action)
  switch (action.type) {
    case INPUT_CHANGE: {
        return {
          ...state,
          ...filterCity(action.payload, state.chosedcity, CITY_LIST),
          inputValue: action.payload
        }
    }
    case INPUT_SET: {
        return {
          ...state,
          ...filterCity(action.payload.name, state.chosedcity, CITY_LIST),
          inputValue : action.payload.name,
          currCityId : action.payload.id
        }
    }
    case INPUT_KEY_PRESS: {
        return {
          ...state,
          ...filterCity(action.payload, state.chosedcity, CITY_LIST),
          inputValue : action.payload
        }
    }
    case FORM_SUBMIT: {
      if (state.currCityId !== null) {
        state.chosedcity.push(+state.currCityId)
      }
      return {
        ...state,
        inputValue: state.currCityId !== null ? '' : state.inputValue,
        chosedcity: state.chosedcity,
        currCityId: null,
        filteredcity: [],
      }
    }
    default:
      return state
  }
}


function filterCity(name, chosedcity, allcity) {
  console.log(name)
  let regex = new RegExp('^' + name,'i')
  return { 
    filteredcity: allcity.filter((el) => regex.test(el.name) &&  chosedcity.indexOf(el.id) == -1  )  
  };
}