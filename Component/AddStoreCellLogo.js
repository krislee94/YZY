/**
 * Created by air on 2017/4/27.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
Image,

    PixelRatio,
} from 'react-native';

const fullWidth = Dimensions.get('window').width;
const fullHeight = Dimensions.get('window').height;
const pix = PixelRatio.get();

class AddStoreCellLogo extends Component{
    constructor(props){
        super(props);

    }
    static get defaultProps(){
        return{
            name:'',


        }
    }
    render(){
        return(
            <View style = {styles.container}>
                <Text style = {styles.tx1}>{this.props.name}</Text>
                <Image
                    style = {styles.img}
                    source={require('./jia.png')}
                />
                <Image
                    style = {styles.img1}
                    source={require('./youji.png')}
                />


            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        width:fullWidth,
        height:0.173*fullWidth,
        flexDirection:'row',
        alignItems:'center',
        borderBottomWidth:0.33*pix,
        borderColor:'#bbbbbb',
    },
    tx1:{
        fontSize:15,
        color:'#afabaf',
        marginLeft:0.04*fullWidth,

    },
    img:{
        borderWidth:0.23*pix,
        borderColor:'#e1e1e1',
        width:0.125*fullWidth,
        height:0.125*fullWidth,
        marginLeft:0.56*fullWidth,
        marginRight:0.01*fullWidth,


    },
    img1:{
        width:20,
        height:19,
        marginRight:0.04*fullWidth,

    },



});

module.exports = AddStoreCellLogo;