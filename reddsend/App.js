/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import { RedApplication, Globals, RedLogin, RedIdentityLogin, Util } from 'redquicklib';
import React, { Component } from 'react';
import RouteScreen from './screens/routescreen';
import * as Keys from './keys';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
console.disableYellowBox = true;



export default class App extends Component {
  render() {
    return (
      <RedApplication>
        <Scene key={Keys.RouteScreen} component={RouteScreen} hideNavBar={true} />
      </RedApplication>
    );
  }
}

const styles = ({
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
