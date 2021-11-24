import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

import { GeocodeResult } from '../models/GeocodeResult';

const GeocodePreview = (props: any) => {
    let geocode: GeocodeResult | null = null;

    if (props.geocode) {
        geocode = props.geocode;
    }

    return (
        <View style={{ ...props.style }}>
            {geocode ? (
                <View style={styles.textContainer}>
                    <Text style={styles.normalText}>We have located you in:</Text>
                    <Text style={styles.boldText}>
                        {geocode.city}, {geocode.street}.
                    </Text>
                    <Text style={styles.normalText}>Is that correct?</Text>
                </View>
            ) : (
                props.children
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    textContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    normalText: {
        fontSize: 15,
        textAlign: 'center',
        color: Colors.mainBlue,
    },
    boldText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.mainBlue,
    },
});

export default GeocodePreview;
