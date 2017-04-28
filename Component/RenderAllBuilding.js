/**
 * Created by air on 2017/4/28.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
ListView,
} from 'react-native';
import AdddressCommonCell from './AdddressCommonCell';
const dataA = {
    "Citys": [
        {
            "Id": "d0f17d91-f06e-445c-959a-0817379325ca",
            "Name": "南京万达A座",
            "ProvinceId": "建邺区雨润大街10号"
        },

        {
            "Id": "17e7c191-4e51-4aa4-bdf7-e6f79acf827c",
            "Name": "南京万达A座",
            "ProvinceId": "建邺区雨润大街10号"
        },
        {
            "Id": "689da1d2-951f-4b64-9208-e762be59bdc1",
            "Name": "南京国家产业园大楼",
            "ProvinceId": "建邺区嘉陵江东街南京质检大厦"
        },
        {
            "Id": "394d6cb1-aea1-4e4d-b547-ec192a7178ab",
            "Name": "南京国家产业园大楼",
            "ProvinceId": "建邺区嘉陵江东街南京质检大厦"
        },
        {
            "Id": "b79de958-3052-4925-8d27-fbe60723362e",
            "Name": "南京科技园",
            "ProvinceId": "建邺区黄山路399号"
        }
    ]
}


class RenderAllBuilding extends Component{
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
        var dataS = eval(dataA);
        // var sell = {};
        // console.log('22222222222222'+dataS.Citys[1].Name);
        // for (let i = 0;i<dataS.Citys.length;i++){
        //     sell = dataS.Citys[i];
        //
        // }
        this.setState({

            dataSource: this.state.dataSource.cloneWithRows(dataS.Citys),

        });
    }
    renderRow(dataRow){
        console.log('44444444444444'+dataRow);
        return(
            <AdddressCommonCell
                text1={dataRow.Name}
                text2={dataRow.ProvinceId}
                text3=""
            />

        );
    }

    render(){

        return(

            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow.bind(this)}

            />

        );

    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },


});

module.exports = RenderAllBuilding;