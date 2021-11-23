import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
const styles = StyleSheet.create({
    tinyLogo: {
        width: '100%',
        height: '100%',
        borderRadius: 25,
        position: 'absolute', zIndex: 0
    },
    rowBackground: {
        backgroundColor: 'red',
        marginTop: 10,
        borderRadius: 25,
    },
    test5: {
        height: '100%',
        width: '50%',
    },
    rowTouchableOpacity: {
        height: 180,
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        // padding: 10,
    },
    rowView: {
        // marginRight: 20,
        width:'50%',
        padding: 20,
        paddingLeft: 0,
    },
    
    Header: {
        fontSize:20.23,
        fontWeight:'bold',
        textAlign:'center',
        color:'#2F4152',
        fontFamily: 'Jost'
    },
    Description:{
        fontSize:5.9,
    },
    testTxt1: {
        color:"white",
        paddingTop:'100%'
    },
    testTxt2: {
        color:"white",
        paddingTop:'10%',
        paddingBottom:'10%',
        backgroundColor: 'pink',
        borderTopRightRadius:25,
        borderBottomRightRadius:25

    },
    MainRowBackground:{
        padding:10
    }
});
const PostScreen = (props) => {
    return (
        <View style={styles.MainRowBackground}>
            <View style={styles.rowBackground}>
                <View>
                    <TouchableOpacity style={styles.rowTouchableOpacity} onPress={() => console.log("test" + props.name)} >
                        <View style={styles.test5}  >
                            <Image
                                style={styles.tinyLogo}
                                source={{
                                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                                }}
                            />
                        <View style={styles.rowView}>
                        <Text style={styles.testTxt1}>{props.name}</Text>
                        <Text style={styles.testTxt2}>{props.name}</Text>
                        </View>

                        </View>
                        <View style={styles.rowView}>
                            <Text style={styles.Header}>{props.header}</Text>
                            <Text style={styles.Description}>{props.description}</Text>
                        </View>

                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default PostScreen;