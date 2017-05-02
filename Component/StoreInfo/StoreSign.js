/**
 * Created by air on 2017/5/2.
 */
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
import {toDips} from '../PixelRatioUtils';

const fullWidth = Dimensions.get('window').width;
const fullHeight = Dimensions.get('window').height;
const pix = PixelRatio.get();

class StoreSign extends Component{
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
                    defaultValue="周末营业时间延长至24：00"
                    multiline = {true}

                />

            </View>
        );
    }
}


const styles = StyleSheet.create({
    view1:{
        width:fullWidth,
        height:toDips(360),


    },

    tx1:{
        fontSize:15,
        color:'black',
        marginLeft:0.04*fullWidth,
        marginTop:0.06*fullWidth,

    },
    textin:{
        width:0.9*fullWidth,
        height:toDips(279),
        borderWidth:0.5*pix,
        borderColor:'#f5f5f5',

        marginTop:0.056*fullWidth,
        marginLeft:0.04*fullWidth,

        backgroundColor:'#f5f5f5',

    },


});

module.exports = StoreSign;