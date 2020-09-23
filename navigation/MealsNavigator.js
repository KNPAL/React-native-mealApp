import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { NavigationContainer } from '@react-navigation/native';
import CategoriesScreen from '../Screens/CategoriesScreen';
import CategoryMealScreen from '../Screens/CategoryMealScreen';
import MealDetailScreen from '../Screens/MealDetailScreen';
import FavoritesScreen from '../Screens/FavoritesScreen';
import FilterScreen from '../Screens/FiltersScreen';
import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import Colors from '../constants/Colors';

const Stack = createStackNavigator();
const MealStactNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: Colors.primaryColor,
                },
                headerTintColor: Colors.whiteColor,
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
const MealsNavigator = () => {
    return (
        <NavigationContainer>
            <DrawerNavigator />
        </NavigationContainer>
    )
};

const favoritesStack = createStackNavigator();
const FavoritesNavigator = () => {
    return (
        <favoritesStack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: Colors.primaryColor,
                },
                headerTintColor: Colors.whiteColor,
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}>
            <favoritesStack.Screen name="Favorites" component={FavoritesScreen}
                options={{ title: 'Favorite List' }} />
            <favoritesStack.Screen name="MealDetail" component={MealDetailScreen} />
        </favoritesStack.Navigator>
    )
};

const filterStack = createStackNavigator();
const filterNavigator = () => {
    return (
        <filterStack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: Colors.primaryColor,
                },
                headerTintColor: Colors.whiteColor,
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
        >
            <filterStack.Screen name="filter" component={FilterScreen}
                options={{ title: 'Filter Screen' }} />
        </filterStack.Navigator>
    )
}

const MealsTabNavigator = createBottomTabNavigator();
const TabNavigator = () => {
    return (
        <MealsTabNavigator.Navigator>
            <MealsTabNavigator.Screen name="Meals" component={MealStactNavigator} />
            <MealsTabNavigator.Screen name="Favorite" component={FavoritesNavigator} />
        </MealsTabNavigator.Navigator>
    )
};

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
    return (
        <Drawer.Navigator initialRouteName="Favorite">
            <Drawer.Screen name="Meals" component={TabNavigator} />
            <Drawer.Screen name="Filters" component={filterNavigator} />
        </Drawer.Navigator>
    )
}

export default MealsNavigator;