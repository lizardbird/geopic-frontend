import React, { Component } from 'react'
import './AddPhoto.css'
import axios from 'axios'

class AddPhoto extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.savePhoto = this.savePhoto.bind(this)
  }

  handleChange (e) {
    this.setState({
      [ e.target.name]: e.target.value
    })
  }

  savePhoto (e) {
    axios.post('http://localhost:4200/api/photos', {
      title: this.state.title,
      photographer: this.state.photographer,
      description: this.state.description,
      filestackUrl: this.state.fileStackUrl,
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
          <input type='text' name='url' placeholder='url' />
          <input type='number' name='lat' placeholder='lat' />
          <input type='number' name='long' placeholder='long' />
          <input type='text' name='tags' placeholder='tags' />
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default AddPhoto
