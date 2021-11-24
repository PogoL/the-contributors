import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Alert, RefreshControl, ActivityIndicator } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { CustomHeaderButton } from '../components/CustomHeaderButton';
import Post from '../components/Post';
import PostScreen from '../components/Post';
import { fetchAllPosts } from '../api/post';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 5,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});

const PostsListScreen = ({ navigation, route }: { navigation: any, route: any }) => {
    const [posts, setPosts] = useState([]);
    const [refreshing, setRefreshing] = useState(true);
    useEffect(async () => {
        setRefreshing(false);
        var posts = await fetchAllPosts();
        setPosts(posts);
    }, []);

    const onRefresh = async () => {
        //Clear old data of the list
        setPosts([]);
        var posts = await fetchAllPosts();
        setPosts(posts);
    };
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item title="search" iconName="add-circle-outline" onPress={() => navigation.navigate('SetLocation')} />
                    <Item
                        title="search"
                        iconName="notifications-outline"
                        onPress={() => Alert.alert('Tu powinny być notyfikacje', 'Ale ich nie ma')}
                    />
                </HeaderButtons>
            ),
        });
    }, [navigation]);

    return (
        <View style={styles.container}>
            {refreshing ? <ActivityIndicator /> : null}
            <FlatList
                data={posts}
                renderItem={({ item }) => <Post navigation={navigation} {...item}></Post>}
                refreshControl={
                    <RefreshControl
                        //refresh control used for the Pull to Refresh
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            />
        </View>
    );
};

export default PostsListScreen;
