export default function reducer(state = {
  currentPhoto: {
    title: "title",
    photographer: "photographer",
    description: "description",
    filestackUrl: "filestackUrl",
    lat: "lat",
    long: "long",
    tags: "tags"
  },
  photos: [],
  fetching: false,
  fetched: false,
  error: null,
  }, action) {
  switch (action.type) {
    case 'FETCH_PHOTOS': {
      return {...state, fetching: true}
    }
    case 'FETCH_PHOTOS_REJECTED': {
      return {...state, fetching: false, error: action.payload}
    }
    case 'FETCH_PHOTOS_FULFILLED': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        photos: action.payload,
      }
    }
    case 'ADD_PHOTO': {
      return {
        ...state,
        photos: [...state.photos, action.payload]
      }
    }
    case 'UPDATE_PHOTO': {
      const { id } = action.payload
      const newPhotos = [...state.photos]
      const photoToUpdate = newPhotos.findIndex(photo => photo.id === id)
      newPhotos[photoToUpdate] = action.payload

      return {
        ...state,
        photos: newPhotos,
      }
    }
    case 'DELETE_PHOTO': {
      return {
        ...state,
        photos: state.photos.filter(photo => photo.id !== action.payload)
      }
    }
    // no default
  }
  return state
}
