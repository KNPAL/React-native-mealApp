import React, { useEffect, useLayoutEffect, useCallback } from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground, FlatList, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { toggleFavorite } from '../store/actions/meals';
const MealDetailScreen = prop => {
    const mealId = prop.route.params.mealId;
    const catId = prop.route.params.categoryId;

    const displayFavMeals = useSelector(state => state.meals.meals);
    const selectedMeal = displayFavMeals.find(meal => meal.id === mealId);
    useEffect(() => {
        prop.navigation.setOptions({ title: selectedMeal.title });
        prop.navigation.setOptions({
            headerRight: () => (
                <HeaderButtons>
                    <Item
                        title="Favorite"
                        iconName="ios-star"
                        onPress={toggleFavoriteHandler}
                    />
                </HeaderButtons>
            )
        });
    }, [prop.navigation]);
    const dispatch = useDispatch();
    const toggleFavoriteHandler = useCallback(() => {
        dispatch(toggleFavorite(mealId));
    }, [dispatch, mealId]);

    return (
        <ScrollView>
            <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
            <View style={styles.details}>
                <Text style={styles.textPadding}>{selectedMeal.duration}m</Text>
                <Text style={styles.textPadding}>{selectedMeal.complexity.toUpperCase()}</Text>
                <Text style={styles.textPadding}>{selectedMeal.affordability.toUpperCase()}</Text>
            </View>
            <View>
                <Text style={styles.title}>Ingrdients</Text>
                <View>
                    {
                        selectedMeal.ingrdients.map((item, index) => (
                            <Text style={styles.listItem} key={index}> {item} </Text>
                        ))
                    }
                </View>
            </View>
            <View>
                <Text style={styles.title}>Steps</Text>
                <View>
                    {
                        selectedMeal.steps.map((item, index) => (
                            <Text style={styles.listItem} key={index}>
                                {item}
                            </Text>))
                    }
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    details: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around'
    },
    title: {
        fontSize: 22,
        textAlign: 'center'
    },
    listItem: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10
    }
});

export default MealDetailScreen;