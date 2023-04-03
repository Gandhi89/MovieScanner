import React from 'react';
import { FlatList, View, Text, StyleSheet, Image } from 'react-native';
import { IMovieSearchResult } from '../../redux/Movie/movieSlice';

interface MovieListProps {
  movies: IMovieSearchResult[];
}

const MovieList = ({ movies }: MovieListProps) => {

  const renderMovie = ({ item }: { item: IMovieSearchResult }) => (
    <View style={styles.movie}>
      <Image style={styles.poster} source={{ uri: item.Poster }} />
      <View style={styles.details}>
        <Text style={styles.title}>{item.Title}</Text>
        <Text style={styles.year}>{item.Year}</Text>
      </View>
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
    justifyContent: 'center',
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
});

export default MovieList;
