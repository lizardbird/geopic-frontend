import axios from 'axios'

class PhotoService {
  sendData (data) {
    let path = 'http://localhost:4200/photos/add/post'
    axios.post(path, {
      photo: data
    })
    .then(function (res) {
      console.log(res)
    })
    .catch(function (err) {
      console.log(err)
    })
  }
}

export default PhotoService
