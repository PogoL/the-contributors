import React, { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import ImgPicker from '../components/ImgPicker';
import PrimaryButton from '../components/PrimaryButton';
import Colors from '../constants/Colors';

const AddNewPostScreen = ({ navigation, route }: { navigation: any, route: any }) => {
    const [titleValue, setTitleValue] = useState('');
    const [descriptionValue, setDescriptionValue] = useState('');
    const [questionValue, setQuestionValue] = useState('');
    const [selectedImage, setSelectedImage] = useState();

    //destructure
    const { postLocation } = route.params;

    const titleChangeHandler = (text: any) => {
        setTitleValue(text);
    };

    const questionChangeHandler = (text: any) => {
        setQuestionValue(text);
    };

    const descriptionChangeHandler = (text: any) => {
        setDescriptionValue(text);
    };

    const imageTakenHandler = (imagePath: any) => {
        setSelectedImage(imagePath);
    };

    const savePostHandler = () => {
        console.log(titleValue);
        console.log(questionValue);
        console.log(descriptionValue);
        console.log(selectedImage);
        console.log(postLocation);

        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.titleInput}
                onChangeText={titleChangeHandler}
                placeholder="What's fuzz about?"
                value={titleValue}
            />
            <TextInput
                style={styles.questionInput}
                onChangeText={questionChangeHandler}
                placeholder="Formulate the problem as a question..."
                value={questionValue}
            />
            <TextInput
                multiline
                numberOfLines={9}
                style={styles.descriptionInput}
                onChangeText={descriptionChangeHandler}
                placeholder="Tell us more about it..."
                value={descriptionValue}
            />
            <ImgPicker onImageTaken={imageTakenHandler} />
            <View style={styles.buttonContainer}>
                <PrimaryButton onPress={savePostHandler} text="submit" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 30
    },
    titleInput: {
        borderColor: Colors.grey,
        borderBottomWidth: 1,
        marginBottom: 15,
        paddingVertical: 5,
        paddingHorizontal: 3,
        textAlign: 'right',
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold'
    },
    questionInput: {
        borderColor: Colors.grey,
        borderBottomWidth: 1,
        color: Colors.darkGrey,
        marginBottom: 15,
        paddingVertical: 5,
        paddingHorizontal: 5
    },
    descriptionInput: {
        borderColor: Colors.grey,
        borderWidth: 1,
        color: Colors.darkGrey,
        marginBottom: 15,
        paddingVertical: 4,
        paddingHorizontal: 2,
        textAlignVertical: 'top'
    },
    buttonContainer: {
        alignItems: 'center'
    }
});

export default AddNewPostScreen;
