import React, { useState } from 'react';
import { FlatList, View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { IMovieSearchResult, addRemoveFavoriteMovies } from '../../redux/Movie/movieSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';

interface MovieListProps {
  movies: IMovieSearchResult[];
}

const MovieList = ({ movies }: MovieListProps) => {

  const favorites = useSelector((state: RootState) => state.movies.favoriteMovies);
  const dispatch = useDispatch();
  const handleToggleFavorite = (movie: IMovieSearchResult) => {
    dispatch(addRemoveFavoriteMovies(movie));
  };

  const isFavorite = (movie: IMovieSearchResult) => favorites.includes(movie);
  console.log("cdeefefe:" ,favorites.length);

  const renderMovie = ({ item }: { item: IMovieSearchResult }) => (
    <View style={styles.movie}>
      <Image style={styles.poster} source={{ uri: item.Poster }} />
      <View style={styles.details}>
        <Text style={styles.title}>{item.Title}</Text>
        <Text style={styles.year}>{item.Year}</Text>
      </View>
      <Pressable onPress={() => handleToggleFavorite(item)} style={styles.favoriteButton} >
        <Text style={styles.favoriteButtonText}>
          {isFavorite(item) ? '★' : '☆'}
        </Text>
      </Pressable>
    </View>
  );

  return (
    <FlatList
      data={movies}
      renderItem={renderMovie}
      keyExtractor={item => item.imdbID}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  movie: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  poster: {
    width: 80,
    height: 120,
    resizeMode: 'contain',
  },
  details: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  year: {
    fontSize: 16,
    color: '#666',
  },
  favoriteButton: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: 42,
  },
  favoriteButtonText: {
    color: '#f0ad4e',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 5,
  },
});

export default MovieList;
