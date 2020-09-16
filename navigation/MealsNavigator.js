import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CategoriesScreen from '../Screens/CategoriesScreen';
import CategoryMealScreen from '../Screens/CategoryMealScreen';
import MealDetailScreen from '../Screens/MealDetailScreen';
import FavoritesScreen from '../Screens/FavoritesScreen';
import FilterScreen from '../Screens/FiltersScreen';
import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { Button } from 'react-native';

const Stack = createStackNavigator();
const MealsNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#4a148c',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
        >
            <Stack.Screen name="Categories"
                component={CategoriesScreen}
                options={{ title: 'Meal Categories' }}
            />
            <Stack.Screen name="CategoryMeal"
                component={CategoryMealScreen}
            />
            <Stack.Screen name="MealDetail"
                component={MealDetailScreen}
                options={{
                    headerRight: () => (
                        <HeaderButtons>
                            <Item
                                title="Favorite"
                                iconName="ios-star"
                                onPress={() => alert('This is a button!')}
                            />
                        </HeaderButtons>
                    )
                }}
            />
        </Stack.Navigator>
    )
};

const favoritesStack = createStackNavigator();
const FavoritesNavigator = () => {
    return (
        <favoritesStack.Navigator>
            <favoritesStack.Screen name="Favorites" component={FavoritesScreen}
                options={{ title: 'Favorite List' }} />
            <favoritesStack.Screen name="MealDetail" component={MealDetailScreen} />
        </favoritesStack.Navigator>
    )
};

const MealsTabNavigator = createBottomTabNavigator();
const TabNavigator = () => {
    return (
        <MealsTabNavigator.Navigator>
            <MealsTabNavigator.Screen name="Meals" component={MealsNavigator} />
            <MealsTabNavigator.Screen name="Favorite" component={FavoritesNavigator} />
        </MealsTabNavigator.Navigator>
    )
};

export default TabNavigator;