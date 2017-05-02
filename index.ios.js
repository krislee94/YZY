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
import AddAddressFailure from './Component/AddAddressFailure';
import AddAddressSuccess from './Component/AddAddressSuccess';
import StoreName from './Component/StoreName';
import Test from './Component/Test';

import StoreInfoCell from './Component/StoreInfo/StoreInfoCell';
import StoreInfo from './Component/StoreInfo/StoreInfo';
import InfoSwiper from './Component/StoreInfo/InfoSwiper';
// import FansCharge from './Component/fans/FansCharge';

export default class YZY extends Component {
  
  render() {
    return (
      <View>
{/*
        <AddAddressFailure />*/}
        {/*<AddAddressSuccess />*/}
        {/*<StoreName />*/}
        {/*<AddStore />*/}
        {/*<Test />*/}
        {/*<StoreInfo />*/}

        <InfoSwiper />
       

      </View>
    );
  }
}



AppRegistry.registerComponent('YZY', () => YZY);
