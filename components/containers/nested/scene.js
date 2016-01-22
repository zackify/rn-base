import React, {
  Navigator
} from 'react-native';
import { connect } from 'react-redux'
import Index from '../../pages/index'
import Login from '../../pages/login'
import Navbar from '../../shared/navbar'

class CameraScene extends React.Component {

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
    return Navigator.SceneConfigs.FloatFromBottom;
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
    let component = Login
    return (
      <Navigator
        initialRoute={{component, title: 'Camera'}}
        navigationBar={<Navbar nested={true} />}
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

export default connect(mapStateToProps)(CameraScene)
