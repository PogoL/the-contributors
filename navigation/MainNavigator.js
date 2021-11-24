import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PostsListScreen from '../screens/PostsListScreen';
import Colors from '../constants/Colors';
import LoginScreen from '../screens/LoginScreen';
import AddNewPostScreen from '../screens/AddNewPostScreen';
import SetLocationScreen from '../screens/SetLocationScreen';
import AddNewSolutionScreen from '../screens/AddNewSolutionScreen';
import PostDetailsScreen from '../screens/PostDetailsScreen';
import SolutionsListScreen from '../screens/SolutionsListScreen';
const Stack = createNativeStackNavigator();

export default function MainNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={
                {
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
                <Stack.Screen name="SolutionList" component={SolutionsListScreen} />
                <Stack.Screen name="AddNewPost" component={AddNewPostScreen} />
                <Stack.Screen name="AddNewSolution" component={AddNewSolutionScreen} />
                <Stack.Screen name="SetLocation" component={SetLocationScreen} />
                <Stack.Screen name="PostDetails" component={PostDetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}