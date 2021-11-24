import React from 'react';
import { View, Image, Text, StyleSheet, Pressable, ScrollView, ImageBackground, Item } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SolutionDetailsScreen = ({ navigation, route }: { navigation: any, route: any }) => {
    const { MainNavigator } = route.params;
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTitle: '',
        });
    }, [navigation]);

    return (
        <View style={styles.container}>
            <View style={styles.fixToText}>
                <View style={styles.headerContainer}>
                    <Text style={styles.Header}>LED in the shop window !</Text>
                </View>
                {/* TO DO dorzucenie zmiennej czy kliniete rozwiazanie przez uzytkownika */}
                {false ? (
                    <Icon style={styles.icon} name="heart-outline" size={45} color="#000" />
                ) : (
                    <Icon style={styles.icon} name="heart" size={45} color="#FFD233" />
                )}
            </View>
            {/* <View style={styles.photoView}>
                <ImageBackground
                    style={styles.tinyLogo}
                    source={{
                        uri: 'https://retail360.pl/wp-content/uploads/2017/05/The-Body-Shop.jpg',
                    }}>
                    <View style={styles.child} />
                </ImageBackground>
                <View style={styles.rowView2}>
                    <Text style={styles.testTxt1}>100 m away from you</Text>
                </View>
                <View>
                    <Text style={styles.Header}>Sale madness!</Text>
                </View>
                <View>
                    <Text style={styles.Description}>How might we inform about sale without putting so many red signs?</Text>
                </View>
            </View>
            <View style={{ height: '40%' }}>
                <ScrollView>
                    <Text style={{ fontSize: 15, padding: 25, lineHeight: 20 }}>
                        I walk into a shop and can't focus on what I want to find because most things are covered up with big red
                        sale signs. I caught it the first time, seriously ;) I walk into a shop and can't focus on what I want to
                        find because most things are covered up with big red sale signs. I caught it the first time, seriously ;)
                        I walk into a shop and can't focus on what I want to find because most things are covered up with big red
                        sale signs. I caught it the first time, seriously ;) I walk into a shop and can't focus on what I want to
                        find because most things are covered up with big red sale signs. I caught it the first time, seriously ;)
                        I walk into a shop and can't focus on what I want to find because most things are covered up with big red
                        sale signs. I caught it the first time, seriously ;) I walk into a shop and can't focus on what I want to
                        find because most things are covered up with big red sale signs. I caught it the first time, seriously ;)
                        I walk into a shop and can't focus on what I want to find because most things are covered up with big red
                        sale signs. I caught it the first time, seriously ;)
                    </Text>
                </ScrollView>
            </View>
            <View style={styles.fixToText}>
                <Pressable style={styles.checkButton} onPress={() => MainNavigator.navigate('SolutionList')}>
                    <Text style={{ fontSize: 15, marginTop: '7.5%', color: 'white' }}>check solutions</Text>
                </Pressable>
                <Pressable style={styles.addButton} onPress={() => MainNavigator.navigate('AddNewSolution')}>
                    <Text style={{ fontSize: 15, marginTop: '7.5%', color: '#000000' }}>add solution</Text>
                </Pressable>
            </View> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: 'pink',
    },
    photoView: {
        height: '50%',
    },

    child: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    headerContainer: {},
    tinyLogo: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: 0,
    },
    logo: {
        width: 100,
        height: 100,
    },
    testTxt1: {
        color: '#000000',
        alignContent: 'center',
        fontSize: 13,
        fontFamily: 'jost',
    },
    checkButton: {
        backgroundColor: '#000000',
        width: '40%',
        height: '7.5%',
        alignItems: 'center',
        alignContent: 'center',
    },
    addButton: {
        width: '40%',
        height: '7.5%',
        alignItems: 'center',
        alignContent: 'center',
        borderColor: '#000000',
        borderWidth: 1,
    },
    rowView2: {
        width: '40%',
        justifyContent: 'center',
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25,
        paddingLeft: 0,
        backgroundColor: '#FFD233',
        paddingTop: 8,
        paddingBottom: 8,
        alignItems: 'center',
        marginTop: '30%',
    },
    fixToText: {
        height: '25%',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        // justifyContent: 'space-between',
        // marginTop: '2.5%',
    },
    icon: {
        margin: 0,
        padding: 0,
        marginTop: '2.5%',

        backgroundColor: 'red',
        height: '100%',
        width: '25%',
    },
    Header: {
        fontSize: 23,
        backgroundColor: 'blue',
        height: '100%',
        width: '100%',
        fontWeight: 'bold',
        textAlign: 'left',
        color: '#000',
        // lineHeight: 20.23,
        // marginLeft: '7.5%',
        marginTop: '5%',
    },
    Description: {
        fontSize: 15,
        marginLeft: 10,
        marginTop: '0%',
        marginBottom: '10%',
        color: '#ffffff',
        lineHeight: 22.9,
    },
});

export default SolutionDetailsScreen;
