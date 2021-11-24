import * as Location from 'expo-location';
import haversine from 'haversine-distance';
import ENV from '../envVars';

const verifyPermissions = async () => {
    const result = await Location.requestForegroundPermissionsAsync();
    if (result.status !== 'granted') {
        Alert.alert('Insufficient permissions!', 'You need to grant location permissions to use this app.', [{ text: 'Okay' }]);
        return false;
    }
    return true;
};

export const getCurrentCordinates = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
        return;
    }
    Location.setGoogleApiKey(ENV.googleApiKey);
    const location = await Location.getCurrentPositionAsync({});
    var currentCordinates = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
    };

    return currentCordinates;
};

export const getDistanceText = (firstPlaceCordinates, secondPlaceCordinates) => {
    var distance = haversine(firstPlaceCordinates, secondPlaceCordinates) / 1000;
    return `${distance.toFixed(1)} km away from you`;
};
