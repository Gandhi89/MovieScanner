import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MovieList from '../components/MovieList';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export const Favourite = () => {
    const favorites = useSelector((state: RootState) => state.movies.favoriteMovies);
    return (
        <View style={styles.root}>
            <MovieList movies={favorites} />
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