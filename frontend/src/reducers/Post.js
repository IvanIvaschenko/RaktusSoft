import {
DATA_FETCHED, FETCHING_DATA_ERROR, DELETE_SUCCESS, DELETE_ERRORED, ADD_POST_SUCCESS, ADD_POST_ERRORED, EDIT, CLOSE_EDIT, UPDATE_ERROR, UPDATE_SUCCESS } from '../constants/Post'

var initialState={
  data: [],
  error: false,
  deleteErr: false,
  addPostErr: false,
  selectedObj: {},
  postIsEdit: false,
  updateErr: false
}

export default function post(state = initialState, action) {
    switch (action.type) {
        case DATA_FETCHED:
          return Object.assign({}, state, {
            data: state.data.concat(action.payload)
          })

        case FETCHING_DATA_ERROR:
          return Object.assign({}, state, {
            error: true
          })

        case DELETE_SUCCESS:
          return Object.assign({}, state,{
            data: action.payload,
            deleteErr: false
          })

        case DELETE_ERRORED:
          return Object.assign({}, state,{
            deleteErr: true
          })

        case ADD_POST_SUCCESS:
          return Object.assign({}, state,{
            data: action.payload,
            addPostErr: false
          })

        case ADD_POST_ERRORED:
          return Object.assign({}, state,{
            addPostErr: true
          })

        case EDIT:
          return Object.assign({}, state,{
            selectedObj: action.payload,
            postIsEdit: true
          })

        case CLOSE_EDIT:
          return Object.assign({}, state,{
            postIsEdit: action.payload
          })

        case UPDATE_SUCCESS:
          return Object.assign({}, state,{
            data: action.payload,
            updateErr: false
          })

        case UPDATE_ERROR:
          return Object.assign({}, state,{
            updateErr: true
          })
      
        default:
            return state;
    }
}
