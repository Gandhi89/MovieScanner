import React, { useLayoutEffect, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SearchBar  from '../components/SearchBar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovie, fetchMovieList } from '../../redux/Movie/movieActions';
import { RootState } from '../../store';
import MovieList from '../components/MovieList';
import MoviePlaceholder from '../components/Placeholder';
import LoadingIndicator from '../components/LoadingIndicator';

const emptyPlaceholderMessage = "Can't remember that movie that rhymed with 'Fright Club'? Search it here!";

export const Movie = () => {
  
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const movieList = useSelector((state: RootState) => state.movies.movieList);
    const isMovieListLoading = useSelector((state: RootState) => state.movies.isListLoading);
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

    const showMoviePlaceholder = movieList?.length < 1;

    if (isMovieListLoading) {
      return <LoadingIndicator />;
    }

    return (
        <View style={styles.root}>
            <SearchBar onSubmit={searchKeyword} />
            { showMoviePlaceholder ? 
                <MoviePlaceholder message={emptyPlaceholderMessage} /> : 
                <MovieList movies={movieList} />
            }
        </View>
    );
}

const styles = StyleSheet.create({
    headerButton: {
      marginRight: 15
    },
    root: {
      flex: 1
    },
    loading: {
      flex: 1,
      alignContent: 'center',
      justifyContent: 'center'
    }
})