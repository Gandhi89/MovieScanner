import React from 'react';
import { Movie } from './src/screens/Movie';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { MovieDetails } from './src/screens/MovieDetails';
import { store } from './store';
import { Provider } from "react-redux";
import { Favorite } from './src/screens/Favorite';

const Stack = createNativeStackNavigator();

export const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={'movie'} component={Movie} options={{title: 'Movies'}}></Stack.Screen>
          <Stack.Screen name={'movieDetails'} component={MovieDetails} ></Stack.Screen>
          <Stack.Screen name={'favorite'} component={Favorite} options={{title: 'Favorites'}}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};