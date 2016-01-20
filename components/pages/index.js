import React, {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Tester from './test'

export default class Index extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {this.props.state.map(text => <Text key={text}>{text}</Text>)}
        <Text style={styles.instructions} onPress={() => this.props.navigator.push({component: Tester})}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
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
