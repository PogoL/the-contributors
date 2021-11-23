import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

import { GeocodeResult } from '../models/GeocodeResult';

const GeocodePreview = (props: any) => {
    let geocode: GeocodeResult | null = null;

    if (props.geocode) {
        geocode = props.geocode;
    }

    return (
        <View style={{ ...styles.mapPreview, ...props.style }}>
            {geocode ? (
                <View>
                    <Text>We have located you in {geocode.city}, {geocode.street} {geocode.name}</Text>
                </View>
            ) : (
                props.children
            )}
        </View>
    );


};

const styles = StyleSheet.create({
    mapPreview: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    mapImage: {
        width: '100%',
        height: '100%'
    }
});

export default GeocodePreview;
