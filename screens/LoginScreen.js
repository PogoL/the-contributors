import React, { useState } from 'react';
import { ImageBackground, View, Text, StyleSheet, Button, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Colors from '../constants/Colors';
import { authenticateUser } from '../api/user';

const LoginScreen = ({ navigation, route }: { navigation: any, route: any }) => {
    const [userName, onUserNameChange] = useState('');
    const [password, onPasswordChange] = useState('');

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [navigation]);

    const onLoginClickHandler = async () => {
        var isAuthenticated = await authenticateUser(userName, password);
        if (isAuthenticated) {
            navigation.navigate('PostsList');
        }
    };

    return (
        <ScrollView style={styles.container}>
            <ImageBackground
                source={require('../assets/images/login-screen.png')}
                resizeMode="cover"
                style={styles.imageContainer}
                imageStyle={styles.image}>
                <View style={styles.imageContainer}>
                    <Text style={styles.mainText}>appropose</Text>
                    <TextInput style={styles.input} onChangeText={onUserNameChange} value={userName} />
                    <TextInput secureTextEntry={true} style={styles.input} onChangeText={onPasswordChange} value={password} />
                    <TouchableOpacity onPress={onLoginClickHandler}>
                        <Text style={styles.loginButton}>Login</Text>
                    </TouchableOpacity>
                    <View style={styles.signUpContainer}>
                        <Text style={styles.accountText}>Don’t have an Account?</Text>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('PostsList');
                            }}>
                            <Text style={styles.registerButton}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // position: 'absolute',
        // width: '100%',
        // height: '100%',
    },
    image: {
        opacity: 0.3,
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },
    mainText: {
        fontSize: 35,
        fontFamily: 'comforta-bold',
        color: 'black',
        marginBottom: 50,
        marginTop: 160,
    },
    loginButton: {
        marginTop: 30,
        fontSize: 20,
        lineHeight: 20,
        paddingVertical: 15,
        textAlign: 'center',
        width: 150,
        textTransform: 'lowercase',
        fontFamily: 'comforta',
        color: 'white',
        backgroundColor: 'black',
    },
    registerButton: {
        fontSize: 22.5,
        lineHeight: 25,
        fontFamily: 'comforta',
        fontWeight: 'bold',
        color: Colors.yellow,
    },
    accountText: {
        lineHeight: 20,
        marginRight: 5,
        fontFamily: 'comforta',
    },
    signUpContainer: {
        marginTop: '20%',
        // marginbottom: '50%',
        marginBottom: 100,

        fontWeight: '700',
        width: 270,
        display: 'flex',
        flexDirection: 'row',
    },
    input: {
        textAlign: 'center',
        borderBottomColor: Colors.grey,
        borderBottomWidth: 2,
        width: 270,
        marginBottom: 20,
        fontSize: 24,
    },
});

export default LoginScreen;
