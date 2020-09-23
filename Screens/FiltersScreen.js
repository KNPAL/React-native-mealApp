import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FilterSwitch from '../Components/FilterSwitch';

const FilterScreen = prop => {
    const {navigation} = prop;

    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);

    const saveFilters = useCallback(() => {
        const appliedFilters = {
            glutenFree: isGlutenFree,
            lactoseFree: isLactoseFree,
            vegan: isVegan,
            isVegetarian: isVegetarian
        };

        console.log(appliedFilters);
    }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

    useEffect(() => {
        navigation.setParams({ save: saveFilters });
    }, [saveFilters]);

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