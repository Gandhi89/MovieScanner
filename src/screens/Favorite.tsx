import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MovieList from '../components/MovieList';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import Placeholder from '../components/Placeholder';

const emptyPlaceholderMessag = "Keep track of all your favorite movies in one place - add them to your favorites list today!";

export const Favorite = () => {
    const favorites = useSelector((state: RootState) => state.movies.favoriteMovies);
    const showFavoritePlaceholder = favorites.length < 1;
    return (
        <View style={styles.root}>
            {showFavoritePlaceholder ?
                <Placeholder 
                    message={emptyPlaceholderMessag} 
                    showEmoji={false} 
                    style={styles.placeholder}
                /> : 
                <MovieList movies={favorites} />
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
    placeholder: {
        alignItems: 'center', 
        justifyContent: 'center',
    }
})