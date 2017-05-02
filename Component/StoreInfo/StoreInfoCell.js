/**
 * Created by air on 2017/5/2.
 */
/**
 * Created by air on 2017/4/27.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity,
    PixelRatio,
    Image,
} from 'react-native';
import {toDips} from '../PixelRatioUtils';

const fullWidth = Dimensions.get('window').width;
const fullHeight = Dimensions.get('window').height;
const pix = PixelRatio.get();

class StoreInfoCell extends Component{
    constructor(props){
        super(props);

        this.state = {


        }

    }
    static get defaultProps(){
        return{
            name:'',
            text:'',


        }
    }

    //加载内容
    render(){
        return(
            <View style = {styles.view1}>
                <Text style = {styles.tx1}>{this.props.name}</Text>
                <Text style = {styles.tx2}>{this.props.text}</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    view1:{
        width:fullWidth,
        height:0.125*fullWidth,
        flexDirection:'row',
        alignItems:'center',
        borderBottomWidth:0.33*pix,
        borderColor:'#bbbbbb',
        justifyContent:'space-between'
    },
    img:{
        width:toDips(40),
        height:toDips(38),
        marginRight:0.04*fullWidth,
    },
    tx1:{
        fontSize:toDips(30),
        color:'black',
        marginLeft:toDips(30),

    },
    tx2:{
        fontSize:toDips(26),
        color:'#d5ced5',

    },



});

module.exports = StoreInfoCell;