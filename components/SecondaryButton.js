import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Colors from '../constants/Colors';

const SecondaryButton = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={[styles.styledButton, props.style, props.isAssociated && styles.associated]}>
                <Text style={[styles.text, props.textStyle]}>{props.text}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    associated: {
        backgroundColor: Colors.yellow
    },
    styledButton: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.8)',
        padding: 10,
        paddingHorizontal: 26,
    },
    text: {
        color: 'black',
        fontFamily: 'jost',
        fontSize: 17,
    },
});

export default SecondaryButton;
