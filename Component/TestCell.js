import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,

} from 'react-native';

class TestCell extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

static get defaultProps(){
    return{
        text:"",
      
    }
}

    render(){
        return(
            <View>
                <TouchableHighlight
                    onPress = {this.props.onPress}
                >
                    <Text>{this.props.text}</Text>
                </TouchableHighlight>

            </View>
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

module.exports = TestCell;