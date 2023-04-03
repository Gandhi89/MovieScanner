import React from 'react';
import { Movie } from './src/screens/Movie';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { MovieDetails } from './src/screens/MovieDetails';
import { Favourite } from './src/screens/Favourite';
import { store } from './store';
import { Provider } from "react-redux";

const Stack = createNativeStackNavigator();

export const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={'movie'} component={Movie} options={{title: 'Movies'}}></Stack.Screen>
          <Stack.Screen name={'movieDetails'} component={MovieDetails} options={{title: 'Movie Name'}}></Stack.Screen>
          <Stack.Screen name={'favourite'} component={Favourite} options={{title: 'Favourites'}}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};