/**
 * Created by air on 2017/4/27.
 */
import React, {
    Component
} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    PixelRatio,
    TouchableOpacity,
} from 'react-native';
// import {
//     toDips,
//     getFontSize
// } from '../../common/utils/PixelRatioUtils';
import {toDips} from '../PixelRatioUtils';
const fullWidth = Dimensions.get('window').width;
const fullHeight = Dimensions.get('window').height;
const pix = PixelRatio.get();

class HeaderCell extends Component {
    constructor(props) {
        super(props);

    }
    static get defaultProps() {
        return {
            name: '',
            text: '',
        }
    }
    render() {
        return (
            <View style={styles.header}>
                <TouchableOpacity onPress = {this.props.onPress}>
                    <Image source={require('./img/zuo.png')} style={styles.img}/>
                </TouchableOpacity>
                <Text style = {styles.tx1}>{this.props.name}</Text>
                <TouchableOpacity onPress = {this.props.savePress}>
                    <Text style = {styles.tx2}>{this.props.text}</Text>
                </TouchableOpacity>
            </View>
        );

    }
}


const styles = StyleSheet.create({
    img: {
        width: toDips(50),
        height: toDips(50),
    },
    header: {
        width: fullWidth,
        height: 0.06 * fullHeight,
        backgroundColor: 'white',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 0.33 * pix,
        borderColor: '#e8e8e8'

    },
    titleViewContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: 40,
        right: 40,
        top: 0,
        bottom: 0
    },
    tx1: {
        fontSize: toDips(34)
    },
    tx2: {
        fontSize: toDips(30),
        marginRight: 0.05 * fullWidth,
        color: '#24a5ff'
    },


});

module.exports = HeaderCell;