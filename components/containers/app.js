import React from 'react-native'
import Scene from './main/scene'
import store from '../reducers'
import { RestoreProvider } from 'redux-restore'

export default class App extends React.Component {
  render() {
    return (
      <RestoreProvider store={store}>
        <Scene />
      </RestoreProvider>
    );
  }
}
