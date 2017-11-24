import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import ScrollableTabView, {DefaultTabBar, ScrollableTabBar} from 'react-native-scrollable-tab-view';
export default class Tabbar extends React.Component{
	render(){
		return(
                    style={styles.nav}
                    initialPage={0}
                    renderTabBar={() => <DefaultTabBar />}
                    tabBarUnderlineStyle={{backgroundColor:'#d3d3d3'}}
                    tabBarActiveTextColor='black'
                    tabBarTextStyle={{fontSize: 22}}

                    tabBarInactiveTextColor='#696969'
                     scrollWithoutAnimation={false}
                    onChangeTab={(obj) => {
                        console.log('index:' + obj.i);
                    }
                    }
                    onScroll={(postion) => {
                        console.log('scroll position:' + postion);
                    }
                    }>
                   
                    <View style={styles.textStyle} tabLabel='tab1'>
                        <Text>dtdr</Text>
                    </View>
                    <View style={styles.textStyle} tabLabel='tab2'>
                        <Text>dtdr</Text>
                    </View>
                    <View style={styles.textStyle} tabLabel='tab3'>
                        <Text>dtdr</Text>
                    </View>
		);
	}
}
const styles = StyleSheet.create({
   
    nav: {
        flex:7,
        marginTop: 20,

        justifyContent:'space-around'
    },

    textStyle: {
        flex:1,

    },
   
});