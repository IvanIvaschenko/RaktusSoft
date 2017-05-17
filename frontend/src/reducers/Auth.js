import {SHOW_FORM, CLOSE_FORM, LOG_IN_SUCCESS, LOG_IN_HAS_ERRORED, LOG_OUT} from '../constants/Auth'


var initialState={
  authIsVisible: false,
  login: false,
  loginError: false
}

export default function page(state = initialState, action) {
    switch (action.type) {

        case SHOW_FORM:
          return Object.assign({}, state, {
            authIsVisible: true
          })

        case CLOSE_FORM:
          return Object.assign({}, state,{
            authIsVisible: false,
            loginError: false
          })

        case LOG_IN_SUCCESS:
          return Object.assign({}, state,{
            login: true,
            loginError: false,
            authIsVisible: false
          })

        case LOG_IN_HAS_ERRORED:
          return Object.assign({}, state,{
            login: false,
            loginError: true
          })

        case LOG_OUT:
          return Object.assign({}, state,{
            login: action.paylod
            })

        default:
            return state;
    }
}
