import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from 'react-router-dom'
import './App.css'
import AddPhoto from '../AddPhoto/AddPhoto.js'

class App extends Component {
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
          </div>
          <div>
            <Route path='/add-photo' component={AddPhoto}/>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
