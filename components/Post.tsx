import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ProgressBarAndroidComponent } from 'react-native';
const styles = StyleSheet.create({
    tinyLogo: {
        width: '100%',
        height: '100%',
        borderRadius: 25,
        position: 'absolute', zIndex: 0
    },
    rowBackground: {
        backgroundColor: '#2F4152',
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
    },
    rowView: {
        width:'50%',
        paddingLeft: 0,
    },

    rowView2: {
        width:'70%',
        justifyContent:'center',
        borderTopRightRadius:25,
        borderBottomRightRadius:25,
        paddingLeft: 0,
        backgroundColor:"#ffffff",
        marginTop:'45%',
        paddingTop:4,
        paddingBottom:4,
        alignItems: 'center',
    },
    rowView3: {
        width:'70%',
        justifyContent:'center',
        borderTopRightRadius:25,
        borderBottomRightRadius:25,
        paddingLeft: 0,
        backgroundColor:"#ffffff",
        marginTop:'5%',
        paddingTop:4,
        paddingBottom:4,
        alignItems: 'center',
    },
    
    
    Header: {
        fontSize:14,
        fontWeight:'bold',
        textAlign:'left',
        color:'#ffffff',
        lineHeight: 20.23,
        marginLeft:10,
        marginTop:'20%'

    },
    Description:{
        fontSize:11,
        marginLeft:10,
        marginTop:'10%',
        marginBottom:'10%',
        color:'#ffffff',
        lineHeight: 15.9,

    },
    testTxt1: {
        color:"#001EA0",
        alignContent:'center',
        fontSize:9,
        fontFamily: 'jost',

    },
    testTxt2: {
        color:"#2F4152",
        alignContent:'center',
        fontSize:9,
        fontFamily: 'jost',

    },
    MainRowBackground:{
        padding:5
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
                                    uri: props.photo,
                                }}
                            />
                            <View style={styles.rowView2}>
                                <Text style={styles.testTxt1}>{props.howFar}</Text>
                            </View>
                            <View style={styles.rowView3}>
                                <Text style={styles.testTxt2}>{props.time}</Text>
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