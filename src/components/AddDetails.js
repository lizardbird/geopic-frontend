import React, { Component } from 'react'
import axios from 'axios'

export default class AddDetails extends Component {
  constructor (props) {
    super(props)
    console.log(this.props);
    // this.state = {
    //   title: '',
    //   photographer: '',
    //   description: '',
    //   filestackUrl: '',
    //   lat: '',
    //   long: '',
    //   tags: ''
    // }
    // this.handleChange = this.handleChange.bind(this)
    // this.savePhoto = this.savePhoto.bind(this)
  }

  handleChange (e) {
    console.log(e.target.name, e.target.value);
    this.setState({
      [ e.target.name]: e.target.value

    })
  }

  savePhoto (e) {
    axios.post('http://localhost:4200/api/photos', {
      title: this.props.title,
      photographer: this.props.photographer,
      description: this.props.description,
      filestackUrl: this.props.filestackUrl,
      lat: this.props.lat,
      long: this.props.long,
      tags: this.props.tags
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
      <div className="column">
        <h2>Just a few more details...</h2>

        <form onChange={this.handleChange} onSubmit={this.savePhoto}>
          <input type='text' name='title' placeholder='title' />
          <input type='text' name='photographer' placeholder='photographer' />
          <input type='text' name='description' placeholder='description' />
          <input type='text' name='tags' placeholder='tags' />
          <button type='submit'>Save Photo</button>
        </form>
      </div>
    )
  }
}
