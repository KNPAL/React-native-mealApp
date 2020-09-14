import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { StyleSheet, View, Text } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import TabNavigator from '../mealApp/navigation/MealsNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.white,
  }
});

export default App;
