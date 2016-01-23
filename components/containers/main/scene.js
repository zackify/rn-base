import React, {
  Navigator
} from 'react-native';
import { connect } from 'react-redux'
import Index from '../../pages/main/index'
import Login from '../../pages/main/login'
import Navbar from './navbar'

class Scene extends React.Component {
  constructor(){
    super()
    this.onBack = this.onBack.bind(this)
    this.configureScene = this.configureScene.bind(this)
    this.renderScene = this.renderScene.bind(this)
  }

  onBack(){
    if (route.index > 0) {
      navigator.pop();
    }
  }

  configureScene(route) {
    if (route.sceneConfig) {
      return route.sceneConfig;
    }
    return Navigator.SceneConfigs.FloatFromRight;
  }

  renderScene(route, navigator) {
    return (
      <route.component
        navigator={navigator}
        {...this.props}
      />
    )
  }

  render() {
    console.log(this.props.authenticated,'AUTH')
    let initialRoute = { component: Login, title: 'Login'}
    if(this.props.authenticated === true) initialRoute = { component: Index, title: 'Index'}

    return (
      <Navigator
        initialRoute={initialRoute}
        navigationBar={<Navbar />}
        renderScene={this.renderScene}
        onBack={this.onBack}
        configureScene={this.configureScene}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.authentication.get('authenticated'),
    items: state.items
  }
}

export default connect(mapStateToProps)(Scene)
