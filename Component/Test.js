import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import TestCell from './TestCell';

class Test extends Component{
    constructor(props){
        super(props);
        this.state = {
            selected:false,
        }

    }
  down2text(){
      this.setState({
          selected:true,
      })
  }
    render(){
        return(
            <View style = {styles.container}>
                    <TestCell 
                        text='请点击我1'
                        onPress = {() => alert('点击了我1')}
                    /> 
                    <TestCell 
                        text ='请点击我2'
                        onPress = {()=>alert('点击了我2')}
                    />
                    <View style = {this.state.selected ? styles.down:styles.up}>
                     <TestCell 
                        text = '请点击我3'
                        onPress = {this.down2text.bind(this)}
                     />
                    </View>

            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
       marginTop:200,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    down:{
        backgroundColor:'yellow',

    },
    up:{
        backgroundColor:'green',
    },

    
});

module.exports = Test;