import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ProgressBarAndroidComponent } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';

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
    test5: {
        height: '100%',
        width: '50%',
    },
    rowTouchableOpacity: {
        height: 180,
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    rowView: {
        width: '50%',
        paddingLeft: 0,
    },

    rowView2: {
        width: '70%',
        justifyContent: 'center',
        paddingLeft: 0,
        backgroundColor: '#FFD233',
        marginTop: '45%',
        paddingTop: 6,
        paddingBottom: 6,
        alignItems: 'center',
    },
    rowView3: {
        width: '70%',
        justifyContent: 'center',
        paddingLeft: 0,
        backgroundColor: '#FFD233',
        marginTop: '75%',
        paddingTop: 6,
        paddingBottom: 6,
        alignItems: 'center',
    },

    Header: {
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'left',
        color: '#ffffff',
        lineHeight: 20.23,
        marginLeft: 12.5,
        marginTop: '20%',
    },
    Description: {
        fontSize: 13,
        marginLeft: 12.5,
        marginTop: '10%',
        color: '#ffffff',
        lineHeight: 15.9,
        paddingRight: 10,
    },
    testTxt1: {
        color: '#000000',
        alignContent: 'center',
        fontSize: 11,
        fontFamily: 'jost',
    },
    testTxt2: {
        color: '#000000',
        alignContent: 'center',
        fontSize: 11,
        fontFamily: 'jost',
    },
    MainRowBackground: {
        padding: 5,
    },
});
const Solution = (props) => {
    const navigation = useNavigation();

    return (
        <View style={styles.MainRowBackground}>
            <View style={styles.rowBackground}>
                <View>
                    <TouchableOpacity
                        style={styles.rowTouchableOpacity}
                        onPress={() => {
                            navigation.navigate('SolutionDetails', { ...props });
                        }}>
                        <View style={styles.test5}>
                            <Image
                                style={styles.tinyLogo}
                                source={{
                                    uri: props.imageUrl,
                                }}
                            />
                            <View style={styles.rowView3}>
                                <Text style={styles.testTxt2}>{moment(props.createdOn).fromNow()}</Text>
                            </View>
                        </View>
                        <View style={styles.rowView}>
                            <Text style={styles.Header}>{props.title}</Text>
                            <Text numberOfLines={4} style={styles.Description}>{props.description}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default Solution;
