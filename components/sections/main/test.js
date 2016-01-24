import React, {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Test extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions} onPress={() => this.props.navigator.pop()}>
          Hi
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
