/**
 * Created by air on 2017/4/28.
 * 历史城市，当前楼宇，所有楼宇，
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

class AddressCell extends Component{
    constructor(props){
        super(props);

    }
    static get defaultProps(){
        return{
            text:'',
        }
    }
    render(){
        return(
            <View style = {styles.container}>
                <View style = {styles.view1}>s
                <Image
                    style = {styles.img}
                    source={require('./img/shu.png')}
                />

                <Text style = {styles.text}>
                    {this.props.text}

                </Text>
                    </View>

            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        width:fullWidth,
        height:toDips(57),
        backgroundColor:'#f5f5f5',
        alignItems:'center',
        flexDirection:'row',
        

    },

    text:{
        fontSize:toDips(28),
        color:'#aeaeae',

        borderColor:'#aeaeae',
        marginLeft:toDips(20),
    },
    img:{
        width:toDips(10),

    },
    view1:{
        alignItems:'center',
        flexDirection:'row',
        marginLeft:toDips(30),

    }

});

module.exports = AddressCell;