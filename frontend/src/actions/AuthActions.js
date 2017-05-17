import {SHOW_FORM, CLOSE_FORM, LOG_IN_SUCCESS, LOG_IN_HAS_ERRORED, LOG_OUT} from '../constants/Auth'

export function logIn(obj){
  return (dispatch) => {
    fetch(`http://localhost:8080/api/auth`, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
    })
    .then((res)=>res.json())
    .then((data)=>{
      if(data.err || data.success===false){
        dispatch({
          type: LOG_IN_HAS_ERRORED,
          payload: data.message
        })
      }else{
        localStorage.setItem('token', data.token);
        dispatch({
          type: LOG_IN_SUCCESS,
          payload: data//object
        });
      }
    })
    .catch((err)=>{
      dispatch({
        type: LOG_IN_HAS_ERRORED,
        payload: err
      })
    });
  }
}

export function loginErr(){
  return{
    type: LOG_IN_HAS_ERRORED,
    payload: true
  }
}

export function logout() {
  localStorage.removeItem('token');
  return {
    type: LOG_OUT,
    payload: false
  }
}

export function showForm() {
  return{
    type: SHOW_FORM,
    payload: true
  }
}

export function closeForm(){
  return{
    type: CLOSE_FORM,
    payload: false
  }
}
