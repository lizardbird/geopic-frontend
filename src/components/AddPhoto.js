import React, { Component } from 'react'
import PhotoService from './PhotoService'

class AddPhoto extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }
    this.addPhotoService = new PhotoService()
    this.handleChange - this.handleChange.bind(this)
    this.handleSubmit - this.handleSubmit.bind(this)
  }

  handleChange (e) {
    this.setState({
      value: e.target.value
    })
  }
  handleSubmit (e) {
    e.preventDefault()
    this.addPhotoService.sendData(this.state.value)
  }



  render () {
    return (
      <div>
        <h2>Welcome to Add Photo</h2>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type='text' value={this.state.value} />
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default AddPhoto
