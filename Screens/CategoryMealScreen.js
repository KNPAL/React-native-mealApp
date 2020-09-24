import React, { useEffect } from 'react';
import { CATEGORIES } from '../data/dummy-data';
import MealList from '../Components/MealList';
import { useSelector } from 'react-redux';

const CategoryMealScreen = prop => {

    const catId = prop.route.params.categoryId;
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
    useEffect(() => {
        prop.navigation.setOptions({ title: selectedCategory.title });
    });

    const avaliableMeals = useSelector(state => state.meals.filterMeals);
    const displayedMeals = avaliableMeals.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

    return (
        <MealList ListData={displayedMeals} navigation={prop.navigation} />
    )
}

export default CategoryMealScreen;