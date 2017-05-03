/**
 * Created by air on 2017/5/2.
 */
import React, {
    Component
} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    PixelRatio,
    ListView,
    Image,
    InteractionManager,
    TouchableOpacity,
    Platform


} from 'react-native';
import HeaderCell from './HeaderCell';
// import {
//     toDips
// } from '../../common/utils/PixelRatioUtils';
import {toDips} from '../PixelRatioUtils';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import GetFans from './GetFans';
import LoseFans from './LoseFans';
import {
    NavBar as TabNav,
    Button,
    Cells,
    CellsTitle,
    CellsTips,
    Cell,
    CellHeader,
    CellBody,
    CellFooter,
    CellText,
} from 'react-native-weui'


const fullWidth = Dimensions.get('window').width;
const fullHeight = Dimensions.get('window').height;
const pix = PixelRatio.get();
const dataA = {
    "followList": [{
            "followUserId": "1",
            "followPetName": "花甲少年",
            "followHeadImg": "/Users/air/Desktop/YZY/Component/img/touxiang.png",
            "followOpTime": "2017-04-08 12:00"
        }, {
            "followUserId": "2",
            "followPetName": "花甲少女",
            "followHeadImg": "/Users/air/Desktop/YZY/Component/img/touxiang.png",
            "followOpTime": "2017-04-08 12:00"
        }

    ],
    "total": "2"
}
class FansCharge extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }


    //fanhui
    gotoPre() {
        const {
            navigator
        } = this.props;
        InteractionManager.runAfterInteractions(() => {
            navigator.pop()
        })
    }


    render() {
        return (

            <View style = {styles.container}>
            <HeaderCell
                name="粉丝管理"
                onPress = {this.gotoPre.bind(this)}
            />
                <TabNav style={styles.tabNav}
                        tabBarActiveTextColor='#24a5ff'
                        tabBarInactiveTextColor='#666666'
                        tabBarUnderlineStyle={{backgroundColor:"#24a5ff",height:1,width:toDips(190),marginLeft:(fullWidth/2-60)/2}}
                        tabBarTextStyle={{fontSize:toDips(30)}}
                        >
                    <GetFans  tabLabel="圈粉 (12)" />
                    <LoseFans tabLabel="丢粉 (12)" />
                </TabNav>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS == 'ios' ? 0.024 * fullHeight : 0,
        flex: 1,
    },
    tabNav: {
        flex: 1,
        borderBottomWidth: 0,
        backgroundColor: '#ffffff',
        height: 0.06 * fullHeight,
    }


});

module.exports = FansCharge;