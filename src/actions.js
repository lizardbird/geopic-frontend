import axios from 'axios'

export function fetchPhotos(){
  return function(dispatch) {
    axios.get('http://localhost:4200/api/photos')
      .then((res) => {
        dispatch({
          type: 'FETCH_PHOTOS_FULFILLED', payload: res.data
        })
      })
      .catch((err) => {
        dispatch({
          type: 'FETCH_PHOTOS_REJECTED', payload: err
        })
      })
  }
}
