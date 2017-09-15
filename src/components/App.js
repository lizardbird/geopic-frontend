import React, { Component } from 'react'

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import { connect } from 'react-redux'

import filestack from 'filestack-js'
import './App.css'

import AddDetails from './AddDetails'
import Geo from './GeoSuggest'
import ShowPhotos from './ShowPhotos'
import Upload from './Upload'

const client = filestack.init('AIthnakkCRemysPZRwmJjz')

class App extends Component {
  constructor (props) {
    super(props)
    console.log("props", props);
  }
  render () {

    return (
      <Router>
        <div>
          <div className='nav'>
            <div className='nav-item'><Link to='/upload'>Upload</Link></div>
            <div className='nav-item'><Link to='/geo'>Geo</Link></div>
            <div className='nav-item'><Link to='/add-details'>Add Details</Link></div>
            <div className='nav-item'><Link to='/show-photos'>Show Photos</Link></div>
          </div>
          <div className='maincontent'>
              <Switch>
                <Route
                  path='/upload'
                  render={(props) => {
                    return (
                      <Upload
                        {...props}
                        client={client}

                      />
                    )
                  }}
                />
                <Route
                  path='/geo'
                  render={(props) => {
                    return (
                      <Geo
                        {...props}
                      
                      />
                    )
                  }}
                />
                <Route path='/add-details'
                  render={(props) => {
                    return (
                      <AddDetails
                        {...props}
                    />
                    )
                  }}
                  />
                <Route path='/show-photos' component={ShowPhotos} />
              </Switch>
            </div>
        </div>
      </Router>
    )
  }
}
function mapState (state) {
  return { // each of the properties on this object will be passed as a prop to the `App` component
    photos: state.photo.photos
  }
}
App = connect(mapState)(App)

export default App
