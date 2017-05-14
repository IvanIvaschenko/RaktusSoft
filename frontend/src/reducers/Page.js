import {DATA_FETCHED, FETCHING_DATA_ERROR} from '../constants/Page'


var initialState={
  data: [],
  error: false
}

export default function page(state = initialState, action) {
    switch (action.type) {
        case DATA_FETCHED:
          return Object.assign({}, state, {
            data: state.data.concat(action.payload)
          })

        case FETCHING_DATA_ERROR:
          return Object.assign({}, state, {
            error: true
          })

        default:
            return state;
    }
}
