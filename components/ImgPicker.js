import React, { useState } from 'react';
import { View, Text, Image, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';
import * as ImagePicker from 'expo-image-picker';
import SecondaryButton from './SecondaryButton';

const ImgPicker = (props: any) => {
    const [pickedImage, setPickedImage] = useState();
    const verifyPermissions = async () => {
        const result = await ImagePicker.requestCameraPermissionsAsync();
        if (result.status !== 'granted') {
            Alert.alert('Insufficient permission', 'We need your permissions to camera', [{ text: 'Okay' }]);
            return false;
        }
        return true;
    };

    const imagePickerOptions: ImagePicker.ImagePickerOptions = {
        allowsEditing: true,
        aspect: [4, 3],
        quality: 0.5,
        // base64: true
    };

    const takeImageHandler = async () => {
        const hasPermissions = await verifyPermissions();
        if (!hasPermissions) {
            return;
        }
        const image = await ImagePicker.launchCameraAsync(imagePickerOptions);
        if (image.cancelled == false) {
            setPickedImage(image);
            props.onImageTaken(image);
        }
    };

    const chooseImageHandler = async () => {
        const hasPermissions = await verifyPermissions();
        if (!hasPermissions) {
            return;
        }
        const image = await ImagePicker.launchImageLibraryAsync(imagePickerOptions);
        if (image.cancelled == false) {
            setPickedImage(image);
            props.onImageTaken(image);
        }
    };

    return (
        <View style={styles.imagePicker}>
            <View style={{ width: '100%' }}>
                {!pickedImage ? (
                    <View></View>
                ) : (
                    <View style={styles.imagePreview}>
                        <Image source={{ uri: pickedImage.uri }} style={styles.image} />
                    </View>
                )}
            </View>
            <View style={styles.buttonContainer}>
                <SecondaryButton text="Take Image" onPress={takeImageHandler} />
                <Text style={styles.noImageText}>or</Text>
                <SecondaryButton text="Choose from library" onPress={chooseImageHandler} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    imagePicker: {
        alignItems: 'center',
        marginBottom: 15,
    },
    imagePreview: {
        width: '100%',
        height: 200,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: Colors.mainBlue,
        borderWidth: 1,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    buttonContainer: {
        flexDirection: 'row',
        margin: 10,
    },
    noImageText: {
        textAlign: 'center',
        marginTop: 5,
        padding: 5,
    },
});

export default ImgPicker;
