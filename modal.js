
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Modal,
    View
} from 'react-native';


export default class ModalDemo extends Component {

    constructor(props) {
        super(props);//这一句不能省略，照抄即可
        this.state = {
            animationType: 'none',//none slide fade
            modalVisible: false,//模态场景是否可见
            transparent: true,//是否透明显示
        };
    }

    render() {
        let modalBackgroundStyle = {
            backgroundColor: this.state.transparent ? 'rgba(0, 0, 0, 0.5)' : 'red',
        };
        let innerContainerTransparentStyle = this.state.transparent
            ? { backgroundColor: '#fff', padding: 20 }
            : null;

        return (

            <View style={{ alignItems: 'center', flex: 1 }}>
                <Modal
                    animationType={this.state.animationType}
                    transparent={this.state.transparent}
                    visible={this.state.modalVisible}
                    onRequestClose={() => { this._setModalVisible(false) } }
                    onShow={this.startShow}
                >
                    <View style={[styles.container, modalBackgroundStyle]}>
                        <View style={[styles.innerContainer, innerContainerTransparentStyle]}>
                            <Text style={styles.date}>哈哈哈哈哈</Text>

                            <Text
                                onPress={this._setModalVisible.bind(this,false) }
                                style={{fontSize:20,marginTop:10}}>
                                关闭
                            </Text>
                        </View>
                    </View>
                </Modal>

                <Text style={{ fontSize: 30,color:'red' }}  onPress={this._setModalVisible.bind(this, true) }>点击我</Text>


            </View>
        );
    }


    _setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    };


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 40,
    },
    innerContainer: {
        borderRadius: 10,
        alignItems: 'center',
    },

    date: {
        textAlign: 'center',
        marginBottom: 5
    },
});