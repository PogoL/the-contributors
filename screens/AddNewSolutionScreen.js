import React, { useState } from 'react';
import { Modal, View, Text, Image, Pressable, ScrollView, StyleSheet, TextInput } from 'react-native';
import ImgPicker from '../components/ImgPicker';
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';
import Colors from '../constants/Colors';
import Input from '../components/Input';
import { addSolution } from '../api/solutions';
import SuccessModal from '../components/SuccessModal';

const AddNewSolutionScreen = ({ navigation, route }) => {
    const { postId } = route.params;
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: '',
        });
    }, [navigation]);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState();
    const [modalVisible, setModalVisible] = useState(false);

    const saveSolutionHandler = async () => {
        await addSolution({
            title,
            description,
            image,
            postId,
        });

        setModalVisible(true);
    };

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="What do you propose?"
                returnKeyType="next"
                onChangeText={setTitle}
                style={styles.titleInput}
            />
            <TextInput
                placeholder="Tell us more about your idea..."
                onChangeText={setDescription}
                multiline
                numberOfLines={11}
                style={styles.descriptionInput}
            />
            <ImgPicker onImageTaken={setImage} />
            <View style={styles.buttonContainer}>
                <PrimaryButton onPress={saveSolutionHandler} text="submit" style={styles.button} textStyle={styles.buttonText} />
                <SecondaryButton
                    onPress={() => {
                        navigation.goBack();
                    }}
                    text="cancel"
                    style={styles.button}
                    textStyle={styles.buttonText}
                />
            </View>
            <SuccessModal
                newSolutionAdded={true}
                modalVisible={modalVisible}
                onSetVisible={() => {
                    setModalVisible(!modalVisible);
                    navigation.goBack();
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 20,
        marginHorizontal: 30,
    },
    titleInput: {
        borderColor: Colors.mainBlue,
        backgroundColor: Colors.lightGrey,
        borderWidth: 1,
        paddingVertical: 5,
        paddingHorizontal: 8,
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
    },
    descriptionInput: {
        borderColor: Colors.mainBlue,
        backgroundColor: Colors.lightGrey,
        borderWidth: 1,
        color: Colors.mainBlue,
        marginTop: 20,
        paddingVertical: 5,
        paddingHorizontal: 8,
        textAlignVertical: 'top',
        marginBottom: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    button: {
        width: 152,
    },
    buttonText: {
        textAlign: 'center',
    },
});

export default AddNewSolutionScreen;
