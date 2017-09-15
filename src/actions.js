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

export function addURL(url){
  return {
    type: 'ADD_URL',
    payload: {
      url
    },
  }
}

export function addPhoto(id, text) {
  return {
    type: 'ADD_PHOTO',
    payload: {
      id,
      text,
    },
  }
}

export function updatePhoto(id, url) {
  return {
    type: 'UPDATE_PHOTO',
    payload: {
      id,
      url,
    },
  }
}

export function deletePhoto(id) {
  return { type: 'DELETE_PHOTO', payload: id}
}
