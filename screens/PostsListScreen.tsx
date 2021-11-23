import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { CustomHeaderButton } from '../components/CustomHeaderButton';

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
        <View>
            <Text>PostsListScreen</Text>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default PostsListScreen;
