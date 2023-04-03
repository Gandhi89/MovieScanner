import React, { useLayoutEffect, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SearchBar  from '../components/SearchBar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovieList } from '../../redux/Movie/movieActions';
import { RootState } from '../../store';
import MovieList from '../components/MovieList';

export const Movie = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const movieList = useSelector((state: RootState) => state.movies.movieList);
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

    const searchKeyword = (keyword: string) => {
      dispatch(fetchMovieList(keyword));
    }

    return (
        <View style={styles.root}>
            <SearchBar onSubmit={searchKeyword} />
            <MovieList movies={movieList} />
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