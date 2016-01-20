import React, {
  Navigator
} from 'react-native';
import { connect } from 'react-redux'
import Index from '../pages/index'

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
    return (
      <Navigator
        initialRoute={{component: Index, title: 'Home'}}
        renderScene={this.renderScene}
        onBack={this.onBack}
        configureScene={this.configureScene}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    state
  }
}

export default connect(mapStateToProps)(Scene)
