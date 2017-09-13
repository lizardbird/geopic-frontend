import React, { Component } from 'react';
import filestack from 'filestack-js'
import Container from './Container'
const client = filestack.init('AIthnakkCRemysPZRwmJjz')


export default class Upload extends Component {
render(){
  return (
    <Container client={client} />
  )
  }
}
