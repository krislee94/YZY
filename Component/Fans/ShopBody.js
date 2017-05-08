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
import {toDips}  from '../../../common/utils/PixelRatioUtils'

//var Dimensions = require('Dimensions');
const screenWidth = Dimensions.get('window').width;//屏幕宽
const screenHeight = Dimensions.get('window').height;//屏幕高

export default class ShopHeander extends Component{
    render(){
        return(
           <View style={styles.main}>  
                <View style={styles.body}>  
                    <View style={styles.imgView}>               
                        <Image style={styles.img} source={require('../../../images/goods.png')} />
                    </View> 
                    <View style={styles.neiView}>
                        <Text style={styles.ziColor}>绿茶控油洗面奶无刺激无添加1瓶装</Text>
                        <Text style={styles.ziColor}>无刺激1瓶装1瓶装</Text>
                        <View style={styles.neiBody}>
                                <Text style={[styles.ziColor,{fontSize:toDips(28)}]}>¥ 196</Text>   
                                <Text style={styles.ziColor}>.00</Text>   
                            <View style={styles.end}>
                                <Text style={{marginRight:15,color:'#a9a9a9'}}>x1</Text>
                            </View> 
                        </View>
                    </View>             
                </View> 
                <View style={styles.kong}>
                
                </View>
           </View>   
        )
    }
}
//样式
const styles=StyleSheet.create({
    main:{
       // height:toDips(210),
       flex:1   
    },
    body:{
       height:toDips(210), 
       flexDirection: 'row',
    },
    imgView:{ 
        marginLeft:15,
        marginRight:toDips(40),
        justifyContent:'center'
    },
    img:{ 
      width:toDips(182),  
      height:toDips(182),     
    },
    neiBody:{
        flexDirection: 'row',
        marginTop:toDips(60),
        alignItems:'flex-end'
    },
    kong:{
        height:toDips(8),
        backgroundColor:"white",
    },
    //字颜色
    ziColor:{
        color:'#666666'
    },
    //字VIEW
    neiView:{
        flex:1,
        marginTop:toDips(32),
    },
    end:{
        flex:1,
       alignItems:'flex-end' 
    }
})