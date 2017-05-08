import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
} from 'react-native';

import DropDown, {
  Select,
  Option,
  OptionList,
} from 'react-native-selectme';

class Drop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      canada: ''
    };
  }

  _getOptionList() {
    return this.refs['OPTIONLIST'];
  }

  
  _canada(province) {

  this.setState({
      ...this.state,
      canada: province
    });
  }

  render() {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center' ,marginTop:40,}}>
          <Select
            width={250}
            ref="SELECT1"
            optionListRef={this._getOptionList.bind(this)}
            defaultValue="Select a Province in Canada ..."
            onSelect={this._canada.bind(this)}
            style = {{width:400,}}
            styleText = {{color:'gray'}}
            itemsStyles = {{borderBottomWidth:3}}
            overlayStyles = {{borderWidth:3}}      
            >
            <Option>Alberta</Option>
            <Option>British Columbia</Option>
            <Option>Manitoba</Option>
            <Option>New Brunswick</Option>
            <Option>Newfoundland and Labrador</Option>
            <Option>Northwest Territories</Option>
            <Option>Nova Scotia</Option>
            <Option>Nunavut</Option>
            <Option>Ontario</Option>
            <Option>Prince Edward Island</Option>
            <Option>Quebec</Option>
            <Option>Saskatchewan</Option>
            <Option>Yukon</Option>
          </Select>

          <Text style = {{borderWidth:1}}>Selected Canada's province: {this.state.canada}</Text>
          <Text>1111678r9098787</Text>
          
          <OptionList ref="OPTIONLIST" style = {{borderWidth:3,marginTop:30}}/>
      </View>
    );
  }
}

module.exports = Drop;