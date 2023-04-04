import React, { useLayoutEffect, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SearchBar  from '../components/SearchBar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovie, fetchMovieList } from '../../redux/Movie/movieActions';
import { RootState } from '../../store';
import MovieList from '../components/MovieList';
import Placeholder from '../components/Placeholder';
import LoadingIndicator from '../components/LoadingIndicator';
import Alert from '../components/ErrorModal';

const emptyPlaceholderMessage = "Can't remember that movie that rhymed with 'Fright Club'? Search it here!";

export const Movie = () => {
  
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const movieList = useSelector((state: RootState) => state.movies.movieList);
    const isMovieListLoading = useSelector((state: RootState) => state.movies.isListLoading);
    const movieListError = useSelector((state: RootState) => state.movies.movieListError);
    const navigateToFavorites = () => {
        navigation.navigate('favorite');
    };

    const [placeholderMessage, setPlaceholderMessage] = useState("");
    const [showPlaceholder, setShowPlaceholder] = useState(false);
    const [showEmoji, setShowEmoji] = useState(false);

    useLayoutEffect(() => {
      navigation.setOptions({
        headerRight: () => (
          <TouchableOpacity onPress={navigateToFavorites}>
            <Text style={styles.headerButton}>Favorites</Text>
          </TouchableOpacity>
        ),
      });
    }, [navigation]);

    useEffect(() => {
      const hasError = typeof movieListError === 'string';
      const shouldShowPlaceholder = hasError || movieList?.length < 1;
      if (shouldShowPlaceholder) {
        const message = hasError ? movieListError : emptyPlaceholderMessage;
        setPlaceholderMessage(message);
        setShowEmoji(hasError ? false : true);
      };
      setShowPlaceholder(shouldShowPlaceholder);
    }, [movieList, movieListError]);

    const searchKeyword = (keyword: string) => {
      dispatch(fetchMovieList(keyword));
    }
    
    if (isMovieListLoading) {
      return <LoadingIndicator />;
    }

    return (
        <View style={styles.root}>
            <SearchBar onSubmit={searchKeyword} />
            { showPlaceholder ? 
                <Placeholder message={placeholderMessage} showEmoji={showEmoji} /> : 
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