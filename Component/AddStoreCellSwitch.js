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
Switch,
} from 'react-native';

const fullWidth = Dimensions.get('window').width;
const fullHeight = Dimensions.get('window').height;
const pix = PixelRatio.get();

class AddStoreCellSwitch extends Component{
    constructor(props){
        super(props);

        this.state = {
            trueSwitchIsOn:false,

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
                <Switch
                    onValueChange={(value)=>this.setState({trueSwitchIsOn:value})}
                    value={this.state.trueSwitchIsOn}

                />

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
    },
    img:{
        width:20,
        height:19,
        marginRight:0.04*fullWidth,
    },
    tx1:{
        fontSize:15,
        color:'#afabaf',
        marginLeft:0.04*fullWidth,

    },
    tx2:{
        fontSize:13,
        color:'#d5ced5',
        marginLeft:0.42*fullWidth,
    }


});

module.exports = AddStoreCellSwitch;