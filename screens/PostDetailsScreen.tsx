import React from 'react';
import { View, Image,Text, StyleSheet,Pressable,ScrollView} from 'react-native';

const PostDetailsScreen = ({navigation, route}: {navigation:any, route:any}) => {
    const { MainNavigator } = route.params;
    console.log(route.params)
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        });
    }, [navigation]);
    
    return (
        <View style={styles.container}>
        <View style={styles.photoView}>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: 'https://retail360.pl/wp-content/uploads/2017/05/The-Body-Shop.jpg',
            }}
          />
                            <View style={styles.rowView2}>
                                <Text style={styles.testTxt1}>100 m away from you</Text>
                            </View>
                            <View >
                                <Text style={styles.Header}>Sale madness!</Text>
                            </View>
                            <View >
                                <Text style={styles.Description}>How might we inform about sale without putting so many red signs?</Text>
                            </View>
        </View>
        <View style={{ height: '30%',  }}>
  <ScrollView>
    <Text style={{fontSize:17, padding:10}}>
    I walk into a shop and can't focus on what I want to find because most things are covered up with big red sale signs. I caught it the first time, seriously ;)
    I walk into a shop and can't focus on what I want to find because most things are covered up with big red sale signs. I caught it the first time, seriously ;)
    I walk into a shop and can't focus on what I want to find because most things are covered up with big red sale signs. I caught it the first time, seriously ;)
    I walk into a shop and can't focus on what I want to find because most things are covered up with big red sale signs. I caught it the first time, seriously ;)
    I walk into a shop and can't focus on what I want to find because most things are covered up with big red sale signs. I caught it the first time, seriously ;)
    I walk into a shop and can't focus on what I want to find because most things are covered up with big red sale signs. I caught it the first time, seriously ;)
    I walk into a shop and can't focus on what I want to find because most things are covered up with big red sale signs. I caught it the first time, seriously ;)
    </Text>
  </ScrollView>
</View>
        <View style={styles.fixToText}>
                                
        <Pressable
          style={styles.checkButton}
          onPress={() => MainNavigator.navigate('SolutionList')}
        ><Text style= {{fontSize:15, marginTop:'7.5%', color:'white'}} >Check solutions</Text></Pressable>
        <Pressable
          style={styles.addButton}

          onPress={() => MainNavigator.navigate('AddNewSolution')}
        ><Text style= {{fontSize:15,marginTop:'7.5%', color:'#2F4152'}} >Add solution</Text></Pressable>
      </View>
        </View>
        
      );
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    photoView:{
        height:'60%',
    },
    tinyLogo: {
      width: '100%',
      height: '100%',
      position: 'absolute', zIndex: 0
    },
    logo: {
      width: 100,
      height: 100,
    },
    testTxt1: {
        color:"#001EA0",
        alignContent:'center',
        fontSize:13,
        fontFamily: 'jost',

    },
    fixToText: {
        height:'100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop:'2.5%'
      },
      checkButton:{
        backgroundColor: '#2F4152',
        width:'40%',
        height: '7.5%',
        borderRadius:15,
        alignItems: 'center',
        alignContent:'center',
      },
      addButton:{
        width:'40%',
        height: '7.5%',
        borderRadius:15,
        alignItems: 'center',
        alignContent:'center',
        borderColor: '#2F4152',
        borderWidth:1,
      },
    rowView2: {
        width:'40%',
        justifyContent:'center',
        borderTopRightRadius:25,
        borderBottomRightRadius:25,
        paddingLeft: 0,
        backgroundColor:"#ffffff",
        paddingTop:8,
        paddingBottom:8,
        alignItems: 'center',
        marginTop:'30%'
    },
    Header: {
        fontSize:30,
        fontWeight:'bold',
        textAlign:'left',
        color:'#ffffff',
        // lineHeight: 20.23,
        marginLeft:10,
        marginTop:'15%'

    },
    Description:{
        fontSize:17,
        marginLeft:10,
        marginTop:'0%',
        marginBottom:'10%',
        color:'#ffffff',
        lineHeight: 22.9,
        
    },
  });

export default PostDetailsScreen;
