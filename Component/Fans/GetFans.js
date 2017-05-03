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
    ListView,
    Dimensions,
    PixelRatio,
    Image,

} from 'react-native';
// import {
//     toDips
// } from '../../common/utils/PixelRatioUtils';
import {toDips} from '../PixelRatioUtils';
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

class GetFans extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({

                rowHasChanged: (row1, row2) => row1 !== row2,

            }),
        }

    }



    componentDidMount() {

        this.fetchData();

    }

    fetchData() {

        var dataS = eval(dataA);
        this.setState({

            dataSource: this.state.dataSource.cloneWithRows(dataS.followList),
        });

    }

    renderRow(dataRow) {

        return (
            <View style = {styles.renderRow}>
                {/* <Image source={{uri:dataRow.followHeadImg}}/>*/}
                <View style = {styles.View1}>
                     <Image source={require('./img/touxiang.png')} style = {styles.img}/>
                     <Text style = {styles.tx1}>{dataRow.followPetName}</Text>
                </View>
                <View style = {styles.View2}>
                    <Text style = {styles.tx2}>{dataRow.followOpTime}</Text>
                    <Text style = {styles.tx3}>关注</Text>
               </View>
            </View>
        );
    }
    renderGray() {
        return (
            <View style = {styles.renderGray}>

        </View>
        );
    }

    render() {
        return (
            <View style = {styles.container}>
            {this.renderGray.bind(this)}
            <ListView 
                dataSource={this.state.dataSource}
                renderRow={this.renderRow.bind(this)}
            />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {

        backgroundColor: '#f5f5f5',
        paddingTop: toDips(18)
    },
    renderRow: {

        width: fullWidth,
        height: toDips(100),
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 0.13 * pix,
        borderColor: '#e8e8e8',
        paddingLeft: toDips(30),
        paddingRight: toDips(30)
    },
    View1: {
        flexDirection: 'row',

        height: toDips(100),
        alignItems: 'center',

    },
    View2: {

        flexDirection: 'row-reverse',
        height: toDips(100),
        alignItems: 'center',

    },
    img: {
        width: toDips(68),
        height: toDips(68),

    },
    tx1: {
        fontSize: toDips(28),
        color: '#666666',
        marginLeft: toDips(24)

    },
    tx2: {
        fontSize: toDips(24),
        color: '#c2c2c2'
    },
    tx3: {
        fontSize: toDips(24),
        color: '#c2c2c2',
        marginLeft: toDips(26),

    },
    renderGray: {
        width: fullWidth,
        height: toDips(40),
        backgroundColor: '#f5f5f5',
    }


});

module.exports = GetFans;