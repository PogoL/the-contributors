import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ProgressBarAndroidComponent } from 'react-native';
import moment from 'moment';
import { retrieveData } from '../utils/AsyncStorageHelper';
import haversine from 'haversine-distance';

const styles = StyleSheet.create({
    tinyLogo: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: 0,
    },
    rowBackground: {
        backgroundColor: '#000000',
        marginTop: 2.5,
    },
    firstColumn: {
        height: '100%',
        width: '50%',
    },
    rowTouchableOpacity: {
        height: 180,
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    secondColumn: {
        width: '50%',
        paddingLeft: 0,
    },
    distanceRow: {
        width: '70%',
        justifyContent: 'center',
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25,
        paddingLeft: 0,
        backgroundColor: '#FFD233',
        marginTop: '45%',
        paddingTop: 6,
        paddingBottom: 6,
        alignItems: 'center',
    },
    timeRow: {
        width: '70%',
        justifyContent: 'center',
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25,
        paddingLeft: 0,
        backgroundColor: '#FFD233',
        marginTop: '5%',
        paddingTop: 6,
        paddingBottom: 6,
        alignItems: 'center',
    },
    header: {
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'left',
        color: '#ffffff',
        lineHeight: 20.23,
        marginLeft: 12.5,
        marginTop: '20%',
    },
    description: {
        fontSize: 13,
        marginLeft: 12.5,
        marginTop: '10%',
        marginBottom: '10%',
        color: '#ffffff',
        lineHeight: 15.9,
        paddingRight: 10,
    },
    farAwayText: {
        color: '#000000',
        alignContent: 'center',
        textTransform: 'uppercase',
        fontSize: 11,
        fontFamily: 'jost',
    },
    timeAgoText: {
        color: '#000000',
        alignContent: 'center',
        fontSize: 11,
        textTransform: 'uppercase',
        fontFamily: 'jost',
    },
    mainRowBackground: {
        padding: 5,
    },
});

const Post = (props) => {
    const [currentCordinates, setCurrentCordinates] = useState({
        latitude: null,
        longitude: null,
    });

    useEffect(async () => {
        var cordinates = await retrieveData('currentCordinates');
        setCurrentCordinates(JSON.parse(cordinates));
    }, []);

    const renderDistance = () => {
        var distance = haversine(currentCordinates, { latitude: props.latitude, longitude: props.longitude });
        return `${distance.toFixed(1)} km away from you`;
    };

    return (
        <View style={styles.mainRowBackground}>
            <View style={styles.rowBackground}>
                <View>
                    <TouchableOpacity
                        style={styles.rowTouchableOpacity}
                        onPress={() => {
                            props.navigation.navigate('PostDetails', { Properties: props, MainNavigator: props.navigation });
                        }}>
                        <View style={styles.firstColumn}>
                            <Image
                                style={styles.tinyLogo}
                                source={{
                                    uri: props.imageUrl,
                                }}
                            />
                            <View style={styles.distanceRow}>
                                <Text style={styles.farAwayText}>{renderDistance()}</Text>
                            </View>
                            <View style={styles.timeRow}>
                                <Text style={styles.timeAgoText}>{moment(props.createdOn).fromNow()}</Text>
                            </View>
                        </View>
                        <View style={styles.secondColumn}>
                            <Text style={styles.header}>{props.title}</Text>
                            <Text style={styles.description}>{props.description}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default Post;
