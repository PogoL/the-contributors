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

const mockDataPosts = [{Photo:"https://d-nm.ppstatic.pl/kadr/k/r/5c/98/5cc17c320773b_o.jpg?",Title: "Post1", Header:"Outdated queue for job offer", Description:"Do we still need to stand in this horrific concept with all this technology around?",Time:"posted 46 minutes ago", HowFar:"100 m away from you"}, 
{Photo:"https://codziennikmlawski.pl/wp-content/uploads/2020/11/galeria-1.jpg",Title: "Post2", Header: "More waste than food", Description: "Is it OK to serve so much single use stuff when eating inside?",Time:"posted 2 hours ago", HowFar:"4,2 km away from you"},
{Photo:"https://cdn-thumbor.immofinanz.com/FTJ7-psQrORAl0sAoHyAlrwg4W8=/800x600/filters:quality(90)/https%3A//cdn.immofinanz.com/uploads/production/602b986b5851a4f31d39b6b0/pl_legnica_spotlight.jpg",Title: "Post3", Header: "Sale madness", Description: "How might we inform about sale without putting so many red signs?",Time:"posted 46 minutes ago", HowFar:"100 m away from you"},
{Photo:"https://www.shop-dent.pl/data/include/cms/Zdjecia-sklepow-shop-dent/stacjonarny_sklep_shop_dent_w_Poznaniu.png",Title: "Post3", Header: "Sale madness", Description: "How might we inform about sale without putting so many red signs?",Time:"posted 46 minutes ago", HowFar:"100 m away from you"},
{Photo:"https://retail360.pl/wp-content/uploads/2017/05/The-Body-Shop.jpg",Title: "Post3", Header: "Sale madness", Description: "How might we inform about sale without putting so many red signs?",Time:"posted 46 minutes ago", HowFar:"100 m away from you"},
{Photo:"https://d-nm.ppstatic.pl/kadr/k/r/5c/98/5cc17c320773b_o.jpg?",Title: "Post3", Header: "Sale madness", Description: "How might we inform about sale without putting so many red signs?",Time:"posted 46 minutes ago", HowFar:"100 m away from you"}]

const PostsListScreen = ({ navigation, route }: { navigation: any, route: any }) => {

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item title="search" iconName="add-circle-outline" onPress={() => navigation.navigate('SetLocation')} />
                    <Item title="search" iconName="notifications-outline" onPress={() => navigation.navigate('AddNewSolution')} />
                </HeaderButtons>
            )
        });
    }, [navigation]);

    return (
        <View style={styles.container} >
      <FlatList
        data={mockDataPosts}
        renderItem={({item}) => <PostScreen photo={item.Photo} name={item.Title} header={item.Header} description={item.Description} time={item.Time} howFar={item.HowFar}></PostScreen>}
      />
    </View>
    );
};

export default PostsListScreen;
