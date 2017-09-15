/* global google */
import React from 'react'
import Geosuggest from 'react-geosuggest'

export default class Geo extends React.Component {
  constructor (props) {
    super(props);
    this.state = { location: null };
  }
  onFocus () {
    console.log('onFocus')
  }

  onBlur (value) {
    console.log('onBlur', value)
  }

  onChange (value) {
    console.log('input changes to :' + value)
  }

  onSuggestSelect (suggest) {
    console.log('selected', suggest)
    // this.setState({
    //   location: suggest.location
    // })
  }

  onSuggestNoResults (userInput) {
    console.log('onSuggestNoResults for :' + userInput)
  }

  render () {
    var fixtures = [
      {label: 'Examples'},
      {label: 'New York', location: {lat: 40.7033127, lng: -73.979681}},
      {label: 'Rio', location: {lat: -22.066452, lng: -42.9232368}},
      {label: 'Tokyo', location: {lat: 35.673343, lng: 139.710388}}
    ]
    console.log(this.props);
    return (
      <div className="maincontent">
        <h2>Where was this photo taken?</h2>
        <Geosuggest
          fixtures={fixtures}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onChange={this.onChange}
          onSuggestSelect={this.onSuggestSelect}
          onSuggestNoResults={this.onSuggestNoResults}
          location={new google.maps.LatLng(53.558572, 9.9278215)}
          radius='20' />
      </div>
    )
  }
}
