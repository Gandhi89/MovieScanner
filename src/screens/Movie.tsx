import React from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SearchBar  from '../components/SearchBar';

export const Movie = () => {
    const navigation = useNavigation();
    const navigateToMovieDetails = () => {
        navigation.navigate('movieDetails');
    };
    const navigateToFavourites = () => {
        navigation.navigate('favourite');
    };
    React.useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => (
            <TouchableOpacity onPress={navigateToFavourites}>
              <Text style={styles.headerButton}>Favourites</Text>
            </TouchableOpacity>
          ),
        });
      }, [navigation]);
    return (
        <View style={styles.root}>
            <SearchBar />
        </View>
    );
}

const styles = StyleSheet.create({
    headerButton: {
        marginRight: 15
    },
    root: {
      flex: 1
    }
})