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
                        {geocode.city}, {geocode.name}.
                    </Text>
                    <Text style={[styles.normalText, { marginTop: 5 }]}>Is that correct?</Text>
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
        fontFamily: 'jost',
    },
    normalText: {
        fontSize: 15,
        textAlign: 'center',
        fontFamily: 'jost',
        color: Colors.mainBlue,
    },
    boldText: {
        fontSize: 20,
        fontFamily: 'jost-bold',
        color: Colors.mainBlue,
    },
});

export default GeocodePreview;
