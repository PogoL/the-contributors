import React, { useState } from 'react';
import { View, Alert, StyleSheet, ActivityIndicator, Button } from 'react-native';
import * as Location from 'expo-location';
import Colors from '../constants/Colors';
import MapPreview from './MapPreview';
import GeocodePreview from './GeocodePreview';

const LocationPicker = () => {
    const [isFetching, setIsFetching] = useState(false);
    const [pickedLocation, setPickedLocation] = useState();
    const [geocode, setGeocode] = useState();

    const verifyPermissions = async () => {
        const result = await Location.requestForegroundPermissionsAsync();
        if (result.status !== 'granted') {
            Alert.alert(
                'Insufficient permissions!',
                'You need to grant location permissions to use this app.',
                [{ text: 'Okay' }]
            );
            return false;
        }
        return true;
    };

    const getLocationHandler = async () => {
        const hasPermission = await verifyPermissions();
        if (!hasPermission) {
            return;
        }

        try {
            setIsFetching(true);
            const location = await Location.getCurrentPositionAsync();
            var currentLocation = {
                latitude: location.coords.latitude,
                longitude: location.coords.longitude
            };
            setPickedLocation(currentLocation);

            const geocode = await Location.reverseGeocodeAsync(currentLocation);

            setGeocode(geocode[0]);
        } catch (err) {
            Alert.alert(
                'Could not fetch location!',
                'Please try again later or pick a location on the map.',
                [{ text: 'Okay' }]
            );
        }
        setIsFetching(false);
    };

    return (
        <View style={styles.locationPicker}>
            <MapPreview style={styles.mapPreview} location={pickedLocation}>
                {isFetching ? (
                    <ActivityIndicator size="large" color={Colors.mainBlue} />
                ) : (
                    <Button
                        title="Get User Location"
                        color={Colors.secondaryBlue}
                        onPress={getLocationHandler}
                    />
                )}
            </MapPreview>

            <GeocodePreview geocode={geocode} />
        </View>
    );
}

const styles = StyleSheet.create({
    locationPicker: {
        marginBottom: 15,
        marginTop: 50,
        marginHorizontal: 15
    },
    mapPreview: {
        marginBottom: 50,
        width: '100%',
        height: 250,
        borderColor: '#ccc',
        borderWidth: 1
    }
});

export default LocationPicker;
