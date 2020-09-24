import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import MealList from '../Components/MealList';
import { useSelector } from 'react-redux';

const FavoritesScreen = prop =>{

    const displayFavMeals = useSelector(state => state.meals.favoriteMeals);
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