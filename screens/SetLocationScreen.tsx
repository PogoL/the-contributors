import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import LocationPicker from '../components/LocationPicker';
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';

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

    const [location, setLocation] = useState();

    const returnLocationHandler = (returnedLocation: any) => {
        //console.log(returnedLocation);
        setLocation(returnedLocation);
    };

    return (
        <View>
            <LocationPicker onLocationReturned={returnLocationHandler} />
            {location ? (
                <View style={styles.yesNoContainer}>
                    <PrimaryButton text="Yes" onPress={() => { navigation.replace('AddNewPost', {postLocation:location}) }} styles={styles.primaryButton} />
                    <SecondaryButton text="No" onPress={() => { Alert.alert('Stop lying!') }} />
                </View>
            ) : (
                <View></View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    yesNoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    primaryButton: {
        marginRight:20
    }
});

export default SetLocationScreen;
