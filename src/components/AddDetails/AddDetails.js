import React, { Component } from 'react'
import Geo from './GeoSuggest.js'
import axios from 'axios'

export default class AddDetails extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      photographer: '',
      description: '',
      filestackUrl: '',
      lat: '',
      long: '',
      tags: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.savePhoto = this.savePhoto.bind(this)
  }

  handleChange (e) {
    console.log(e.target.name, e.target.value);
    this.setState({
      [ e.target.name]: e.target.value

    })
  }

  savePhoto (e) {
    axios.post('http://localhost:4200/api/photos', {
      title: this.state.title,
      photographer: this.state.photographer,
      description: this.state.description,
      filestackUrl: this.state.filestackUrl,
      lat: this.state.lat,
      long: this.state.long,
      tags: this.state.tags
    })
        .then(() => {
          this.props.history.push('/photos')
        })
        .catch((err) => {
          console.log(err)
        })
  }

  render () {
    return (
      <div>
        <h2>Add Details to Your Photo</h2>
        Where was this photo taken?
        <Geo/>

        <form onChange={this.handleChange} onSubmit={this.savePhoto}>
          <input type='text' name='title' placeholder='Title of Photo' />
          <input type='text' name='photographer' placeholder='Photographer' />
          <input type='text' name='description' placeholder='description' />
          <input type='text' name='filestackUrl' placeholder='url' />
          <input type='text' name='tags' placeholder='tags' />
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}
