/**
 * Created by air on 2017/5/2.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
ListView,
Image,Dimensions,
    PixelRatio,

} from 'react-native';
import {toDips} from '../PixelRatioUtils';

import Swiper from 'react-native-swiper';
const fullWidth = Dimensions.get('window').width;
const fullHeight = Dimensions.get('window').height;
const pix = PixelRatio.get();
const dataA = {
    "Info": [
        {
            "SellerId": "d0f17d91-f06e-445c-959a-0817379325ca",
            "SellerName": "罗森遍历河西万达点",
            "sellerLogo": "/Users/air/Desktop/YZY/Component/img/h5.jpg",
            "sellerImg":"/Users/air/Desktop/YZY/Component/img/h5.jpg",
            "sellerAddress":"南京建邺区雨润大街10号",
            "status":"off",
            "sellerLongitude":"10",
            "sellerLatitude":"23",
            "beginTime":"10;00",
            "endTime":"24:00",
            "sellerPhone":"4008001234",
            "sellerNotice":"店铺活动延续到十月一号",
            "qualification":[
                {
                    "qualificationId":"1",
                    "imgUrl":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1493710905281&di=92b4af79942f99c5b6e3af4d110c4410&imgtype=0&src=http%3A%2F%2Fmvimg2.meitudata.com%2F56c74ca3907f66153.jpg"
                },
                {
                    "qualificationId":"2",
                    "imgUrl":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1493710905281&di=63fa6545c44d668385dd88ed5528c78a&imgtype=0&src=http%3A%2F%2Fmvimg2.meitudata.com%2F55d5b36c1e4e899.jpg"
                },
                {
                    "qualificationId":"3",
                    "imgUrl":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1493711610112&di=beef9f5859adda250d03e5eb1d6fe831&imgtype=0&src=http%3A%2F%2Fimg.go007.com%2F2016%2F07%2F07%2F731995fc772a7d9e_2.jpg"
                },
                {
                    "qualificationId":"4",
                    "imgUrl":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1493710905277&di=10b4e1915d3e66898e5024749f587f2f&imgtype=0&src=http%3A%2F%2Fi.zeze.com%2Fattachment%2Fforum%2F201506%2F28%2F104039ydramgzhbzxarof9.jpg"
                },
                {
                    "qualificationId":"5",
                    "imgUrl":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1493711680781&di=2d59e6947a4c5d96122e47f6822db92c&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fpic%2Fitem%2Fb74d1a9b4dc76c420cf47701.jpg"
                },
            ]

        }
    ]
}
var imageViews = [];


class InfoSwiper extends Component{
    constructor(props){
        super(props);
        this.state = {
            dataSource:new ListView.DataSource({
                rowHasChanged:(row1,row2)=> row1 !== row2,
            }),
        }

    }
    // componentDidMount(){
    //     this.fetchData();
    // }

    fetchData(){
        dataS = eval(dataA);

        console.log("7777777777777777"+dataS.Info[0].qualification[1].imgUrl);
        var img = dataS.Info[0].qualification;



        for (let i=0; i<img.length;i++){
            imageViews.push(
            <Image
                key = {i}
                style = {{flex:1}}
                source={{uri:img[i].imgUrl}}
            >
                <Text style= { styles.txnum}>{i+1} /{img.length}</Text>
            </Image>
            );

        }

        // this.setState({
        //
        //     dataSource: this.state.dataSource.cloneWithRows(dataS.Info),
        //
        // });
        console.log('1234567890234567'+imageViews.length)
        return imageViews;


    }
    showpage(){
        dataS = eval(dataA);
        var img = dataS.Info[0].qualification;
        return(
            <View>
                <Text>/{img.length}</Text>
            </View>
        );
    }
    // renderImg(dataRow){
    //     var imageViews = [];
    //     console.log(dataRow);
    //     console.log('7777777777777777'+dataRow.qualification)
    //     for (let i = 0; i< dataRow.qualification.length;i++){
    //         <Image
    //             key = {i}
    //             style = {{flex:1}}
    //             source={{uri:dataRow.qualification.imgUrl}}
    //
    //         />
    //     }
    //
    // }
    renderHeader(){
        return(
            <View style={styles.header}>
                <Image source={require('../img/zuo.png')} style={styles.img}/>


            </View>
        );
    }

    renderGray(){
        return(
            <View style={styles.rengray}>

            </View>
        );
    }

 // nextButton(){
 //     return(
 //         <View>
 //         <Text style={{fontSize:82, color:'#f6efd4', paddingTop:30, paddingBottom:30}}>‹</Text>
 //             </View>
 //     );
 // }
 // prevButton(){
 //     return(
 //         <View>
 //         <Text style={{fontSize:82, color:'#f6efd4', paddingTop:30, paddingBottom:30}}>›</Text>
 //             </View>
 //     );
 // }
    render(){
        return(

            <View style = {styles.container}>
                {this.renderHeader()}
                {this.renderGray()}

                <Swiper
                    height = {400}
                    loop = {true}
                    index = {0}
                    showsButtons = {true}
                    showsPagination = {true}
                    horizontal = {true}
                    nextButton = {<Text style={{fontSize:82, color:'white', paddingTop:30, paddingBottom:30}}>›</Text>}
                    prevButton = {<Text style={{fontSize:82, color:'white', paddingTop:30, paddingBottom:30}}>‹</Text>}
                    sh
                >


                    {/*{this.renderList()}*/}
                    {this.fetchData()}

                </Swiper>



            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        marginTop:0.034*fullHeight,
        position:'absolute',

    },
    imgs:{

    },
    header:{
        width:fullWidth,
        height:0.06*fullHeight,
        backgroundColor:'white',
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        borderBottomWidth:0.33*pix,
        borderColor:'#f5f5f5',


    },
    img:{
        width:30,
        height:20,
        marginLeft:0.04*fullWidth,
    },
    rengray:{

        width:fullWidth,
        height:toDips(32),
        backgroundColor:'#f5f5f5',



    },
    txnum:{
        marginLeft:0.49*fullWidth,
        fontSize:toDips(34),
        // marginTop:-(toDips(150)),

        width:toDips(100),
        height:toDips(40),
        position:'absolute',
        color:'gray',


    }


});

module.exports = InfoSwiper;