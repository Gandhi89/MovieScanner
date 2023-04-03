import React, { useLayoutEffect, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SearchBar  from '../components/SearchBar';
import { useDispatch } from 'react-redux';
import { fetchMovies } from '../../redux/Movie/movieActions';

export const Movie = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const navigateToMovieDetails = () => {
        navigation.navigate('movieDetails');
    };
    const navigateToFavourites = () => {
        navigation.navigate('favourite');
    };
    useLayoutEffect(() => {
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
            <SearchBar onSubmit={() => {}} />
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