/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
    Component
} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Image,
    Navigator,
    Text,
    View
} from 'react-native';



import FansCharge from './FansCharge';
import Delivery from './Delivery';
export default class WorkTableVC extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <View style={styles.container}>
            <Navigator
              initialRoute={{
                component:FansCharge
              }}
              renderScene={(route,navigator)=>{
                let Component=route.component;
                return <Component navigator={navigator} {...route.params}/>
              }}
            ></Navigator>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
});