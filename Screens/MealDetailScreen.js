import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MEALS } from '../data/dummy-data';

const MealDetailScreen = prop => {
    const mealId = prop.route.params.mealId;
    const catId = prop.route.params.categoryId;
    const selectedMeal = MEALS.find(meal => meal.id === mealId);
    
    useEffect(() => {
        prop.navigation.setOptions({ title: selectedMeal.title + ' Details' });
    });

    return (
        <View>
            <Text>{selectedMeal.title}</Text>
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

export default MealDetailScreen;