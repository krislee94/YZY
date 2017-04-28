/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import ImagePiker from 'react-native-image-picker';
import AddStore from './Component/AddStore';
import AddLogo from './Component/AddLogo';

export default class YZY extends Component {
  
  render() {
    return (
      <View>

       <AddStore />

      </View>
    );
  }
}



AppRegistry.registerComponent('YZY', () => YZY);
