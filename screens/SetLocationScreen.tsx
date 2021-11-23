import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LocationPicker from '../components/LocationPicker';
import LocPicker from '../components/LocPicker';

const SetLocationScreen = ({navigation, route}: {navigation:any, route:any}) => {
    return (
        <View>
            <Text>SetLocationScreen</Text>
            <LocationPicker />
        </View>
    );
};

const styles = StyleSheet.create({

});

export default SetLocationScreen;
