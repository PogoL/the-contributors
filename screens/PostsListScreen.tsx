import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { CustomHeaderButton } from '../components/CustomHeaderButton';
import PostScreen from '../components/Post';

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  });

const mockDataPosts = [{Title: "Post1", Header:"Outdated queue for job offer", Description:"Do we still need to stand in this horrific concept with all this technology around?"}, 
{Title: "Post2", Header: "More waste than food", Description: "Is it OK to serve so much single use stuff when eating inside?"},
{Title: "Post3", Header: "Sale madness", Description: "How might we inform about sale without putting so many red signs?"}]

const PostsListScreen = ({ navigation, route }: { navigation: any, route: any }) => {

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item title="search" iconName="add-circle-outline" onPress={() => navigation.navigate('SetLocation')} />
                    <Item title="search" iconName="notifications-outline" onPress={() => navigation.navigate('AddNewPost')} />
                </HeaderButtons>
            )
        });
    }, [navigation]);

    return (
        // <View style={styles.mainPositionView}>
        //             <View style={styles.mainPositionView2}>
        //     <Text style={styles.test} onPress={()=> console.log("test")}>PostsListScreen</Text>
        // </View>
        // <View>
        //     <Text style={styles.test2} onPress={()=> console.log("test2")}>PostsListScreen</Text>
        // </View>
        // <View>
        //     <Text style={styles.test3} onPress={()=> console.log("test3r")}>PostsListScreen</Text>
        // </View>
        // </View>
        <View style={styles.container} >
      <FlatList
        data={mockDataPosts}
        renderItem={({item}) => <PostScreen name={item.Title} header={item.Header} description={item.Description}></PostScreen>}
      />
    </View>
    );
};

export default PostsListScreen;
