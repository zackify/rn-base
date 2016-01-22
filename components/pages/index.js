import React, {
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';
import Tester from './test'
import Camera from '../containers/nested/scene'

export default class Index extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {this.props.items.map(text => <Text key={text}>{text}</Text>)}
        <Text style={styles.instructions} onPress={() => this.props.navigator.push({component: Tester, title: 'Testerrr'})}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions} onPress={() => this.props.navigator.push({component: Camera, title: 'Camera', sceneConfig: Navigator.SceneConfigs.FloatFromBottom})}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
