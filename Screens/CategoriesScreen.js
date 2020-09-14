import React from 'react';
import {
    View, Text, StyleSheet, Button, FlatList,
    TouchableOpacity
} from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../Components/CategoryGridTile';


const CategoriesScreen = prop => {
    const renderGridItem = (itemData) => {
        return (<CategoryGridTile
            title={itemData.item.title}
            color={itemData.item.color}
            onSelect={() => {
                prop.navigation.navigate('CategoryMeal',
                    { categoryId: itemData.item.id });
            }} />);
    };
    return (
        <FlatList data={CATEGORIES}
            renderItem={renderGridItem}
            numColumns={2}></FlatList>
    )
}



const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoriesScreen;