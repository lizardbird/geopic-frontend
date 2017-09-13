import React, { Component } from 'react'

export default class Container extends Component {

  constructor (props) {
    super(props)
    this.state = { url: null, metadata: null }
  }

  setPicture = () => {
    this.uploadImage()
      .then(data => {
        const { url, handle } = data.filesUploaded[0]
        this.setState({ url })
        this.getMetadata(handle)
        console.log(JSON.stringify(data.filesUploaded))
      })
      .catch(err => console.log(err))
  }

  getMetadata = (handle) => {
    const { client } = this.props
    client.metadata(handle)
      .then(metadata => this.setState({ metadata }))
      .catch(err => console.log(err))
  }

  uploadImage = () => {
    const { client } = this.props
    return client.pick(
      {
        accept: 'image/*',
        maxSize: 1024 * 1024 * 2,
        transformations: {
          rotate: true,
          circle: true,
          crop: {
            aspectRatio: 16 / 9,
          },
        },
      }
    )
  }

  render () {
    const { url, metadata } = this.state
    return (
      <div className="container">
              <img
                className="img-responsive"
                src={url || 'http://placehold.it/800x600?text=Upload+a+Photo'}
                alt={url}
              />
            <button
              type="button"
              onClick={this.setPicture}
            >
            Upload
            </button>
      </div>
    )
  }
}
