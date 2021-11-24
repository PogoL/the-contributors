import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Colors from '../constants/Colors';

const SecondaryButton = (props: any) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={[props.styles, styles.styledButton]}>
                <Text style={styles.text}>{props.text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    styledButton: {
        backgroundColor: Colors.grey,
        padding: 5,
        borderRadius: 20,
        paddingHorizontal: 30
    },
    text: {
        color: 'black',
        fontFamily: 'jost',
        fontSize: 15
    }
});

export default SecondaryButton;