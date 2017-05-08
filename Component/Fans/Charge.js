import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    ScrollView,
    
} from 'react-native';
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
} from 'react-native-weui';
import Delivery from './Delivery'
const width = Dimensions.get('window').width;
class Charge extends Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
           <View style={{ flex: 1 }}>
            <TabNav style={{ flex: 1,borderBottomWidth:0}} tabBarActiveTextColor='#f23030' tabBarInactiveTextColor='#666666' tabBarUnderlineStyle={{backgroundColor:"#f23030",height:1,width:65,marginLeft:(width/5-65)/2}} tabBarTextStyle={{fontSize:16}} tabBarBackgroundColor='#ffffff'
               page={0}
                  
            >
                <View tabLabel="全部" style={{backgroundColor:'#f5f5f5'}}>
                    <ScrollView>
                        <Text>
                            dfjalkjdfljalkdjfla
                        </Text>
                        
                     </ScrollView>   
                </View>
                <View tabLabel="待审核" style={{backgroundColor:'#f5f5f5'}}>

                </View>
                <View tabLabel="退款中" style={{backgroundColor:'#f5f5f5'}} >                 
                                         
                </View>
                <View tabLabel="已退款" style={{backgroundColor:'#f5f5f5'}}>
            
                </View>
                <View tabLabel="已拒绝" style={{backgroundColor:'#f5f5f5'}}>
            
                </View>    
            </TabNav>
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

module.exports = Charge;