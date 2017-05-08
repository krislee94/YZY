import React, { Component } from 'react'
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
import DatePicker from 'react-native-datepicker'

export default class TimePicker extends Component {
  constructor(props){
    super(props)
    this.state = {date:""}
  }

  render(){
    return (
        <View style = {{marginTop:20,}}>
      <DatePicker
        style={{width: 200,}}
        date={this.state.date}
        mode="time"
        placeholder="select date"
        
       is24Hour = {true}
        confirmBtnText="确定"
        cancelBtnText="取消"
        showIcon = {false}
        customStyles={{
          
          dateInput: {
            width:50,
            height:20,
            borderWidth:0
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date: date})}}
       
      />
       <Text>{this.state.date}</Text>
      </View>
     
    )
  }
}