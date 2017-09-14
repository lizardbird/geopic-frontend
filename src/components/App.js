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

import { fetchPhotos } from '../actions'
const client = filestack.init('AIthnakkCRemysPZRwmJjz')

class App extends Component {
  constructor (props) {
    super(props)
    console.log("props", props);
  }
  componentWillMount() {

  }
  onUpload (filestackUrl) {
    console.log(`setting state of filestackurl`)
    this.setState({
      filestackUrl: filestackUrl
    })
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
          <div className='main-box'>
            <div className='left'>
              <Switch>
                <Route
                  path='/upload'
                  render={(props) => {
                    return (
                      <Upload
                        {...props}
                        client={client}
                        onUpload={this.onUpload.bind(this)}
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
                        onUpload={this.onUpload.bind(this)}
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
            <div className='right' />
          </div>
        </div>
      </Router>
    )
  }
}
function mapState (state) {
  return {

  }
}
App = connect(mapState)(App)

export default App
