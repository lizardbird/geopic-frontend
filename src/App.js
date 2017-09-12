import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from 'react-router-dom'
import './App.css'
import AddPhoto from './components/AddPhoto'

class App extends Component {
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
