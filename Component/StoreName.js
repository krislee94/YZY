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
TextInput,
Image,
TouchableOpacity,

} from 'react-native';
import HeaderCell from './HeaderCell';
import { toDips } from './PixelRatioUtils';
const fullWidth = Dimensions.get('window').width;
const fullHeight = Dimensions.get('window').height;
const pix = PixelRatio.get();

class StoreName extends Component{
    constructor(props){
        super(props);
        this.state = {
            text:'',
            placeholder:'河西万达店',
            show:false,

        }

    }

_qing(){
    this.setState({
        text:'',
    })
}

    render(){
        return(

            <View style = {styles.container}>
                <View style = {styles.view}>
                <HeaderCell
                    name ="店铺名称"
                    text = "保存"
                />
                    <TextInput
                        style = {styles.textin}
                        onChangeText={(text)=>this.setState({text,show:true})}
                        value={this.state.text}
                        placeholder={this.state.placeholder}



                    />
                    {this.state.show ? <TouchableOpacity onPress ={this._qing.bind(this)}>


                        <Image
                            style = {styles.img}
                            source={require('./img/cha.png')}
                        />
                    </TouchableOpacity>
                        :
                        <Text></Text>
                    }


            </View>

            </View>

        );
    }
}


const styles = StyleSheet.create({
    container: {



        marginTop:0.024*fullHeight,

    },
    view:{
        backgroundColor:'#f5f5f5',
        width:fullWidth,
        height:fullHeight,


    },

    textin:{
        width:toDips(667),
        height:toDips(89),
        borderWidth:0.33*pix,
        borderColor:'#e1e1e1',
        marginTop:toDips(34),
        marginLeft:toDips(34),
        borderRadius:5,
        backgroundColor:'white'

    },
    img:{
        marginLeft:0.88*fullWidth,
        marginTop:-(toDips(60)),
    }


});

module.exports = StoreName;