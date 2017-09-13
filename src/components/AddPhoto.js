import React, { Component } from 'react'
import axios from 'axios'
import filestack from 'filestack-js'
import './AddPhoto.css'
const client = filestack.init('AIthnakkCRemysPZRwmJjz')

export default class AddPhoto extends Component {
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
    console.log(this.state.filestackUrl);
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
        <h2>Welcome to Add Photo</h2>
        <form onChange={this.handleChange} onSubmit={this.savePhoto}>
          <input type='text' name='title' placeholder='Title of Photo' />
          <input type='text' name='photographer' placeholder='Photographer' />
          <input type='text' name='description' placeholder='description' />
          <input type='text' name='filestackUrl' placeholder='url' />
          <input type='number' name='lat' placeholder='lat' />
          <input type='number' name='long' placeholder='long' />
          <input type='text' name='tags' placeholder='tags' />
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}
