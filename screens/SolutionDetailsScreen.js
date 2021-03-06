import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet, Pressable, ScrollView, ImageBackground } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { CustomHeaderButton } from '../components/CustomHeaderButton';

const SolutionDetailsScreen = ({ navigation, route }) => {
    const { title, description, imageUrl } = route.params;
    const [isLiked, setIsLiked] = useState(false);

    React.useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTitle: '',
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item
                        title="search"
                        iconSize={1}
                        iconName={isLiked ? "heart": "heart-outline"}
                        onPress={() => setIsLiked(!isLiked)} // todo
                    />
                </HeaderButtons>
            ),
        });
    }, [navigation, isLiked]);

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
    },
    descriptionText: {
        fontSize: 15,
        padding: 25,
        paddingTop: 0,
        fontSize: 15,
        color: 'rgba(0, 0, 0, 0.8)',
        lineHeight: 22.9,
        backgroundColor: '#fff',
    },
    photoView: {
        flex: 3,
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
    Header: {
        lineHeight: 30,
        fontSize: 25,
        marginLeft: '6.5%',
        marginBottom: 5,
        width: '80%',
        fontWeight: 'bold',
        textAlign: 'left',
        color: 'rgba(0, 0, 0, 0.8)',
        maxHeight: '30%',
        minHeight: '7.5%',
    },
});

export default SolutionDetailsScreen;
