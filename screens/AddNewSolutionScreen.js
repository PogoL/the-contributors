import React, { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import ImgPicker from '../components/ImgPicker';
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';
import Colors from '../constants/Colors';
import Input from '../components/Input';

const AddNewSolutionScreen = ({ navigation, route }: { navigation: any, route: any }) => {
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: '',
        });
    }, [navigation]);

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
            <Input
                id="title"
                placeholder="What do you propose?"
                autoCorrect
                returnKeyType="next"
                onInputChange={titleChangeHandler}
                initialValue={''}
                initiallyValid={false}
                required
                style={styles.titleInput}
            />
            <Input
                id="description"
                placeholder="Tell us more about your idea..."
                autoCorrect
                onInputChange={descriptionChangeHandler}
                initialValue={''}
                initiallyValid={false}
                required
                multiline
                numberOfLines={11}
                style={styles.descriptionInput}
            />
            <ImgPicker onImageTaken={imageTakenHandler} />
            <View style={styles.buttonContainer}>
                <PrimaryButton onPress={saveSolutionHandler} text="submit" />
                <SecondaryButton
                    onPress={() => {
                        navigation.goBack();
                    }}
                    text="cancel"
                />
            </View>
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
});

export default AddNewSolutionScreen;
