// import React,{Component} from  'react';
// import {
//     Text,
//     Animated,
//     Easing
// } from 'react-native';
//  class FadeInView extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             fadeAnim: new Animated.Value(0),          // 透明度初始值设为0
//         };
//     }
//     componentDidMount() {
//         Animated.timing(                            // 随时间变化而执行的动画类型
//             this.state.fadeAnim,                      // 动画中的变量值
//             {
//                 toValue: 1,                             // 透明度最终变为1，即完全不透明
//                 duration: 2000,
//                 easing: Easing.back,
//             }
//         ).start();                                  // 开始执行动画
//     }
//     render() {
//         return (
//             <Animated.View                            // 可动画化的视图组件
//                 style={{
//                     ...this.props.style,
//                     opacity: this.state.fadeAnim,          // 将透明度指定为动画变量值
//                 }}
//             >
//                 {this.props.children}
//             </Animated.View>
//         );
//     }
// }
// export default class An extends Component{
//     render(){
//         return(
//             <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
//                 <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
//             </FadeInView>
//         );
//     }
// }



// import React from 'react';
// import {
//     View,
//     Animated
// } from 'react-native';
//
// export default class RotationSquare extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             animatedValue: new Animated.Value(0)
//         };
//     }
//
//     componentDidMount() {
//         Animated.timing(this.state.animatedValue, {
//             toValue:100,
//             duration: 3000
//         }).start();
//     }
//
//     render() {
//         let interpolatedAnimation = this.state.animatedValue.interpolate({
//             inputRange: [0, 100],
//             outputRange: ['0deg', '360deg']
//         });
//         return (
//             <View style={styles.container}>
//                 <Animated.View
//                     style={[styles.box,
//                         {transform: [
//                             {rotate: interpolatedAnimation},
//                             {translateY: this.state.animatedValue}
//                         ]}]} />
//             </View>
//         );
//     }
// }
//
// const styles = {
//     container: {
//         flex: 1,
//         // alignItems: 'center'
//     },
//
//     box: {
//         width: 80,
//         height: 80,
//         backgroundColor: 'red',
//         top: 100,
//         left: 100,
//     }
// };


import React,{Component} from  'react';
import {
    StyleSheet,
    View,
    Animated,
    Easing
} from 'react-native';
export default class Anexple extends Component{
    //初始化一个带动画属性的值用于旋转动画的初始值：
    constructor () {
        super();
        this.spinValue = new Animated.Value(0)
    }
    //创建了一个名为 spin 的方法，并在 componentDidMount 中调用它，目的是在 app 加载之后运行动画
    componentDidMount () {
        this.spin()
    }
    spin () {
        this.spinValue.setValue(0);
        Animated.timing(
            this.spinValue,
            {
                toValue: 1,
                duration: 4000,
                easing: Easing.linear
            }
        ).start(() => this.spin())
    }
    render () {
        const spin = this.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        });
        return (
            <View style={styles.container}>
                <Animated.Image
                    style={{
                        width: 227,
                        height: 200,
                        transform: [{rotate: spin}] }}
                    source={require('./img/reactjs.png')}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});