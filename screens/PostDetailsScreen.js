import React from 'react';
import { View, Image, Text, StyleSheet, Pressable, ScrollView, ImageBackground } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';
import Colors from '../constants/Colors';
import Icon from 'react-native-vector-icons/Ionicons';

const PostDetailsScreen = ({ navigation, route }) => {
    const { props } = route.params;
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
                        uri: props.imageUrl,
                    }}>
                    <View style={styles.background} />
                </ImageBackground>
                <View style={styles.distanceView}>
                    <Text style={styles.distanceText}>{props.distance}</Text>
                </View>
                <View>
                    <Text style={styles.titleText}>{props.title}</Text>
                </View>
                <View>
                    <Text style={styles.questionText}>{props.question}</Text>
                </View>
                <View style={styles.Test}>
                    <Text style={styles.questionText2}>67 contributors also see this as a problem</Text>
                    <SecondaryButton
                        text="+1"
                        style={styles.addRating}
                        textStyle={styles.textStyle}
                        onPress={() => console.log('+1 byczku')}
                    />
                </View>
            </View>
            <View style={styles.descriptionView}>
                <Text style={styles.retailer}>
                    <Icon name="md-location-sharp" size={25} color={Colors.black} style={styles.pin} />
                    {props.retailerName}, {props.retailerAddress}
                </Text>
                <ScrollView>
                    <Text style={styles.descriptionText}>{props.description}</Text>
                </ScrollView>
            </View>
            <View style={styles.buttonsView}>
                <PrimaryButton
                    text="check solutions"
                    style={styles.checkSolutionsButton}
                    onPress={() =>
                        navigation.navigate('SolutionList', {
                            postId: props.id,
                            question: props.question,
                        })
                    }
                />
                <SecondaryButton
                    text="add solution"
                    style={styles.addSolutionButton}
                    onPress={() => {
                        navigation.navigate('AddNewSolution', { postId: props.id });
                    }}
                />
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
    Test: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginRight: 20,
        marginTop: 10,
    },
    descriptionView: {
        height: '40%',
        marginBottom: 5,
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
        color: '#rgba(0,0,0,0.8)',
        alignContent: 'center',
        fontSize: 13,
        fontFamily: 'jost',
        padding: 4,
    },
    buttonsView: {
        height: '100%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: '4%',
    },
    addRating: {
        padding: 0,
        paddingHorizontal: 10,
        paddingVertical: 10,
        color: '#rgba(255,255,255,0.8)',
        width: 50,
        alignItems: 'center',
        alignContent: 'center',
        height: 50,
        borderColor: '#rgba(255,255,255,0.8)',
        borderWidth: 2,
    },
    textStyle: {
        color: '#fff',
    },
    checkSolutionText: { fontSize: 15, marginTop: '7.5%', color: '#rgba(255,255,255,0.8)' },
    addSolutionText: { fontSize: 15, marginTop: '7.5%', color: '#rgba(0,0,0,0.8)' },
    distanceView: {
        width: '40%',
        justifyContent: 'center',
        backgroundColor: '#FFD233',
        alignItems: 'center',
        marginTop: '30%',
    },
    titleText: {
        fontSize: 28,
        fontFamily: 'jost-bold',
        textAlign: 'left',
        color: '#rgba(255,255,255,0.8)',
        marginLeft: 10,
        marginTop: '5%',
    },
    questionText: {
        fontSize: 20,
        fontFamily: 'jost',
        textAlign: 'left',
        color: '#rgba(255,255,255,0.8)',
        marginHorizontal: 15,
        marginTop: '5%',
    },
    questionText2: {
        fontSize: 14,
        width: 140,
        fontFamily: 'jost',
        textAlign: 'left',
        color: '#rgba(255,255,255,0.8)',
    },
    descriptionText: {
        padding: 25,
        paddingVertical: 15,
        fontSize: 15,
        fontFamily: 'jost',
        marginLeft: 10,
        marginTop: '0%',
        marginBottom: '10%',
        color: '#000',
        lineHeight: 22.9,
    },
    retailer: {
        color: Colors.black,
        fontFamily: 'jost-bold',
        fontSize: 17,
        padding: 20,
    },
    pin: {
        color: Colors.black,
    },
});

export default PostDetailsScreen;
