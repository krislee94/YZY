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
    TouchableOpacity,

    PixelRatio,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
// var photoOptions = {
//     title:'请选择',
//     cancelButtonTitle:'取消',
//     takePhotoButtonTitle:'拍照',
//     chooseFromLibraryButtonTitle:'选择相册',
//     quality:0.75,
//     allowsEditing:true,
//     noData:false,
//     storageOptions: {
//         skipBackup: true,
//         path:'images',
//         cameraRoll:true,
//
//     }
//
// }

const fullWidth = Dimensions.get('window').width;
const fullHeight = Dimensions.get('window').height;
const pix = PixelRatio.get();

class AddStoreCellLogo extends Component{
    constructor(props){
        super(props);

    }
    static get defaultProps(){
        return{
            name:'',


        }
    }
    // //打开相机的选择方法，很吊的
    // openMycamera = () =>{
    //     ImagePicker.showImagePicker(photoOptions,(response) =>{
    //         console.log('response'+response);
    //         if (response.didCancel){
    //             return
    //         }else if(response.eror){
    //             console.log('ImagePicker Error',response.error)
    //         }else{
    //
    //             let baseUri = base64.encode(response.uri);
    //
    //
    //         }
    //
    //     })
    // }
    render(){
        return(
            <View style = {styles.container}>
                <Text style = {styles.tx1}>{this.props.name}</Text>
                <TouchableOpacity onPress={()=>this.openMycamera()} >
                    <Image
                        style = {styles.img}
                        source={require('./../img/h5.jpg')}
                    />
                </TouchableOpacity>

                {/*<TouchableOpacity onPress={()=>this.openMycamera()}>*/}
                    {/*<Image*/}
                        {/*style = {styles.img1}*/}
                        {/*source={require('./img/you.png')}*/}
                    {/*/>*/}
                {/*</TouchableOpacity>*/}


            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        width:fullWidth,
        height:0.173*fullWidth,
        flexDirection:'row',
        alignItems:'center',
        borderBottomWidth:0.33*pix,
        borderColor:'#bbbbbb',
    },
    tx1:{
        fontSize:15,
        color:'black',
        marginLeft:0.04*fullWidth,

    },
    img:{
        borderWidth:0.23*pix,
        borderColor:'#e1e1e1',
        width:0.125*fullWidth,
        height:0.125*fullWidth,
        marginLeft:0.56*fullWidth,
        marginRight:0.01*fullWidth,
        borderRadius:5,


    },




});

module.exports = AddStoreCellLogo;