import React, { useState } from 'react';
import { View, StyleSheet, Alert, TextInput, ScrollView } from 'react-native';
import ImgPicker from '../components/ImgPicker';
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';
import SuccessModal from '../components/SuccessModal';
import Colors from '../constants/Colors';
import { addPost } from '../api/post';
import { retrieveData } from '../utils/AsyncStorageHelper';

const AddNewPostScreen = ({ navigation, route }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [question, setQuestion] = useState('');
    const [image, setImage] = useState();

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: '',
        });
    }, [navigation]);

    const [modalVisible, setModalVisible] = useState(false);

    const { postLocation, postRetailer, postRetailerAddress } = route.params;

    const submitHandler = async () => {
        if (!validateForm()) {
            Alert.alert('Wrong input!', 'Fill all required fields.', [{ text: 'Okay' }]);
            return;
        }
        var user = JSON.parse(await retrieveData('user'));
        await addPost({
            title,
            question,
            description,
            latitude: postLocation.latitude,
            longitude: postLocation.longitude,
            userId: user.id,
            image,
            retailerName: postRetailer,
            retailerAddress: postRetailerAddress,
        });

        setModalVisible(true);
    };

    const validateForm = () => {
        if (!title || !description || !question || !image) {
            return false;
        }
        return true;
    };

    return (
        <View style={styles.container}>
            <TextInput placeholder="What's the fuzz about?" onChangeText={setTitle} style={styles.titleInput} maxLength={30} />
            <TextInput
                placeholder="Formulate the problem as a question..."
                onChangeText={setQuestion}
                style={styles.questionInput}
                maxLength={100}
            />
            <TextInput
                placeholder="Tell us more about it..."
                onChangeText={setDescription}
                multiline
                numberOfLines={9}
                style={styles.descriptionInput}
                maxLength={300}
            />
            <ImgPicker onImageTaken={setImage} />
            <View style={styles.buttonContainer}>
                <PrimaryButton onPress={submitHandler} text="submit" style={styles.button} textStyle={styles.buttonText} />
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
                newSolutionAdded={false}
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
        fontFamily: 'jost-bold',
    },
    questionInput: {
        borderColor: Colors.mainBlue,
        backgroundColor: Colors.lightGrey,
        borderWidth: 1,
        color: Colors.mainBlue,
        marginTop: 15,
        paddingVertical: 5,
        paddingHorizontal: 8,
        fontFamily: 'jost',
    },
    descriptionInput: {
        borderColor: Colors.mainBlue,
        backgroundColor: Colors.lightGrey,
        borderWidth: 1,
        color: Colors.mainBlue,
        marginTop: 15,
        paddingVertical: 5,
        paddingHorizontal: 8,
        textAlignVertical: 'top',
        fontFamily: 'jost',
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

export default AddNewPostScreen;
