import React, {Component} from 'react'

import{
    View,
    StyleSheet,
    Image,
    Text,
    Dimensions,
    TouchableOpacity,
    TextInput,
}from 'react-native'

const screenWidth = Dimensions.get('window').width;//屏幕宽
const screenHeight = Dimensions.get('window').height;//屏幕高
//头部共有
export default class ShopHeander extends Component{
    render(){
        return(
            <View style={styles.contain}>
                <Image style={styles.leltImg} source={require('../../../images/shophome.png')} />
                <Text style={styles.ziTi}>生活便利楼宇店</Text>
                <Image style={styles.rightImg} source={require('../../../images/qianj.png')} />
                <View style={styles.end}>
                    <Text style={styles.ziRed}>待审核</Text> 
                </View>             
            </View>
        )
    }
}

//样式

const styles=StyleSheet.create({
    contain:{
        height:40,
        marginTop:10,
        paddingLeft:15,
        paddingRight:15,
        flexDirection: 'row',
        backgroundColor:"white",
        alignItems:'center'
    },
    ziTi:{
        fontSize:18
    },
    leltImg:{
        marginRight:8
    },
    rightImg:{
        marginLeft:10
    },
    ziRed:{
        color:'#f23030'
    },
    end:{
        flex:1,
        alignItems:'flex-end'
    }
})