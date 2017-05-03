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
      TextInput,
      InteractionManager,
      Platform
  } from 'react-native';
  // import {
  //     toDips
  // } from '../../common/utils/PixelRatioUtils';
  import {toDips} from '../PixelRatioUtils';
  import HeaderCell from './HeaderCell';
  import FansCharge from './FansCharge';
  import WorkTableVC from './WorkTableVC';
  const fullWidth = Dimensions.get('window').width;
  const fullHeight = Dimensions.get('window').height;
  const pix = PixelRatio.get();

  class Delivery extends Component {
      constructor(props) {
          super(props);
          this.state = {
              text: "请输入金额",
          }

      }

      gotoPre() {
          const {
              navigator
          } = this.props;
          InteractionManager.runAfterInteractions(() => {
              navigator.pop()
          })
      }
      gotoNext() {
          const {
              navigator
          } = this.props;
          InteractionManager.runAfterInteractions(() => {
              this.props.navigator.push({
                  component: WorkTableVC,
                  name: 'WorkTableVC',
                  passProps: {...this.props
                  }
              })

          })
      }

      renderGray() {
          return (
              <View style = {styles.renderGray}>

        </View>
          );
      }

      renderView1() {
          return (
              <View style = {styles.view1}>
            <Text style = {styles.tx1}>基础运费</Text>
            <TextInput 
                style = {styles.textinput}
            />
            <Text >元</Text>

        </View>
          );

      }
      renderView2() {
          return (
              <View style = {styles.view2}>
            <Text></Text>
            <Text></Text>
        </View>
          );

      }

      render() {

          return (
              <View style={styles.container}>
                    <HeaderCell 
                        name="配送设置"
                        text="保存"
                        onPress = {this.gotoPre.bind(this)}
                        savePress = {this.gotoNext.bind(this)}

                    />

                    <View style = {styles.view1}>
                        <Text style = {styles.tx1}>基础运费</Text>
                            <TextInput 
                                style = {styles.textin}
                                placeholder = '{this.state.text}'
                                placeholderTextColor = '#e8e8e8'
                                underlineColorAndroid="transparent"
                            />
                         <Text style = {styles.tx1}>元</Text>

                    </View>

                    <View style = {styles.view2}>
                        <Text style = {styles.tx1}>满</Text>
                            <TextInput 
                                style = {styles.textin}
                                placeholder = {this.state.text}
                                underlineColorAndroid="transparent"
                            />
                         <Text style = {styles.tx1}>元，免费送货</Text>

                    </View>
                   

                </View>



          );

      }
  }


  const styles = StyleSheet.create({
      container: {
          marginTop: Platform.OS == 'ios' ? 0.024 * fullHeight : 0,
          flex: 1,
          backgroundColor: '#f5f5f5'
      },
      renderGray: {
          width: fullWidth,
          height: toDips(40),
          backgroundColor: '#f5f5f5',
          marginTop: 200,
      },
      view1: {
          width: fullWidth,
          height: toDips(96),
          flexDirection: 'row',
          alignItems: 'center',
          borderBottomWidth: 0.13 * pix,
          paddingLeft: toDips(60),
          borderColor: '#e8e8e8',
          backgroundColor: '#ffffff'
      },
      view2: {
          width: fullWidth,
          height: toDips(96),
          flexDirection: 'row',
          alignItems: 'center',
          paddingLeft: toDips(140),
          borderBottomWidth: 0.13 * pix,
          borderColor: '#e8e8e8',
          backgroundColor: '#ffffff'
      },
      textin: {
          width: toDips(300),
          height: toDips(60),
          borderRadius: 5,
          backgroundColor: '#f5f5f5',
          marginLeft: toDips(10),
          marginRight: toDips(10),
          color: '#666666',
          fontSize: toDips(28)
      },
      tx1: {
          fontSize: toDips(28),
          color: '#666666',
      },

  });

  module.exports = Delivery;