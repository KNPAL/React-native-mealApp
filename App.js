import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MealsNavigator from '../mealApp/navigation/MealsNavigator';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import mealReducer from './store/reducers/meals';


const rootReducer = combineReducers({
  meals: mealReducer
});

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
  )
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.white,
  }
}); 

export default App;
