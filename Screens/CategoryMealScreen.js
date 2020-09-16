import React, { useEffect } from 'react';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealList from '../Components/MealList';

const CategoryMealScreen = prop => {

    const catId = prop.route.params.categoryId;
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
    useEffect(() => {
        prop.navigation.setOptions({ title: selectedCategory.title });
    });

    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

    return (
        <MealList ListData={displayedMeals} navigation={prop.navigation} />
    )
}

export default CategoryMealScreen;