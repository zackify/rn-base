import React, {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native'
import { authenticate } from '../../actions'
import Index from '../index'

export default class Login extends React.Component {

  constructor() {
    super()
    this.state = {}
    this.handleLogin = this.handleLogin.bind(this)
  }

  handleLogin() {
    this.props.dispatch(authenticate({ authenticated: true }))
    this.props.navigator.replace({component: Index, title: 'Index'})
  }

  render() {
    return (
      <View style={styles.container}>
          <Image style={styles.bg} source={require('../../../images/background.jpg')} />
          <View style={styles.header}>
            <Image style={styles.mark} source={require('../../../images/logo.png')} />
          </View>
          <View style={styles.inputs}>
            <View style={styles.inputContainer}>
                <Image style={styles.inputUsername} source={require('../../../images/username.png')}/>
                <TextInput
                  style={[styles.input, styles.whiteFont]}
                  onChangeText={email => this.setState({email})}
                  placeholder="Email"
                  placeholderTextColor="#FFF"
                  value={this.state.username}
                />
              </View>
              <View style={styles.inputContainer}>
                <Image style={styles.inputPassword} source={require('../../../images/password.png')}/>
                <TextInput
                style={[styles.input, styles.whiteFont]}
                  onChangeText={password => this.setState({password})}
                  placeholder="Password"
                  secureTextEntry={true}
                  placeholderTextColor="#FFF"
                  onSubmitEditing={this.handleLogin}
                  value={this.state.password}
                />
              </View>
          </View>
          <View style={styles.signin}>
            <TouchableOpacity onPress={this.handleLogin}>
              <Text style={[styles.whiteFont,styles.signinText]}>{this.state.message ? this.state.message :'Sign In'}</Text>
            </TouchableOpacity>
          </View>
        </View>
    )
  }
}

var styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      flex: 1,
      backgroundColor: 'transparent'
    },
    bg: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: require('Dimensions').get('window').width,
        height: require('Dimensions').get('window').height,
        backgroundColor: '#04485F',
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: .5,
        backgroundColor: 'transparent'
    },
    mark: {
        width: 200,
        height: 200
    },
    signin: {
        backgroundColor: '#04485F',
        padding: 20,
        alignItems: 'center'
    },
    signinText: {
      fontSize: 20
    },
    signup: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: .15
    },
    inputs: {
        marginTop: -40,
        marginBottom: 10,
        flex: .25
    },
    inputPassword: {
        marginLeft: 15,
        width: 20,
        height: 21
    },
    inputUsername: {
      marginLeft: 15,
      width: 20,
      height: 20
    },
    inputContainer: {
        padding: 10,
        borderWidth: 1,
        borderBottomColor: '#CCC',
        borderColor: 'transparent'
    },
    input: {
        position: 'absolute',
        left: 61,
        top: 12,
        right: 0,
        height: 20,
        fontSize: 14
    },
    forgotContainer: {
      alignItems: 'flex-end',
      padding: 15,
    },
    greyFont: {
      color: '#D8D8D8'
    },
    whiteFont: {
      color: '#FFF'
    }
})
