import React from 'react-native'
import { Provider } from 'react-redux'
import Scene from './scene'
import store from '../store'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Scene />
      </Provider>
    );
  }
}
