import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FilterSwitch from '../Components/FilterSwitch';
import { useDispatch } from 'react-redux';
import { setFilters } from '../store/actions/meals';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
const FilterScreen = prop => {
    const { navigation } = prop;

    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);

    const dispatch = useDispatch();

    const saveFilters = useCallback(() => {
        const appliedFilters = {
            glutenFree: isGlutenFree,
            lactoseFree: isLactoseFree,
            vegan: isVegan,
            Vegetarian: isVegetarian
        };

        dispatch(setFilters(appliedFilters));
    }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian, dispatch]);

    useEffect(() => {
     //   navigation.setParams({ save: saveFilters });
        navigation.setOptions({
            headerRight: () => (
                <HeaderButtons>
                    <Item
                        title="Save"
                        iconName="ios-star"
                        onPress={saveFilters}
                    />
                </HeaderButtons>
            )
        });
    }, [saveFilters, navigation]);

    return (<View style={styles.screen}>
        <Text style={styles.title}>Available Filters / Restrictions</Text>
        <FilterSwitch
            label="Gluten-free"
            state={isGlutenFree}
            onChange={newValue => setIsGlutenFree(newValue)}
        />
        <FilterSwitch
            label="Lactose-free"
            state={isLactoseFree}
            onChange={newValue => setIsLactoseFree(newValue)}
        />
        <FilterSwitch
            label="Vegan"
            state={isVegan}
            onChange={newValue => setIsVegan(newValue)}
        />
        <FilterSwitch
            label="Vegetarian"
            state={isVegetarian}
            onChange={newValue => setIsVegetarian(newValue)}
        />
    </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        margin: 20,
        textAlign: 'center'
    }
});

export default FilterScreen;