/**
 * Created by air on 2017/4/27.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    PixelRatio,
    TouchableOpacity,
    Image,
} from 'react-native';

import ImagePicker from 'react-native-image-picker';
var photoOptions = {
    title:'请选择',
    cancelButtonTitle:'取消',
    takePhotoButtonTitle:'拍照',
    chooseFromLibraryButtonTitle:'选择相册',
    quality:0.75,
    allowsEditing:true,
    noData:false,
    storageOptions: {
        skipBackup: true,
        path:'images',
        cameraRoll:true,

    }

}


export default class AddLogo extends React.Component {
    constructor(props){
        super(props);
        this.state = {


        }
    }


    render() {
        return (
            <View style={styles.container}>

                <TouchableOpacity onPress={()=>this.openMycamera()}>
                    <Text style={styles.welcome}>
                        相机&相册
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
    //打开相机的选择方法，很吊的
    openMycamera = () =>{
        ImagePicker.showImagePicker(photoOptions,(response) =>{
            console.log('response'+response);
            if (response.didCancel){
                return
            }else if(response.eror){
                console.log('ImagePicker Error',response.error)
            }else{

                let baseUri = base64.encode(response.uri);


            }

        })
    }

}

const styles = StyleSheet.create({
    container: {

        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});