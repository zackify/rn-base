import React, {
  View,
  Text,
  Navigator,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import cssVar from 'cssVar'

const hideNavbar = [
  'Login',
  'Camera'
]

export default class NavBar extends React.Component {

  updateProgress(progress, fromIndex, toIndex) {
    this._nav.updateProgress(progress, fromIndex, toIndex);
  }

  render() {
    let hide = false,
      style = styles.navBar
    let title = this.props.navState.routeStack[this.props.navState.routeStack.length - 1].title

    if(hideNavbar.indexOf(title) > -1 && !this.props.nested) {
      hide = true
      style = styles.hidden
    }

    return (
      <Navigator.NavigationBar
        ref={nav => { this._nav = nav; }}
        routeMapper={NavigationBarRouteMapper(hide)}
        style={style}
        {...this.props}
      />
    )
  }
}

function NavigationBarRouteMapper(hide) {

  return {
    LeftButton: function(route, navigator, index, navState) {
      if(hide) return null

      if (index === 0) {
        return null;
      }

      var previousRoute = navState.routeStack[index - 1];
      return (
        <TouchableOpacity
          onPress={() => navigator.pop()}
          style={styles.navBarLeftButton}>
          <Text style={[styles.navBarText, styles.navBarButtonText]}>
            {previousRoute.title}
          </Text>
        </TouchableOpacity>
      );
    },

    RightButton: function(route, navigator, index, navState) {
      if(hide) return null

      return (
        <TouchableOpacity
          onPress={() => navigator.push(newRandomRoute())}
          style={styles.navBarRightButton}>
          <Text style={[styles.navBarText, styles.navBarButtonText]}>
            Next
          </Text>
        </TouchableOpacity>
      );
    },

    Title: function(route, navigator, index, navState) {
      if(hide) return null

      return (
        <Text style={[styles.navBarText, styles.navBarTitleText]}>
          {route.title}
        </Text>
      );
    }
  }
};


var styles = StyleSheet.create({
  hidden: {
    width: 0,
    height: 0,
  },
  messageText: {
    fontSize: 17,
    fontWeight: '500',
    padding: 15,
    marginTop: 50,
    marginLeft: 15,
  },
  button: {
    backgroundColor: 'white',
    padding: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#CDCDCD',
  },
  buttonText: {
    fontSize: 17,
    fontWeight: '500',
  },
  navBar: {
    backgroundColor: 'white',
  },
  navBarText: {
    fontSize: 16,
    marginVertical: 10,
  },
  navBarTitleText: {
    color: cssVar('fbui-bluegray-60'),
    fontWeight: '500',
    marginVertical: 9,
  },
  navBarLeftButton: {
    paddingLeft: 10,
  },
  navBarRightButton: {
    paddingRight: 10,
  },
  navBarButtonText: {
    color: cssVar('fbui-accent-blue'),
  },
  scene: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#EAEAEA',
  },
});