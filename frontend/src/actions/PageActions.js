import {DATA_FETCHED, FETCHING_DATA_ERROR} from '../constants/Page'

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
