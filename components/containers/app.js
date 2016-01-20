import React from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Scene from './scene'
import reducers from '../reducers'
const store = createStore(reducers)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Scene />
      </Provider>
    );
  }
}
