import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const FavoritesScreen = prop =>{
    return(
        <View>
            <Text>The FavoritesScreen</Text>
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

export default FavoritesScreen;