import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, RefreshControl, ActivityIndicator } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { CustomHeaderButton } from '../components/CustomHeaderButton';
import Solution from '../components/Solution';
import PostScreen from '../components/Post';
import { fetchPostSolutions } from '../api/solutions';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    rowView: {
        alignContent: 'center',
        width: '100%',
        marginBottom: 10,
    },
    header: {
        textAlign: 'center',
        fontSize: 15,
        fontFamily: 'jost',
        paddingLeft: 25,
        paddingRight: 25,
    },
});

const SolutionsListScreen = ({ navigation, route }) => {
    const [solutions, setSolutions] = useState([]);
    const [refreshing, setRefreshing] = useState(true);

    const { postId, question } = route.params;

    useEffect(async () => {
        setRefreshing(false);
        var solutions = await fetchPostSolutions(postId);
        setSolutions(solutions);
    }, []);
    const onRefresh = async () => {
        setSolutions([]);
        var solutions = await fetchPostSolutions(postId);
        setSolutions(solutions);
    };
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: '',
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item
                        title="search"
                        iconName="add-circle-outline"
                        onPress={() => navigation.navigate('AddNewSolution', { postId: postId })}
                    />
                </HeaderButtons>
            ),
        });
    }, [navigation]);

    return (
        <View style={styles.container}>
            <View style={styles.rowView}>
                <Text style={styles.header}>{question}</Text>
            </View>
            {refreshing ? <ActivityIndicator /> : null}
            <FlatList
                data={solutions}
                renderItem={({ item }) => <Solution {...item} />}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            />
        </View>
    );
};

export default SolutionsListScreen;
