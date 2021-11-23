import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PostsListScreen from '../screens/PostsListScreen';
import Colors from '../constants/Colors';
import LoginScreen from '../screens/LoginScreen';
const Stack = createNativeStackNavigator();

export default function MainNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={
                {
                    headerStyle: {
                        backgroundColor: Colors.primary
                    },
                    headerTintColor: Colors.mainBlue,
                    headerTitleStyle: {
                        fontFamily: 'comforta-bold'
                    },
                    headerTitle: 'appropose'
                }}>
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                />
                <Stack.Screen name="PostsList" component={PostsListScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}