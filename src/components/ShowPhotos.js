import React, { Component } from 'react'
import axios from 'axios'

export default class ShowPhotos extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    axios.get('http://localhost:4200/api/photos')
        .then((res) => {
          this.setState({
            data: res.data
          })
        })
        .catch((err) => {
          console.log(err)
        })
  }
  render () {
    console.log(this.state)
    let photos = this.state.data.map((photo, i) => {
      return (
        <div key={i}>
          <img className="thumbnail" src={photo.filestackUrl} alt={photo.filestackUrl}/>
        </div>
      )
    })
    return (
      <div>
        <div className="gallery">
          {photos}
        </div>
      </div>
    )
  }
}
