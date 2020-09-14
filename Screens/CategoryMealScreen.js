import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data';

import MealItem from '../Components/MealItem';

const CategoryMealScreen = prop => {

    const renderMealItem = iteamData => {
        return (<MealItem title={iteamData.item.title}
            duration={iteamData.item.duration}
            complexity={iteamData.item.complexity}
            affordability={iteamData.item.affordability}
            image={iteamData.item.imageUrl}
            onSelectMeal={() => {
                prop.navigation.navigate('MealDetail',
                    { mealId: iteamData.item.id })
            }} />);
    };

    const catId = prop.route.params.categoryId;
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
    useEffect(() => {
        prop.navigation.setOptions({ title: selectedCategory.title });
    });

    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

    return (
        <View style={styles.screen}>

            <FlatList data={displayedMeals}
                renderItem={renderMealItem}
                style={{ width: '100%' }} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoryMealScreen;