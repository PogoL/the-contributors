import React from 'react';
import { ImageBackground, View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';

const LoginScreen = ({ navigation, route }: { navigation: any, route: any }) => {

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        });
    }, [navigation]);

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/images/login-screen.png')} resizeMode="cover" style={styles.imageContainer} imageStyle={styles.image}>
                <View style={styles.imageContainer}>
                    <Text style={styles.mainText}>appropose</Text>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('PostsList') //todo change it to .replace()
                    }}>
                        <Text style={styles.loginButton}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.navigate('PostsList') }}>
                        <Text style={styles.registerButton}>Register</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        opacity: 0.3
    },
    imageContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        alignContent: 'center'
    },
    mainText: {
        fontSize: 50,
        fontFamily: 'comforta-bold',
        color: Colors.mainBlue,
        margin: 30
    },
    loginButton: {
        fontSize: 34,
        fontFamily: 'comforta',
        color: Colors.secondaryBlue,
        margin: 20
    },
    registerButton: {
        fontSize: 25,
        fontFamily: 'comforta',
        color: Colors.secondaryBlue,
        marginTop: 20
    }
});

export default LoginScreen;
