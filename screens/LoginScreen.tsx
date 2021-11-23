import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const LoginScreen = ({navigation, route}: {navigation:any, route:any}) => {
    return (
        <View>
            <Text>LoginScreen</Text>
            <Button title="Login" onPress={() => {navigation.navigate('PostsList')}}/>
        </View>
    );
};

const styles = StyleSheet.create({
    
});

export default LoginScreen;
