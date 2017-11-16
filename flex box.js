import React, { Component } from 'react';
import { Text, View, StatusBar, Image } from 'react-native';

// You can import from local files

// or any pure javascript modules available in npm

var hid = true;
export default class App extends Component {

    render() {
        return (

            <View style={{flexDirection: 'colum',flex:1}}>
                <View>
                    <StatusBar hidden={hid} />
                </View>
                <View style={{flex:1,justifyContent:'row',backgroundColor:'aqua'}}>
                    <Text>nav top</Text>
                </View>
                <View style={{flex:8,flexDirection:'row'}}>
                    <View style={{backgroundColor:'red',flex:2,flexDirection:'colum',}}>
                        <Text>nva left</Text>
                        <View style={{backgroundColor:'black',flex:1,flexDirection:'colum'}}>
                            <View style={{backgroundColor:'red',flex:1}}></View>
                            <View style={{backgroundColor:'blue',flex:1}}></View>
                        </View>
                        <View style={{backgroundColor:'red',flex:1}}></View>
                        <View style={{backgroundColor:'black',flex:1}}>

                        </View>
                    </View>
                    <View style={{backgroundColor:'blue',flex:5,alignItems:'center',justifyContent:'space-around'}}>

                        <Text>contania</Text>
                        <Image
                            source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/cat.gif' }}
                            style={{ height: 140, width: 200 }}
                        />

                        <Image
                            source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/cat.gif' }}
                            style={{ height: 140, width: 200 }}
                        />

                        <Image
                            source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/cat.gif' }}
                            style={{ height: 140, width: 200 }}
                        />

                    </View>
                </View>


                <View style={{flex:1,justifyContent:'row',backgroundColor:'aqua'}}>
                    <Text>botton</Text>
                </View>


            </View>
        );
    }
}

