import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import ENV from '../envVars';

const MapPreview = (props: any) => {
    let imagePreviewUrl;
    if (props.location) {
        imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${props.location.latitude
            },${props.location.longitude
            }&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7C${props.location.latitude
            },${props.location.longitude}&key=${ENV.googleApiKey}`;
    }

    return (
        <View style={{ ...styles.mapPreview, ...props.style }}>
            {props.location ? (
                <Image style={styles.mapImage} source={{ uri: imagePreviewUrl }} />
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

export default MapPreview;
