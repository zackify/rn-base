'use strict'
import React from 'react-native'
import App from './components/containers/app'

class Base extends React.Component {
  render() {
    return <App />
  }
}

React.AppRegistry.registerComponent('base', () => Base)
