import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ProgressBarAndroidComponent } from 'react-native';
import moment from 'moment';
import { retrieveData } from '../utils/AsyncStorageHelper';
import { getDistanceText } from '../utils/locationHelper';
import { useNavigation } from '@react-navigation/native';

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
        paddingLeft: 0,
        backgroundColor: '#FFD233',
        marginTop: '55%',
        paddingTop: 6,
        paddingBottom: 6,
        alignItems: 'center',
        fontFamily: 'jost',
    },
    timeRow: {
        width: '70%',
        justifyContent: 'center',
        paddingLeft: 0,
        backgroundColor: '#FFD233',
        marginTop: '5%',
        paddingTop: 6,
        paddingBottom: 6,
        alignItems: 'center',
        fontFamily: 'jost',
    },
    header: {
        fontSize: 17,
        fontFamily: 'jost-bold',
        textAlign: 'left',
        color: '#rgba(255,255,255,0.8)',
        lineHeight: 20.23,
        marginLeft: 12.5,
        marginTop: '20%',
    },
    description: {
        fontSize: 13,
        fontFamily: 'jost',
        marginLeft: 12.5,
        marginTop: '10%',
        marginBottom: '10%',
        color: '#rgba(255,255,255,0.8)',
        lineHeight: 15.9,
        paddingRight: 10,
    },
    farAwayText: {
        color: '#000000',
        alignContent: 'center',
        textTransform: 'uppercase',
        fontSize: 10,
        fontFamily: 'jost',
    },
    timeAgoText: {
        color: '#000000',
        alignContent: 'center',
        fontSize: 10,
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

    const navigation = useNavigation();

    useEffect(async () => {
        var cordinates = await retrieveData('currentCordinates');
        setCurrentCordinates(JSON.parse(cordinates));
    }, []);

    const distance = getDistanceText(currentCordinates, { latitude: props.latitude, longitude: props.longitude });
    return (
        <View style={styles.mainRowBackground}>
            <View style={styles.rowBackground}>
                <View>
                    <TouchableOpacity
                        style={styles.rowTouchableOpacity}
                        onPress={() => {
                            navigation.navigate('PostDetails', {
                                props: {
                                    ...props,
                                    distance,
                                },
                            });
                        }}>
                        <View style={styles.firstColumn}>
                            <Image
                                style={styles.tinyLogo}
                                source={{
                                    uri: props.imageUrl,
                                }}
                            />
                            <View style={styles.distanceRow}>
                                <Text style={styles.farAwayText}>{distance}</Text>
                            </View>
                            <View style={styles.timeRow}>
                                <Text style={styles.timeAgoText}>{moment(props.createdOn).fromNow()}</Text>
                            </View>
                        </View>
                        <View style={styles.secondColumn}>
                            <Text style={styles.header}>{props.title}</Text>
                            <Text style={styles.description}>{props.question}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default Post;
