import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import MealItem from '../Components/MealItem';

const MealList = props => {
    const renderMealItem = iteamData => {
        return (
            <MealItem title={iteamData.item.title}
                duration={iteamData.item.duration}
                complexity={iteamData.item.complexity}
                affordability={iteamData.item.affordability}
                image={iteamData.item.imageUrl}
                onSelectMeal={() => {
                    props.navigation.navigate('MealDetail',
                        { mealId: iteamData.item.id })
                }} />
        );
    };
    return (
        <View style={styles.screen}>
            <FlatList data={props.ListData}
                renderItem={renderMealItem}
                style={{ width: '100%' }} />
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default MealList;