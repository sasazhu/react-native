import React, { Component } from 'react';
import { ScrollView,StyleSheet,Image, Text,View} from 'react-native';
import Orientation from 'react-native-orientation';
var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

const styles = StyleSheet.create({
    container:{
        flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center',backgroundColor:'#F5FCFF'
    },
    thumbnail:{
        width:100,height:80
    },
    rightContainer:{
        flex:1
    },
    title:{
        fontSize:20,marginBottom:8,textAlign:'center'
    },
    year:{
        textAlign:'center'
    },
});

export default class ReactNativeTest extends Component
{
    constructor(props) {
        super(props);

        this.state = {
            movies: null,
        };
    }

    render()
    {
        if (!this.state.movies) {
            return this.renderLoadingView();
        }
        var movie = this.state.movies;
        return this.renderMovie(movie);
    }

    fetchData()
    {
        fetch(REQUEST_URL, {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    movies:responseData.movies,
                });
            })
            .catch((error) => {
                callback(error);
            });
    }
    //强制竖屏
    componentWillMount() {
        Orientation.lockToPortrait();
    }
    componentDidMount()
    {
        this.fetchData();
    }

    renderLoadingView()
    {
        return (
            <View style={styles.container}>
                <Text>
                    正在加载数据......
                </Text>
            </View>
        );
    }

    renderMovie(movie)
    {
        return (
            <View style={styles.container}>
                <ScrollView style={{flex:1, width:400}}>
                    {
                        this.state.movies.map((mov, idx) => {
                            return(
                                <View key={idx} style={{flex:1,alignSelf:'center',flexDirection:'row'}}>
                                    <Image source={{uri:mov.posters.thumbnail}}
                                           style={styles.thumbnail} />
                                    <View style={styles.rightContainer}>
                                        <Text style={styles.title}>{mov.title}</Text>
                                        <Text style={styles.year}>{mov.year}</Text>
                                    </View>
                                </View>
                            );
                        })
                    }
                </ScrollView>
            </View>
        );
    }
}





// import React, { Component } from 'react';
// import {
//     StyleSheet,
//     Text,
//     TextInput,
//     Image,
//     View,
//     StatusBar,
//     TouchableOpacity,
//     ScrollView,
//     Button,
//     Alert,
//     Switch,
// } from 'react-native';
// import Orientation from 'react-native-orientation';
// const styles = StyleSheet.create({
//     container:{
//         flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center',backgroundColor:'#F5FCFF'
//     },
//     thumbnail:{
//         width:100,height:80
//     },
//     rightContainer:{
//         flex:1
//     },
//     title:{
//         fontSize:20,marginBottom:8,textAlign:'center'
//     },
//     year:{
//         textAlign:'center'
//     },
// });
//
// export default class ConsultScreen extends React.Component {
//     constructor() {
//         super();
//         this.state = { datas: null };
//     }
//    进入这个页面强制横屏
//     componentWillMount() {
//         Orientation.lockToLandscape();
//     }
//     componentDidMount() {
//         var request = new XMLHttpRequest();
//         request.onreadystatechange = (e) => {
//             if (request.readyState !== 4) {
//                 return;
//             }
//
//             if (request.status === 200) {
//                 var data = JSON.parse(request.responseText);
//                 this.setState({
//                     datas: data
//                 });
//
//             } else {
//                 Alert.alert('error');
//             }
//         };
//
//         request.open('GET', 'http://192.168.0.180:8080/ws-rest/specialists');
//         request.send();
//     }
//     render() {
//
//         if (!this.state.datas) {
//             return this.renderLoadingView();
//         }
//         var specialists = this.state.datas;
//         return this.renderSpecialist(specialists);
//     }
//
//     renderLoadingView()
//     {
//         return (
//             <View style={styles.container}>
//                 <Text>
//                     正在加载数据......
//                 </Text>
//             </View>
//         );
//     }
//
//     renderSpecialist(specialists){
//         return(
//             <View style={styles.container}>
//                 <View style={{flex:1,backgroundColor:'mediumspringgreen', flexDirection: 'row',justifyContent:'space-between',alignItems:'center'}}>
//                     <TouchableOpacity style={{marginLeft:20, flex:1}}>
//                         <Image source={require('../app/resources/img/jiantou2.png')}/>
//                     </TouchableOpacity>
//                     <View style={{marginLeft:20, flex:3}}>
//                         <Text style={{color:'#ffffff', fontSize:18}}>专栏文章</Text>
//                     </View>
//                     <TouchableOpacity style={{marginRight:20, flex:6,alignItems:'flex-end'}}>
//                         <Image source={require('../app/resources/img/search_white_24dp.png')}/>
//                     </TouchableOpacity>
//                 </View>
//                 <View style={{flex:8}}>
//                     <ScrollView style={{flex:1, width:400}}>
//                         {
//                             specialists.map((spec, idx) => {
//                                 return(
//                                     <View key={idx} style={styles.rightContainer}>
//                                         <Text style={styles.title}>{spec.name}</Text>
//                                         <Text style={styles.year}>{spec.gender}</Text>
//                                     </View>
//                                 );
//                             })
//                         }
//                     </ScrollView>
//                 </View>
//             </View>
//         );
//     }
// }
