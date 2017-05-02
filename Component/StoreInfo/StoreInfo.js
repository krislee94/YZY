/**
 * Created by air on 2017/5/2.
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
    Image,
    ScrollView,
    PixelRatio,
ListView,
} from 'react-native';
import AddStoreCell from '../AddStoreCell';
import AddStoreCellLogo from '../AddStoreCellLogo';
import AddStoreCellSwitch from '../AddStoreCellSwitch';
import AddStoreCellSign from '../AddStoreCellSign';
import {toDips} from '../PixelRatioUtils';
import LogoImg from './LogoImg';
import StoreInfoCell from './StoreInfoCell'
import StoreSwitch from './StoreSwitch';
import StoreSign from './StoreSign';

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
                    "imgUrl":"http://www.hbgdsb.com/news-pic/newstype2_20141215111331.jpg"
                },
                {
                    "qualificationId":"2",
                    "imgUrl":"http://www.hbgdsb.com/news-pic/newstype2_20141215111331.jpg"
                },
                {
                    "qualificationId":"3",
                    "imgUrl":"http://www.hbgdsb.com/news-pic/newstype2_20141215111331.jpg"
                },
                {
                    "qualificationId":"4",
                    "imgUrl":"http://www.hbgdsb.com/news-pic/newstype2_20141215111331.jpg"
                },
            ]

        }
    ]
}



class StoreInfo extends Component{
    constructor(props){
        super(props);
        this.state = {
            dataSource:new ListView.DataSource({
                rowHasChanged:(row1,row2)=> row1 !== row2,
            }),
        }

    }
    //在componentDidMount中取数据

    componentDidMount(){
        this.fetchData();
    }

    fetchData(){
        dataS = eval(dataA);
        this.setState({

            dataSource: this.state.dataSource.cloneWithRows(dataS.Info),

        });

    }

    //加载数据RenderRow
    renderRow(dataRow){
        return(
            <View>
                <StoreInfoCell
                    name= "店铺"
                    text= {dataRow.SellerName}
                />
                <LogoImg
                    name="店铺LOGO"
                />
                <StoreInfoCell
                    name= "经营地址"
                    text= {dataRow.sellerAddress}
                />
                <StoreInfoCell
                    name= "所在楼宇"

                />
                <StoreInfoCell
                    name= "客服电话"
                    text= {dataRow.sellerPhone}
                />
                <StoreInfoCell
                    name= "营业时间"
                    text= {dataRow.beginTime +'—'+dataRow.endTime}
                />
                <LogoImg
                    name="资质证明"
                />
                {this.renderGray()}
                <StoreSwitch
                    name="店铺状态"
                    text="正常营业"
                 />
                <StoreSign
                    name = "店铺公告"
                />



            </View>





        );
    }

    //加载头部
    renderHeader(){
        return(
            <View style={styles.header}>
                <Image source={require('../img/zuo.png')} style={styles.img}/>
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

  renderList(){
      return(
      <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}

      />
  );
  }
    //加载内容
    render(){
        return(
            <View style = {styles.container}>
                {this.renderHeader()}

                <ScrollView style = {{height:0.91*fullHeight}}>
                    {this.renderGray()}
                    {this.renderList()}


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

module.exports = StoreInfo;