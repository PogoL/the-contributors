import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet, Pressable, ScrollView, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { CustomHeaderButton } from '../components/CustomHeaderButton';

const SolutionDetailsScreen = ({ navigation, route }: { navigation: any, route: any }) => {
    const { MainNavigator } = route.params;
    const [test, setTest] = useState(true);

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTitle: '',
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item
                        title="search"
                        iconSize={45}
                        iconName="heart-outline"
                        onPress={() => navigation.navigate('AddNewSolution')} // todo
                    />
                </HeaderButtons>
            ),
        });
    }, [navigation]);

    return (
        <View style={styles.container}>
            <View style={styles.fixToText}>
                <View style={styles.headerContainer}>
                    <Text style={styles.Header}>LED in the shop wet !</Text>
                </View>
                {/* TO DO dorzucenie zmiennej czy kliniete rozwiazanie przez uzytkownika */}
                {test ? (
                    <Icon onPress={() => setTest(false)} style={styles.icon} name="heart-outline" size={45} color="#000" />
                ) : (
                    <Icon onPress={() => setTest(true)} style={styles.icon} name="heart" size={45} color="#FFD233" />
                )}
            </View>
            <View style={styles.descriptionView}>
                <ScrollView>
                    <Text style={styles.descriptionText}>
                        A television or short-screen projector can be placed in the shop window. In this way we can adapt the
                        messages displayed to the occasion more quickly than having to change the physical elements. In addition,
                        we do not produce a lot of materials that become rubbish after the promotional action is over. Digital
                        materials also do not require conventional transport.
                    </Text>
                </ScrollView>
            </View>
            <View style={styles.photoView}>
                <ImageBackground
                    style={styles.image}
                    source={{
                        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp-HCZXxFiguAOHfZm73yqLomoS9DNCvMOQg&usqp=CAU',
                    }}>
                    <View style={styles.background} />
                </ImageBackground>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#fff',
    },
    descriptionView: {
        flex: 3,
        // margin: 0,
    },
    descriptionText: {
        fontSize: 15,
        padding: 25,
        fontSize: 15,
        color: '#000',
        lineHeight: 22.9,
        backgroundColor: '#fff',
    },
    photoView: {
        flex: 3,
        // height: '100%',
    },
    headerContainer: {
        marginLeft: 25,
    },
    background: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    image: {
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
    fixToText: {
        flex: 1,
        flexDirection: 'row',
    },
    icon: {
        backgroundColor: '#fff',
        height: '75%',
        width: '25%',
    },
    Header: {
        height: '75%',
        fontSize: 23,
        backgroundColor: '#fff',
        width: '100%',
        fontWeight: 'bold',
        textAlign: 'left',
        color: '#000',
    },
});

export default SolutionDetailsScreen;
