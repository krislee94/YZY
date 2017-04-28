/**
 * Created by air on 2017/4/27.
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
TextInput,
} from 'react-native';

const fullWidth = Dimensions.get('window').width;
const fullHeight = Dimensions.get('window').height;
const pix = PixelRatio.get();

class AddStoreCellSign extends Component{
    constructor(props){
        super(props);

        this.state = {
            text:'',
            placeholder:'   周末营业时间延长至24：00',

        }

    }
    static get defaultProps(){
        return{
            name:'',


        }
    }

    //加载内容
    render(){
        return(
            <View style = {styles.view1}>
                <Text style = {styles.tx1}>{this.props.name}</Text>


                <TextInput
                    value={this.state.text}
                    placeholder={this.state.placeholder}
                    onChangeText={(text)=>this.setState({text})}
                    style = {styles.textin}


                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    view1:{
        width:fullWidth,
        height:0.125*fullWidth,


        justifyContent:'space-between'
    },

    tx1:{
        fontSize:15,
        color:'#afabaf',
        marginLeft:0.04*fullWidth,
        marginTop:0.06*fullWidth,

    },
    textin:{
        width:0.9*fullWidth,
        height:0.17*fullWidth,
        borderWidth:0.33*pix,
        borderColor:'#bbbbbb',
        borderRadius:15,
        marginTop:0.056*fullWidth,
        marginLeft:0.04*fullWidth,

    },


});

module.exports = AddStoreCellSign;