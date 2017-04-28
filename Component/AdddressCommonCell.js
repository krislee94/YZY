/**
 * Created by air on 2017/4/28.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    PixelRatio,
Image,
} from 'react-native';
import {toDips} from './PixelRatioUtils';

const fullWidth = Dimensions.get('window').width;
const fullHeight = Dimensions.get('window').height;
const pix = PixelRatio.get();

class AdddressCommonCell extends Component{
    constructor(props){
        super(props);
        this.state = {
            placeholder:'申请开通',
        }

    }
    static get defaultProps(){
        return{
            text1:'',
            text2:'',
            text3:'',
        }
    }
    render(){
        return(
            <View style = {styles.container}>

                <Image
                    style = {styles.img}
                    source={require('./img/weizhi.png')}
                />
                <View style = {styles.view1}>
                    <Text style = {styles.Text1}>{this.props.text1}</Text>
                    <Text style = {styles.Text2}>{this.props.text2}</Text>
                </View>

                <Text style = {styles.Text3} >{this.props.text3}</Text>

            </View>
        );
    }
}


const styles = StyleSheet.create({
    container:{
        width:fullWidth,
        height:toDips(120),
        flexDirection:'row',
        //borderWidth:0.4,


    },
    img:{
        width:toDips(80),
        height:toDips(80),

        marginTop:toDips(20),
        marginLeft:toDips(20),
       // borderWidth:0.4,

    },

    view1:{
        justifyContent:'flex-start',
        width:toDips(450),
        //alignItems:'center',
        marginLeft:toDips(30),
    },

    Text1:{

        fontSize:toDips(34),

        textAlignVertical:'center',
        marginTop:toDips(21),
    },
    Text2:{
        fontSize:toDips(28),

        textAlignVertical:'center',
        marginTop:toDips(5),
        color:'#a9a9a9',



    },
    Text3:{
        fontSize:toDips(34),
        color:'#73beff',

       // borderWidth:0.4,
        textAlign:'center',
        marginTop:toDips(37),


    },
    vi2:{
        flexDirection:'row',
       // borderWidth:0.5,
        marginRight:toDips(30),

    },






});

module.exports = AdddressCommonCell;