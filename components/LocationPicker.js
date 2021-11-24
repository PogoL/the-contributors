import React, { useState } from 'react';
import { View, Alert, StyleSheet, ActivityIndicator, Button } from 'react-native';
import * as Location from 'expo-location';
import Colors from '../constants/Colors';
import MapPreview from './MapPreview';
import GeocodePreview from './GeocodePreview';
import SecondaryButton from './SecondaryButton';
import { getCurrentCordinates } from '../utils/locationHelper';

const LocationPicker = (props: any) => {
    const [isFetching, setIsFetching] = useState(false);
    const [pickedLocation, setPickedLocation] = useState();
    const [geocode, setGeocode] = useState();

    const getLocationHandler = async () => {
        try {
            setIsFetching(true);
            const currentLocation = await getCurrentCordinates({});
            setPickedLocation(currentLocation);

            const geocode = await Location.reverseGeocodeAsync(currentLocation, { useGoogleMaps: true });
            setGeocode(geocode[0]);

            props.onLocationReturned(currentLocation);
            props.onGeocodeReturned(geocode);
        } catch (err) {
            Alert.alert('Could not fetch location!', 'Please try again later or pick a location on the map.', [{ text: 'Okay' }]);
        }
        setIsFetching(false);
    };

    return (
        <View style={styles.locationPicker}>
            <MapPreview style={styles.mapPreview} location={pickedLocation}>
                {isFetching ? (
                    <ActivityIndicator size="large" color={Colors.mainBlue} />
                ) : (
                    <SecondaryButton text="Get Location" onPress={getLocationHandler} />
                )}
            </MapPreview>

            <GeocodePreview geocode={geocode} />
        </View>
    );
};

const styles = StyleSheet.create({
    locationPicker: {
        marginTop: 20,
    },
    mapPreview: {
        marginBottom: 50,
        width: '100%',
        height: 250,
        borderColor: Colors.grey,
        borderWidth: 1,
    },
});

export default LocationPicker;
