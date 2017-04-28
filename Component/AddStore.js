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
ScrollView,
PixelRatio,
} from 'react-native';
import AddStoreCell from './AddStoreCell';
import AddStoreCellLogo from './AddStoreCellLogo';
import AddStoreCellSwitch from './AddStoreCellSwitch';
import AddStoreCellSign from './AddStoreCellSign';
import {toDips} from './PixelRatioUtils';


const fullWidth = Dimensions.get('window').width;
const fullHeight = Dimensions.get('window').height;
const pix = PixelRatio.get();



class AddStore extends Component{
    constructor(props){
        super(props);
        this.state = {

        }

    }
    //加载头部
    renderHeader(){
        return(
            <View style={styles.header}>
                <Image source={require('./img/zuo.png')} style={styles.img}/>
                <Text style = {styles.tx1}>店铺信息</Text>
                {/*<Image source={require('./sou.png')} style={styles.img1} />*/}
                <Text style = {styles.tx2}>保存</Text>
            </View>
        );
    }
    //加载空白灰
    renderGray(){
        return(
            <View style = {styles.rengra}>

            </View>
        );

    }

    renderContent(){
        return(
            <View>
                <AddStoreCell
                    name = '店铺'
                    text = '如：罗森便利河西万达店'

                />
                <AddStoreCellLogo
                    name = '店铺LoGo'


                />
                <AddStoreCell
                    name='经营地址'
                    text = '如：南京市建邺区雨润大街10号2栋110室'
                />
                <AddStoreCell
                    name = '所在楼宇'
                />
                <AddStoreCell
                    name= '客服电话'
                    text='如 4008001234'
                />
                <AddStoreCell
                    name = '营业时间'
                    text = '如 10：00 - 21：00'
                />
                <AddStoreCellLogo
                    name = '资质证照'
                />
                {this.renderGray()}
                <AddStoreCellSwitch
                    name = '店铺状态'
                    text = '打烊了'
                />
                <AddStoreCellSign
                    name = '店铺公告'

                />



            </View>
        );
    }
    //加载内容
    render(){
        return(
            <View style = {styles.container}>
                {this.renderHeader()}

                <ScrollView style = {{height:0.91*fullHeight}}>
                    {this.renderGray()}
                    {this.renderContent()}


                </ScrollView>


            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        marginTop:0.024*fullHeight,


    },
    scroll:{
        width:fullWidth,
        height:fullHeight-0.03*fullHeight,
    },

    img:{
        width:30,
        height:20,
        marginLeft:0.04*fullWidth,
    },
    img1:{
        width:18,
        height:18,
        resizeMode:'stretch',
        marginRight:0.14*fullWidth,
    },
    header:{
        width:fullWidth,
        height:0.06*fullHeight,
        backgroundColor:'white',
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        borderBottomWidth:0.33*pix,
        borderColor:'#bbbbbb',

    },
    tx1:{
        fontSize:toDips(34),

    },
    tx2:{
        fontSize:toDips(30),
        marginRight:0.05*fullWidth,
    },
    rengra:{
        width:fullWidth,
        height:0.07*fullWidth,
        backgroundColor:'#f0f0f2',
    }

});

module.exports = AddStore;