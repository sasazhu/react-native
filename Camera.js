// import React from 'react';
// import {
//     AppRegistry,
//     Image,
//     StatusBar,
//     StyleSheet,
//     TouchableOpacity,
//     View,
// } from 'react-native';
// import Camera from 'react-native-camera';
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     preview: {
//         flex: 1,
//         justifyContent: 'flex-end',
//         alignItems: 'center',
//     },
//     overlay: {
//         position: 'absolute',
//         padding: 16,
//         right: 0,
//         left: 0,
//         alignItems: 'center',
//     },
//     topOverlay: {
//         top: 0,
//         flex: 1,
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//     },
//     bottomOverlay: {
//         bottom: 0,
//         backgroundColor: 'rgba(0,0,0,0.4)',
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     captureButton: {
//         padding: 15,
//         backgroundColor: 'white',
//         borderRadius: 40,
//     },
//     typeButton: {
//         padding: 5,
//     },
//     flashButton: {
//         padding: 5,
//     },
//     buttonsSpace: {
//         width: 10,
//     },
// });
//
// export default class Example extends React.Component {
//     constructor(props) {
//         super(props);
//
//         this.camera = null;
//
//         this.state = {
//             camera: {
//                 aspect: Camera.constants.Aspect.fill,
//                 captureTarget: Camera.constants.CaptureTarget.cameraRoll,
//                 type: Camera.constants.Type.back,
//                 orientation: Camera.constants.Orientation.auto,
//                 flashMode: Camera.constants.FlashMode.auto,
//             },
//             isRecording: false
//         };
//     }
//
//     takePicture = () => {
//         if (this.camera) {
//             this.camera.capture()
//                 .then((data) => console.log(data))
//                 .catch(err => console.error(err));
//         }
//     };
//
//     startRecording = () => {
//         if (this.camera) {
//             this.camera.capture({mode: Camera.constants.CaptureMode.video})
//                 .then((data) => console.log(data))
//                 .catch(err => console.error(err));
//             this.setState({
//                 isRecording: true
//             });
//         }
//     };
//
//     stopRecording = () => {
//         if (this.camera) {
//             this.camera.stopCapture();
//             this.setState({
//                 isRecording: false
//             });
//         }
//     };
//
//     switchType = () => {
//         let newType;
//         const { back, front } = Camera.constants.Type;
//
//         if (this.state.camera.type === back) {
//             newType = front;
//         } else if (this.state.camera.type === front) {
//             newType = back;
//         }
//
//         this.setState({
//             camera: {
//                 ...this.state.camera,
//                 type: newType,
//             },
//         });
//     };
//
//     get typeIcon() {
//         let icon;
//         const { back, front } = Camera.constants.Type;
//
//         if (this.state.camera.type === back) {
//             icon = require('./../app/resources/img/zoulu.png');
//         } else if (this.state.camera.type === front) {
//             icon = require('./../app/resources/img/peple-black.png');
//         }
//
//         return icon;
//     }
//
//     switchFlash = () => {
//         let newFlashMode;
//         const { auto, on, off } = Camera.constants.FlashMode;
//
//         if (this.state.camera.flashMode === auto) {
//             newFlashMode = on;
//         } else if (this.state.camera.flashMode === on) {
//             newFlashMode = off;
//         } else if (this.state.camera.flashMode === off) {
//             newFlashMode = auto;
//         }
//
//         this.setState({
//             camera: {
//                 ...this.state.camera,
//                 flashMode: newFlashMode,
//             },
//         });
//     };
//
//     get flashIcon() {
//         let icon;
//         const { auto, on, off } = Camera.constants.FlashMode;
//
//         if (this.state.camera.flashMode === auto) {
//             icon = require('./../app/resources/img/pool.png');
//         } else if (this.state.camera.flashMode === on) {
//             icon = require('./../app/resources/img/xinlv.png');
//         } else if (this.state.camera.flashMode === off) {
//             icon = require('./../app/resources/img/peple-black.png');
//         }
//
//         return icon;
//     }
//
//     render() {
//         return (
//             <View style={styles.container}>
//                 <StatusBar
//                     animated
//                     hidden
//                 />
//                 <Camera
//                     ref={(cam) => {
//                         this.camera = cam;
//                     }}
//                     style={styles.preview}
//                     aspect={this.state.camera.aspect}
//                     captureTarget={this.state.camera.captureTarget}
//                     type={this.state.camera.type}
//                     flashMode={this.state.camera.flashMode}
//                     onFocusChanged={() => {}}
//                     onZoomChanged={() => {}}
//                     defaultTouchToFocus
//                     mirrorImage={false}
//                 />
//                 <View style={[styles.overlay, styles.topOverlay]}>
//                     <TouchableOpacity
//                         style={styles.typeButton}
//                         onPress={this.switchType}
//                     >
//                         <Image
//                             source={this.typeIcon}
//                         />
//                     </TouchableOpacity>
//                     <TouchableOpacity
//                         style={styles.flashButton}
//                         onPress={this.switchFlash}
//                     >
//                         <Image
//                             source={this.flashIcon}
//                         />
//                     </TouchableOpacity>
//                 </View>
//                 <View style={[styles.overlay, styles.bottomOverlay]}>
//                     {
//                         !this.state.isRecording
//                         &&
//                         <TouchableOpacity
//                             style={styles.captureButton}
//                             onPress={this.takePicture}
//                         >
//                             <Image
//                                 source={require('./../app/resources/img/peple-black.png')}
//                             />
//                         </TouchableOpacity>
//                         ||
//                         null
//                     }
//                     <View style={styles.buttonsSpace} />
//                     {
//                         !this.state.isRecording
//                         &&
//                         <TouchableOpacity
//                             style={styles.captureButton}
//                             onPress={this.startRecording}
//                         >
//                             <Image
//                                 source={require('./../app/resources/img/peple-black.png')}
//                             />
//                         </TouchableOpacity>
//                         ||
//                         <TouchableOpacity
//                             style={styles.captureButton}
//                             onPress={this.stopRecording}
//                         >
//                             <Image
//                                 source={require('./../app/resources/img/peple-black.png')}
//                             />
//                         </TouchableOpacity>
//                     }
//                 </View>
//             </View>
//         );
//     }
// }







import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    PixelRatio,
    TouchableOpacity,
    Image,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import ImagePicker from 'react-native-image-picker';

export default class Camera extends React.Component {
   static navigationOptions= {
       headerTitle:'相机',
       headerTitleStyle:{color:'#ffffff'},
      headerStyle:{backgroundColor:'mediumspringgreen'},

   };
    state = {
        avatarSource: null,
        videoSource: null
    };
    //设置拍照尺寸
    selectPhotoTapped() {
        const options = {
            quality: 1.0,
            maxWidth: 500,
            maxHeight: 500,
            storageOptions: {
                skipBackup: true
            }
        };
        //打开图片库
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled photo picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                let source = { uri: response.uri };
                this.setState({
                    avatarSource: source
                });
            }
        });
    }

    selectVideoTapped() {
        const options = {
            title: 'Video Picker',
            takePhotoButtonTitle: 'Take Video...',
            mediaType: 'video',
            videoQuality: 'medium'
        };
        //启动相机
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled video picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                this.setState({
                    videoSource: response.uri
                });
            }
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
                    <View style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>
                        { this.state.avatarSource === null ? <Text>选择一张照片</Text> :
                            <Image style={styles.avatar} source={this.state.avatarSource} />
                        }
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.selectVideoTapped.bind(this)}>
                    <View style={[styles.avatar, styles.avatarContainer,{marginBottom: 40}]}>
                        <Text>选择一个视频</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{width:50,height:50,backgroundColor:'#eeeeee',borderRadius:25,justifyContent:'center',alignItems:'center'}}>
                        <Text>上传</Text>
                    </View>
                </TouchableOpacity>
                { this.state.videoSource &&
                <Text style={{margin: 8, textAlign: 'center'}}>{this.state.videoSource}</Text>
                }
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    avatarContainer: {
        borderColor: '#9B9B9B',
        borderWidth: 1 / PixelRatio.get(),
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatar: {
        borderRadius: 75,
        width: 150,
        height: 150,
    }
});
