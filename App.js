import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, WebView, StatusBar, Platform } from 'react-native';

//Status bar component for IOS/Android 
const MyStatusBar = ({ backgroundColor, ...props }) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar backgroundColor={backgroundColor} {...props} />
  </View>
);

//Dark theme component (style the status bar).
class DarkTheme extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MyStatusBar backgroundColor="#5E8D48" barStyle="light-content" />
        <View style={styles.appBar} />
        <View style={styles.content} />
      </View>
    );
  }
}

//Determines the correct height of status bar depnding on android/IOS
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

/*
  Main BeGood app entry point, creates the webview component.
*/
export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <MyStatusBar backgroundColor="#000" barStyle="light-content" />
        <WebView
          source={{ uri: 'https://begood.herokuapp.com' }}
          style={{ marginTop: 0 }}
        />
      </React.Fragment>
    );
  }
}

//Adds styles to the components
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  appBar: {
    backgroundColor: '#79B45D',
    height: APPBAR_HEIGHT,
  },
  content: {
    flex: 1,
    backgroundColor: '#33373B',
  },
});

//Register the dark theme
AppRegistry.registerComponent('App', () => DarkTheme);