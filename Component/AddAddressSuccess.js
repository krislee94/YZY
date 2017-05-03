/**
 * Created by air on 2017/4/28.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    PixelRatio,
    ListView,
    ScrollView,

} from 'react-native';
import  HeaderCell from './HeaderCell';
import AddressCell from './AddressCell';
import {toDips} from './PixelRatioUtils';
import AdddressCommonCell from './AdddressCommonCell';
import RenderAllBuilding from './RenderAllBuilding';
import RenderCountBuilding from './RenderCountBuilding';

const fullWidth = Dimensions.get('window').width;
const fullHeight = Dimensions.get('window').height;
const pix = PixelRatio.get();
var cols = 4;
var cellW = toDips(162)
var cellH = toDips(47);
var vMargin = (fullWidth - cellW * cols) / (cols + 1);

const dataR = {
    "Citys": [
        {
            "Id": "d0f17d91-f06e-445c-959a-0817379325ca",
            "Name": "钦州市",
            "ProvinceId": "167ee47c-bc85-4b2e-87a0-00af5c2cd664"
        },
        {
            "Id": "109e4928-33c8-4949-bce1-12f00cb17984",
            "Name": "崇左市",
            "ProvinceId": "167ee47c-bc85-4b2e-87a0-00af5c2cd664"
        },
        {
            "Id": "38f71a71-fa64-4489-9ff7-27476712e21f",
            "Name": "河池市",
            "ProvinceId": "167ee47c-bc85-4b2e-87a0-00af5c2cd664"
        },
        {
            "Id": "fad6d6cf-383d-4ef4-90dd-2b020e23351b",
            "Name": "北海市",
            "ProvinceId": "167ee47c-bc85-4b2e-87a0-00af5c2cd664"
        },
        {
            "Id": "06641d5b-e8a5-4847-a06d-7310188548f9",
            "Name": "梧州市",
            "ProvinceId": "167ee47c-bc85-4b2e-87a0-00af5c2cd664"
        },
        {
            "Id": "798b8282-87ee-446d-8076-91517906d2cd",
            "Name": "南宁市",
            "ProvinceId": "167ee47c-bc85-4b2e-87a0-00af5c2cd664"
        },
        {
            "Id": "dae4b8d1-1a18-422e-83aa-ae8a40e63f6d",
            "Name": "百色市",
            "ProvinceId": "167ee47c-bc85-4b2e-87a0-00af5c2cd664"
        },
        {
            "Id": "62508bb3-ffe0-4207-a954-c45a47092b88",
            "Name": "桂林市",
            "ProvinceId": "167ee47c-bc85-4b2e-87a0-00af5c2cd664"
        },
        {
            "Id": "dfd657ab-3994-4cda-8b3c-dec470c53be2",
            "Name": "来宾市",
            "ProvinceId": "167ee47c-bc85-4b2e-87a0-00af5c2cd664"
        },
        {
            "Id": "bac46955-d379-4146-a0b3-defdaadb1a16",
            "Name": "贺州市",
            "ProvinceId": "167ee47c-bc85-4b2e-87a0-00af5c2cd664"
        },
        {
            "Id": "17e7c191-4e51-4aa4-bdf7-e6f79acf827c",
            "Name": "玉林市",
            "ProvinceId": "167ee47c-bc85-4b2e-87a0-00af5c2cd664"
        },
        {
            "Id": "689da1d2-951f-4b64-9208-e762be59bdc1",
            "Name": "柳州市",
            "ProvinceId": "167ee47c-bc85-4b2e-87a0-00af5c2cd664"
        },
        {
            "Id": "394d6cb1-aea1-4e4d-b547-ec192a7178ab",
            "Name": "防城港市",
            "ProvinceId": "167ee47c-bc85-4b2e-87a0-00af5c2cd664"
        },
        {
            "Id": "b79de958-3052-4925-8d27-fbe60723362e",
            "Name": "贵港市",
            "ProvinceId": "167ee47c-bc85-4b2e-87a0-00af5c2cd664"
        }
    ]
}




class AddAddressFailure extends Component{
    constructor(props){
        super(props);
        this.state = {
            dataSource:new ListView.DataSource({
                rowHasChanged:(row1,row2)=> row1 !== row2,
            }),
        }

    }
    componentDidMount() {
        this.fetchData();
    }
    fetchData(){
        var dataS = eval(dataR);
       
        this.setState({
           
            dataSource: this.state.dataSource.cloneWithRows(dataS.Citys),

        });
    }
    
    renderRow(dataRow){
       
        return(
            <View style = {styles.txbor}>
                <Text style = {styles.renderData}>{dataRow.Name}</Text>

            </View>
        );

    }
    renderList(){
        return(

            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow.bind(this)}
                contentContainerStyle = {styles.list}

            />

        );
    }


    render(){
        return(
            <ScrollView style = {styles.container}>
                <HeaderCell
                    name='楼宇列表'

                />
                <AddressCell
                    text="历史城市"
                />
                {this.renderList()}
                <AddressCell
                    text="当前楼宇"

                />
                <RenderCountBuilding />
                <AddressCell
                    text="所有楼宇"
                />
              
                <RenderAllBuilding />









            </ScrollView>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        marginTop:0.058*fullWidth,
    },
    txbor:{
        width:toDips(162),
        height:toDips(48),
        // backgroundColor:'#3c8fff',
        borderRadius:15,
        alignItems:'center',
        justifyContent:'center',
        marginLeft:vMargin,
        marginTop:toDips(19),
        borderWidth:0.33*pix,
        borderColor:'#e1e1e1'

    },
    renderData:{
        fontSize:toDips(34),
        color:'#d7d7d7',



    },
    list:{
        flexDirection:'row',
        width:fullWidth,
        flexWrap:'wrap',
        marginBottom:toDips(19),
        // borderWidth:1,
        // justifyContent:'space-around',


    },




});

module.exports = AddAddressFailure ;