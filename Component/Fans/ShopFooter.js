import React, {Component} from 'react'

import{
    View,
    StyleSheet,
    Image,
    Text,
    Dimensions,
    TouchableOpacity,
    TextInput,
    PixelRatio
}from 'react-native'
import {toDips}  from '../../../common/utils/PixelRatioUtils'
const screenWidth = Dimensions.get('window').width;//屏幕宽
const screenHeight = Dimensions.get('window').height;//屏幕高
//底部

export default class ShopFooter extends Component{ 
    render(){
        return(
            <View style={styles.contain}>
                <View style={styles.shopYun}>
                    <Text>共3件商品 退款金额：</Text>
                    <Text style={{color:'#f23030',fontSize:toDips(28)}}>¥456</Text>
                    <Text style={{color:'#f23030'}}>.00</Text>
                    <Text>(含运费¥4.00)</Text>
                </View>
                <View style={styles.shopDi}>
                    <TouchableOpacity >
                        <Text style={styles.ziPadd}>查看详情</Text>
                    </TouchableOpacity>    
                </View>
            </View>
        )
    }
}

//样式
const styles=StyleSheet.create({
    contain:{
        paddingLeft:15,
        borderBottomWidth:1/PixelRatio.get(),
        backgroundColor:"white"
    },
    shopYun:{
        flexDirection: 'row',
        //height:39,
        alignItems:'flex-end',
        justifyContent:'flex-end',
        paddingRight:15,
        borderBottomWidth:1/PixelRatio.get(),
        paddingTop:toDips(24),
        paddingBottom:toDips(20)
    },
    shopDi:{
        height:toDips(86),
        alignItems:'flex-end',
        justifyContent:'center',
        paddingRight:15,
    },
    ziPadd:{
        paddingTop:6,
        paddingBottom:6,
        paddingRight:10,
        paddingLeft:10,
        borderRadius:4,
        borderWidth:1,
        borderColor:'#f23030',
        color:'#f23030'
    }
})