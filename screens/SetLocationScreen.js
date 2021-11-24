import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Alert, ScrollView } from 'react-native';
import Input from '../components/Input';
import LocationPicker from '../components/LocationPicker';
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';
import Colors from '../constants/Colors';

const SetLocationScreen = ({ navigation, route }: { navigation: any, route: any }) => {
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerTintColor: 'black',
            headerTitleStyle: {
                fontFamily: 'jost-bold',
            },
            headerTitle: 'Confirm your location',
        });
    }, [navigation]);

    const [location, setLocation] = useState();
    const [retailerAddress, setRetailerAddress] = useState();
    const [retailerName, setRetailerName] = useState();

    const retailerChangeHandler = (text) => {
        setRetailerName(text);
    };

    const returnLocationHandler = (returnedLocation: any) => {
        setLocation(returnedLocation);
    };

    const returnGeocodeHandler = (returnedGeocode: any) => {
        const address = returnedGeocode[0].city + ', ' + returnedGeocode[0].name;
        setRetailerAddress(address);
    };

    return (
        <ScrollView style={styles.container}>
            <LocationPicker onLocationReturned={returnLocationHandler} onGeocodeReturned={returnGeocodeHandler} />
            {location ? (
                <View style={styles.container}>
                    <TextInput
                        placeholder="what retailer you are in?"
                        onChangeText={setRetailerName}
                        style={styles.retailerNameInput}
                        maxLength={30}
                    />
                    <View style={styles.yesNoContainer}>
                        <PrimaryButton
                            text="Yes"
                            onPress={() => {
                                navigation.replace('AddNewPost', {
                                    postLocation: location,
                                    postRetailer: retailerName,
                                    postRetailerAddress: retailerAddress,
                                });
                            }}
                            styles={styles.button}
                        />
                        <SecondaryButton
                            text="No"
                            onPress={() => {
                                Alert.alert('Stop lying!');
                            }}
                            styles={styles.button}
                        />
                    </View>
                </View>
            ) : (
                <View></View>
            )}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
    },
    yesNoContainer: {
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
    },
    button: {
        paddingHorizontal: 40,
    },
    retailerNameInput: {
        borderColor: Colors.mainBlue,
        backgroundColor: Colors.lightGrey,
        borderWidth: 1,
        color: Colors.mainBlue,
        paddingVertical: 5,
        paddingHorizontal: 8,
        marginBottom: 15,
    },
});

export default SetLocationScreen;
