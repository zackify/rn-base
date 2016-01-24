# rn-base
Base structure for my react-native apps. Works on iOS and Android. Example with a nested navigator:

[![demo](http://img.youtube.com/vi/8FxlXHnEKnw/0.jpg)](http://www.youtube.com/watch?v=8FxlXHnEKnw "demo")

##Building

In the components folder there are four folders. Each of them are described below.

###Actions

Contains all [redux](http://redux.js.org/) actions

###Reducers

This contains all of the [redux](http://redux.js.org/) reducers required for your app.

###Containers

This folder contains the top level navigator and any needed dependencies for that section. The `root` folder contains `scene.js` which is responsible for handling all the routing at the top level. If has a corresponding `navbar.js` which can be reused later. If you need a nested navigator, say taking a picture is outside of your push and pop route flow, make a new folder here describing that. It will contain a new `scene.js`. This way you can remove a navbar, change it out, or whatever you'd like.

###Sections

The sub folders here are named the same as the containers. This is where you put each page that corresponds to a container. You can push a new container to the main navigator at any time by passing that container's scene component, ex: 

```js
import Camera from '../../containers/camera/scene'
...

this.props.navigator.push({
  component: Camera, 
  title: 'Camera', 
  sceneConfig: Navigator.SceneConfigs.VerticalUpSwipeJump
})

```