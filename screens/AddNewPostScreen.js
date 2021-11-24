import React, { useCallback, useReducer, useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import ImgPicker from '../components/ImgPicker';
import Input from '../components/Input';
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';
import Colors from '../constants/Colors';
import * as postsActions from '../store/actions/posts';

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

const formReducer = (state, action) => {
    if (action.type === FORM_INPUT_UPDATE) {
        const updatedValues = {
            ...state.inputValues,
            [action.input]: action.value,
        };
        const updatedValidities = {
            ...state.inputValidities,
            [action.input]: action.isValid,
        };
        let updatedFormIsValid = true;
        for (const key in updatedValidities) {
            updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
        }
        return {
            formIsValid: updatedFormIsValid,
            inputValidities: updatedValidities,
            inputValues: updatedValues,
        };
    }
    return state;
};

const AddNewPostScreen = ({ navigation, route }: { navigation: any, route: any }) => {
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: '',
        });
    }, [navigation]);

    const [selectedImage, setSelectedImage] = useState();

    const dispatch = useDispatch();

    //destructure
    const { postLocation, postRetailer } = route.params;

    const [formState, dispatchFormState] = useReducer(formReducer, {
        inputValues: {
            title: '',
            imageUrl: '',
            description: '',
            question: '',
            latitude: postLocation.latitude,
            longitude: postLocation.longitude,
            userId: 'u1',
        },
        inputValidities: {
            title: false,
            description: false,
            question: false,
            imageUrl: true,
            latitude: true,
            longitude: true,
        },
        formIsValid: false,
    });

    const imageTakenHandler = (image: any) => {
        setSelectedImage(image);
    };
    const inputChangeHandler = useCallback(
        (inputIdentifier, inputValue, inputValidity) => {
            dispatchFormState({
                type: FORM_INPUT_UPDATE,
                value: inputValue,
                isValid: inputValidity,
                input: inputIdentifier,
            });
        },
        [dispatchFormState]
    );

    const submitHandler = useCallback(() => {
        console.log(formState);
        if (!formState.formIsValid) {
            Alert.alert('Wrong input!', 'Fill all required fields.', [{ text: 'Okay' }]);
            return;
        }

        dispatch(
            postsActions.addPost(
                formState.inputValues.title,
                formState.inputValues.question,
                formState.inputValues.description,
                +formState.inputValues.latitude,
                +formState.inputValues.longitude,
                'u1',
                selectedImage,
                postRetailer
            )
        );

        navigation.goBack();
    }, [dispatch, formState, selectedImage]);

    return (
        <View style={styles.container}>
            <Input
                id="title"
                placeholder="What's the fuzz about?"
                errorText="Please enter a valid title!"
                autoCorrect
                returnKeyType="next"
                onInputChange={inputChangeHandler}
                initialValue={''}
                initiallyValid={false}
                required
                style={styles.titleInput}
                maxLength={30}
            />
            <Input
                id="question"
                placeholder="Formulate the problem as a question..."
                autoCorrect
                returnKeyType="next"
                onInputChange={inputChangeHandler}
                initialValue={''}
                initiallyValid={false}
                required
                style={styles.questionInput}
                maxLength={100}
            />
            <Input
                id="description"
                placeholder="Tell us more about it..."
                autoCorrect
                onInputChange={inputChangeHandler}
                initialValue={''}
                initiallyValid={false}
                required
                multiline
                numberOfLines={9}
                style={styles.descriptionInput}
                maxLength={300}
            />
            <ImgPicker onImageTaken={imageTakenHandler} />
            <View style={styles.buttonContainer}>
                <PrimaryButton onPress={submitHandler} text="submit" />
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
    questionInput: {
        borderColor: Colors.mainBlue,
        backgroundColor: Colors.lightGrey,
        borderWidth: 1,
        color: Colors.mainBlue,
        marginTop: 15,
        paddingVertical: 5,
        paddingHorizontal: 8,
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
        marginBottom: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
});

export default AddNewPostScreen;
