import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import LocationPicker from '../components/LocationPicker';

const SetLocationScreen = ({ navigation, route }: { navigation: any, route: any }) => {
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerTintColor: 'black',
            headerTitleStyle: {
                fontFamily: 'jost-bold'
            },
            headerTitle: 'Confirm your location'
        });
    }, [navigation]);

    return (
        <View>
            <LocationPicker />

            <View style={styles.yesNoContainer}>
                <Button title="Yes" onPress={() => { }} />
                <Button title="No" onPress={() => { }} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    yesNoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default SetLocationScreen;
