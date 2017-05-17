import {
DATA_FETCHED, FETCHING_DATA_ERROR, DELETE_SUCCESS, DELETE_ERRORED, ADD_POST_SUCCESS, ADD_POST_ERRORED, EDIT, CLOSE_EDIT, UPDATE_ERROR, UPDATE_SUCCESS } from '../constants/Post'

export function deletePost(obj){
  return (dispatch) => {
    fetch(`http://localhost:8080/api/data`, {
      method: 'delete',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('token')
      },
      body: JSON.stringify(obj)
    })
    .then((res)=>res.json())
    .then((data)=>{
      if(data.err || data.success===false){
        dispatch({
          type: DELETE_ERRORED,
          payload: data.err
        })
      }else{
        dispatch({
          type: DELETE_SUCCESS,
          payload: data.data//object
        });
      }
    })
    .catch((err)=>{
      dispatch({
        type: DELETE_ERRORED,
        payload: err
      })
    });
  }
}


export function updatePost(obj){
  return (dispatch) => {
    fetch(`http://localhost:8080/api/data`, {
      method: 'put',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('token')
      },
      body: JSON.stringify(obj)
    })
    .then((res)=>res.json())
    .then((data)=>{
      if(data.err || data.success===false){
        dispatch({
          type: UPDATE_ERROR,
          payload: data.err
        })
      }else{
        console.log(data);
        dispatch({
          type: UPDATE_SUCCESS,
          payload: data.data//object
        });
      }
    })
    .catch((err)=>{
      dispatch({
        type: UPDATE_ERROR,
        payload: err
      })
    });
  }
}
export function addPost(obj){
  return (dispatch) => {
    fetch(`http://localhost:8080/api/data`, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('token')
      },
      body: JSON.stringify(obj)
    })
    .then((res)=>res.json())
    .then((data)=>{
      if(data.err || data.success===false){
        dispatch({
          type: ADD_POST_ERRORED,
          payload: data.err
        })
      }else{
        dispatch({
          type: ADD_POST_SUCCESS,
          payload: data.data//object
        });
      }
    })
    .catch((err)=>{
      dispatch({
        type: ADD_POST_ERRORED,
        payload: err
      })
    });
  }
}

export function fetchData() {
  return (dispatch) => {
      fetch(`http://localhost:8080/api/data`, {
        method: 'get'
      })
        .then(res=>res.json())
        .then(data=> {
          if (data.err) {
            dispatch({
              type: FETCHING_DATA_ERROR,
              payload: data.err
            });
          } else {
            console.log(data);
            dispatch({
              type: DATA_FETCHED,
              payload: data
            });
          }
        })
        .catch((err)=>
          dispatch({
            type: FETCHING_DATA_ERROR,
            payload: err
          })
        )};
      }

export function editPost(obj){
  return{
    type: EDIT,
    payload: obj
  }
}

export function closeEdit(){
  return{
    type: CLOSE_EDIT,
    payload: false
  }
}

// export function postEdit(){
//   return{
//     type: EDIT_POST,
//     payload: true
//   }
// }
