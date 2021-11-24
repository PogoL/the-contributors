import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet, Pressable, ScrollView, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { CustomHeaderButton } from '../components/CustomHeaderButton';

const SolutionDetailsScreen = ({ navigation, route }: { navigation: any, route: any }) => {
    console.log(route.params);
    const { MainNavigator, title, description, imageUrl } = route.params;
    console.log('title');
    console.log(title);
    console.log(imageUrl);

    const [test, setTest] = useState(false);

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTitle: '',
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    {test ? (
                        <Item
                            title="search"
                            iconSize={1}
                            iconName="heart"
                            onPress={() => console.log('Unlike')} // todo lajki
                        />
                    ) : (
                        <Item
                            title="search"
                            iconSize={1}
                            iconName="heart-outline"
                            onPress={() => console.log('Like')} // todo
                        />
                    )}
                </HeaderButtons>
            ),
        });
    }, [navigation]);

    return (
        <View style={styles.container}>
            <View style={styles.descriptionView}>
                <Text style={styles.Header}>{title}</Text>
                <ScrollView>
                    <Text style={styles.descriptionText}>{description}</Text>
                </ScrollView>
            </View>
            <View style={styles.photoView}>
                <ImageBackground
                    style={styles.image}
                    source={{
                        uri: imageUrl,
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
        paddingTop: 0,
        fontSize: 15,
        color: '#000',
        lineHeight: 22.9,
        backgroundColor: '#fff',
    },
    photoView: {
        flex: 3,
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
        backgroundColor: 'red',
        height: '20%',
        margin: 0,
    },
    icon: {
        backgroundColor: '#fff',
        height: '75%',
        width: '25%',
    },
    Header: {
        lineHeight: 30,
        fontSize: 25,
        marginLeft: '6.5%',
        marginBottom: 5,
        width: '80%',
        fontWeight: 'bold',
        textAlign: 'left',
        color: '#000',
        maxHeight: '30%',
        minHeight: '7.5%',
    },
});

export default SolutionDetailsScreen;
