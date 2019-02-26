import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput,
     TouchableOpacity, Image } from 'react-native';


export default class Login extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);
        this.state = { UserName: '', UserPassword: '', IDUser: []};
    }
    
    UserLoginFunction() {
        const { UserName } = this.state;
        const { UserPassword } = this.state;
        // this.encryptFun();
        fetch('http://163.44.192.123/caonv/user_login.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                UserName: this.state.UserName,
                UserPassword: this.state.UserPassword
            })
        }).then((response) => response.json())
            .then((responseJson) => {
                if(responseJson == 'Success'){
                    this.props.navigation.navigate("ManhHinh_Home")
                }else{
                    alert('Kiểm trả tài khoản đăng nhập!');
                }
            }).catch((error) => {
                console.error(error);
            });
    }

    render(){
        return(
            <ScrollView style={styles.container}
            contentContainerStyle={{ paddingBottom: 30 }}>
            <View style={{backgroundColor:'#fff' ,alignItems: 'center' }}>
                <Image
                    style={{ width: '100%', height: 185 }}
                    source={require('../imgs/logoapp.png')} />
            </View>
            <View style={{ alignItems: 'center' }}>
            <Text style={{fontSize: 28, color: 'red', fontWeight: 'bold'}}>
                    Distributor Manager
                </Text>
                <TextInput
                    // Adding hint in Text Input using Place holder.
                    placeholder="UserName"
                    onChangeText={UserName => this.setState({ UserName })}
                    // Making the Under line Transparent.
                    underlineColorAndroid='transparent'
                    style={styles.textstyle}
                />
                <TextInput
                    // Adding hint in Text Input using Place holder.
                    placeholder="UserPassword"
                    onChangeText={UserPassword => this.setState({ UserPassword })}
                    // Making the Under line Transparent.
                    underlineColorAndroid='transparent'
                    style={styles.textstyle}
                    secureTextEntry={true}
                />
                <TouchableOpacity
                    style={{ marginTop: 10 }}
                    onPress = {this.UserLoginFunction.bind(this)}>
                    <Text style={{ color: '#2196F3', fontSize: 20 }}> Đăng Nhập </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        alignSelf: 'stretch'
    },
    welcome: {
        fontSize: 30,
        textAlign: 'center',
        color: '#0000FF',
        fontWeight: 'bold',
        marginTop: 5,
    },
    textstyle: {
        height: 50,
        width: 250,
        borderColor: 'gray',
        borderWidth: 2,
        borderRadius: 10,
        color: 'red',
        marginTop: 10
    },
    stretch: {
        width: 250,
        height: 200
    }
});
