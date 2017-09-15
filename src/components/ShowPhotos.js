import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchPhotos } from '../actions'

class ShowPhotos extends Component {
  constructor (props) {
    super(props)
    console.log("props", props);
    this.fetchPhotos = this.fetchPhotos.bind(this)
  }
  componentDidMount () {
    this.props.dispatch(fetchPhotos())
    console.log(this.props.photos);
  }

  fetchPhotos () {
    this.props.dispatch(fetchPhotos())
  }

  render () {
    let photos = this.props.photos.map((photo, i) => {
      return (
        <div key={i}>
          <img className='thumbnail' src={photo.filestackUrl} alt={photo.filestackUrl} />
        </div>
      )
    })
    let fetchPhotosButton = <button onClick={this.fetchPhotos}>Load Photos</button>

    return (
      <div>
        {(this.props.fetching || this.props.fetched) || fetchPhotosButton}
        <div className='gallery'>
          {this.props.fetching && <p>Loading...</p>}
          {this.props.fetched && !photos.length && <p>Nothing here yet!</p>}
          {photos}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { photo } = state
  return {
    photos: photo.photos,
    fetching: photo.fetching,
    fetched: photo.fetched,
  }
}

export default connect(mapStateToProps)(ShowPhotos)
