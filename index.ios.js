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
import FansCharge from './Component/Fans/FansCharge'
import WorkTableVC from './Component/Fans/WorkTableVC';
import Charge from './Component/Fans/Charge';
// import Drop from './Component/App/TimePicker';
import TimePicker from './Component/App/TimePicker'
export default class YZY extends Component {
  
  render() {
    return (
      <View>
{/*
        <AddAddressFailure />*/}
        {/*{<AddAddressSuccess />}*/}
        {/*<StoreName />*/}
        {/*<AddStore />*/}
        {/*<Test />*/}
        {/*<StoreInfo />*/}

        {/*<InfoSwiper />*/}
        {/*<WorkTableVC />*/}
        {/*<FansCharge/>*/}
        {/*<Charge />*/}
        
{/*<Drop />*/}
<TimePicker />

      </View>
    );
  }
}



AppRegistry.registerComponent('YZY', () => YZY);
