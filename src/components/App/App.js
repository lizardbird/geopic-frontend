import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import './App.css'
import Upload from '../Upload/Upload.js'
import AddDetails from '../AddDetails/AddDetails.js'
import ShowPhotos from '../ShowPhotos/ShowPhotos.js'

export default class App extends Component {
  constructor() {
    super()
  }
  render () {
    return (
      <Router>
        <div>
          <div className='nav'>
            <div className='nav-item'><Link to='/upload'>Upload</Link></div>
            <div className='nav-item'><Link to='/add-details'>Add Details</Link></div>
            <div className='nav-item'><Link to='/show-photos'>Show Photos</Link></div>
          </div>
          <main>
            <Switch>
              <Route path='/upload' component={Upload}/>
              <Route path='/add-details' component={AddDetails}/>
              <Route path='/show-photos' component={ShowPhotos}/>
            </Switch>
          </main>
        </div>
      </Router>
    )
  }
}
