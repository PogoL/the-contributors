import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Colors from '../constants/Colors';

const PrimaryButton = (props: any) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={[styles.styledButton, props.style]}>
                <Text style={[styles.text, props.textStyle]}>{props.text}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    styledButton: {
        backgroundColor: 'black',
        padding: 10,
        paddingHorizontal: 26,
    },
    text: {
        color: Colors.primary,
        fontFamily: 'jost',
        fontSize: 18,
    },
});

export default PrimaryButton;
