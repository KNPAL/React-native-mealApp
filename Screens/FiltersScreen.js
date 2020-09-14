import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const FilterScreen = prop =>{
    return(
        <View>
            <Text>The FilterScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});

export default FilterScreen;