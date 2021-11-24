import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Modal, Image, StyleSheet, Text, View } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

const SuccessModal = (props) => {
    const buttonText = props.newSolutionAdded ? 'Cool!' : 'You bet!';
    return (
        <Modal animationType="fade" transparent={true} visible={props.modalVisible} onRequestClose={props.onSetVisible}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Image source={require('../assets/images/checkmark.png')} />
                    <Text style={styles.modalText}>
                        Your {props.newSolutionAdded ? 'solution' : 'issue'} has been successfully posted.
                    </Text>
                    <PrimaryButton text={buttonText} onPress={props.onSetVisible} />
                </View>
            </View>
        </Modal>
    );
};

export default SuccessModal;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
        backgroundColor: 'rgba(240,240,240,0.85)',
    },
    modalView: {
        margin: 20,
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
    },
    modalText: {
        margin: 15,
        fontFamily: 'jost',
        fontSize: 20,
        textAlign: 'center',
    },
    modalContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
});
