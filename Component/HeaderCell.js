/**
 * Created by air on 2017/4/27.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
Image,
Dimensions,
    PixelRatio,
} from 'react-native';
import { toDips } from './PixelRatioUtils';
const fullWidth = Dimensions.get('window').width;
const fullHeight = Dimensions.get('window').height;
const pix = PixelRatio.get();

class HeaderCell extends Component{
    constructor(props){
        super(props);

    }
    static get defaultProps(){
        return{
            name:'',
            text:'',
        }
    }
    render(){

            return(
                <View style={styles.header}>
                   
                    <Image source={require('./img/zuo.png')} style={styles.img}/>
                    <Text style = {styles.tx1}>{this.props.name}</Text>
                    {/*<Image source={require('./sou.png')} style={styles.img1} />*/}
                    <Text style = {styles.tx2}>{this.props.text}</Text>
                </View>
            );

    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    img:{
        width:toDips(50),
        height:toDips(50),
        marginLeft:0.04*fullWidth,
    },
    header:{
        width:fullWidth,
        height:0.06*fullHeight,
        backgroundColor:'white',
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        //borderBottomWidth:0.33*pix,
        borderColor:'#bbbbbb',

    },
    tx1:{
        fontSize:toDips(34),

    },
    tx2:{
        fontSize:toDips(30),
        marginRight:0.05*fullWidth,
    },


});

module.exports = HeaderCell;