import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import MealList from '../Components/MealList';
import {MEALS} from '../data/dummy-data';

const FavoritesScreen = prop =>{

    const displayFavMeals = MEALS.filter(meal => meal.id ==='m1' || meal.id === 'm2');

    return(
        <MealList ListData={displayFavMeals} navigation={prop.navigation} />
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});

export default FavoritesScreen;