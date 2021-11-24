import React from 'react';
import { View, Image, Text, StyleSheet, Pressable, ScrollView, ImageBackground } from 'react-native';

const PostDetailsScreen = ({ navigation, route }) => {
    const { PostProperties } = route.params;
    console.log('PostProperties');
    console.log(PostProperties);
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [navigation]);

    return (
        <View style={styles.container}>
            <View style={styles.photoView}>
                <ImageBackground
                    style={styles.image}
                    source={{
                        uri: PostProperties.imageUrl,
                    }}>
                    <View style={styles.background} />
                </ImageBackground>
                <View style={styles.distanceView}>
                    <Text style={styles.distanceText}>{PostProperties.distance}</Text>
                </View>
                <View>
                    <Text style={styles.titleText}>{PostProperties.title}</Text>
                </View>
                <View>
                    <Text style={styles.descriptionText}>{PostProperties.question}</Text>
                </View>
            </View>
            <View style={styles.descriptionView}>
                <ScrollView>
                    <Text style={styles.descriptionText}>{PostProperties.description}</Text>
                </ScrollView>
            </View>
            <View style={styles.buttonsView}>
                <Pressable style={styles.checkSolutionsButton} onPress={() => navigation.navigate('SolutionList')}>
                    <Text style={styles.checkSolutionText}>check solutions</Text>
                </Pressable>
                <Pressable style={styles.addSolutionButton} onPress={() => navigation.navigate('AddNewSolution')}>
                    <Text style={styles.addSolutionText}>add solution</Text>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    descriptionView: {
        height: '40%',
    },
    photoView: {
        height: '50%',
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
    distanceText: {
        color: '#000000',
        alignContent: 'center',
        fontSize: 13,
        fontFamily: 'jost',
        padding: 4,
    },
    buttonsView: {
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: '2.5%',
    },
    checkSolutionsButton: {
        backgroundColor: '#000000',
        width: '40%',
        height: '7.5%',
        alignItems: 'center',
        alignContent: 'center',
    },
    addSolutionButton: {
        width: '40%',
        height: '7.5%',
        alignItems: 'center',
        alignContent: 'center',
        borderColor: '#000000',
        borderWidth: 1,
    },
    checkSolutionText: { fontSize: 15, marginTop: '7.5%', color: 'white' },
    addSolutionText: { fontSize: 15, marginTop: '7.5%', color: '#000000' },
    distanceView: {
        width: '40%',
        justifyContent: 'center',
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25,
        backgroundColor: '#FFD233',
        alignItems: 'center',
        marginTop: '30%',
    },
    titleText: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'left',
        color: '#ffffff',
        marginLeft: 10,
        marginTop: '5%',
    },
    descriptionText: {
        fontSize: 15,
        padding: 25,
        fontSize: 15,
        marginLeft: 10,
        marginTop: '0%',
        marginBottom: '10%',
        color: '#000',
        lineHeight: 22.9,
    },
});

export default PostDetailsScreen;
