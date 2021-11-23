import React, { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import ImgPicker from '../components/ImgPicker';
import PrimaryButton from '../components/PrimaryButton';
import Colors from '../constants/Colors';

const AddNewSolutionScreen = ({ navigation, route }: { navigation: any, route: any }) => {
    const [titleValue, setTitleValue] = useState('');
    const [descriptionValue, setDescriptionValue] = useState('');
    const [selectedImage, setSelectedImage] = useState();

    //destructure - TODO
    //const { postId } = route.params;

    const titleChangeHandler = (text: any) => {
        setTitleValue(text);
    };

    const descriptionChangeHandler = (text: any) => {
        setDescriptionValue(text);
    };

    const imageTakenHandler = (imagePath: any) => {
        setSelectedImage(imagePath);
    };

    const saveSolutionHandler = () => {
        console.log(titleValue);
        console.log(descriptionValue);
        console.log(selectedImage);

        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.titleInput}
                onChangeText={titleChangeHandler}
                placeholder="What do you propose?"
                value={titleValue}
            />
            <TextInput
                multiline
                numberOfLines={9}
                style={styles.descriptionInput}
                onChangeText={descriptionChangeHandler}
                placeholder="Tell us more about your idea..."
                value={descriptionValue}
            />
            <ImgPicker onImageTaken={imageTakenHandler} />
            <View style={styles.buttonContainer}>
                <PrimaryButton onPress={saveSolutionHandler} text="submit" />
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
    descriptionInput: {
        borderColor: Colors.grey,
        borderWidth: 1,
        color: Colors.darkGrey,
        marginBottom: 15,
        paddingVertical: 5,
        paddingHorizontal: 5,
        textAlignVertical: 'top'
    },
    buttonContainer: {
        alignItems: 'center'
    }
});

export default AddNewSolutionScreen;
