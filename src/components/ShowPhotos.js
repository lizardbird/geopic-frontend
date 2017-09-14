import React, { Component } from 'react'
import axios from 'axios'
import { fetchPhotos } from '../actions'

export default class ShowPhotos extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    fetchPhotos()
  }
  render () {
    console.log(this.state)
    let photos = this.state.data.map((photo, i) => {
      return (
        <li key={i}>
          <img className="img-responsive" src={photo.filestackUrl}/>
        </li>
      )
    })
    return (
      <div>
        <ul>
          {photos}
        </ul>
      </div>
    )
  }
}
