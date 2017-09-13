import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from 'react-router-dom'
import AddPhoto from './AddPhoto.js'
import ShowPhotos from './ShowPhotos.js'


export default class App extends Component {
  constructor() {
    super()
    this.state = {
      photo: null
    }
  }
  render () {
    return (
      <Router>
        <div>
          <div className='nav'>
            <div className='nav-item'><Link to='/add-photo'>Add Photo</Link></div>
            <div className='nav-item'><Link to='/show-photos'>Show Photos</Link></div>
          </div>
          <div>
            <Route path='/add-photo' component={AddPhoto}/>
            <Route path='/show-photos' component={ShowPhotos}/>
          </div>
        </div>
      </Router>
    )
  }
}
