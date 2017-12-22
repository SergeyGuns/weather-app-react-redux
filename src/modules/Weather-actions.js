import {
  INPUT_CHANGE,
  INPUT_SET,
  INPUT_KEY_PRESS,
  FORM_SUBMIT,
  AUTO_COMPLITE_REPLACE
} from './Weather-reducer'


export const handleFormSubmit = (event) => {
  event.preventDefault()
  const submitedCity = event.target[0].value
  console.log(submitedCity)
  return dispatch => {
    dispatch({
      type: FORM_SUBMIT
    })
  }
}



function receiveData(data) {
  return {
    type: AUTO_COMPLITE_REPLACE,
    data: data
  }
}

export const addInputChange = (event) => {
  let payload = event.target.value
  return dispatch => {
    dispatch({
      type: INPUT_CHANGE,
      payload: payload
    })

    return ((event, dispatch) => {
      const url = 'http://localhost:8080/?city=' + event.target.value
      return fetch(url)
        .then(response => response.json())
        .then(json => dispatch(receiveData(json)))

    })(event, dispatch)

  }
}

export const setInputValue = (event) => {
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

export const handleInputKey = (event) => {
  console.log(event.key)
  // event.preventDefault()
  // let payload = event.target.key
  return dispatch => {
    dispatch({
      type: INPUT_KEY_PRESS
    })
  }
}
