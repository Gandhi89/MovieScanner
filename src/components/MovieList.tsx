import React from 'react';
import { FlatList, View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { IMovieSearchResult, addRemoveFavoriteMovies } from '../../redux/Movie/movieSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../utils/colors';

interface MovieListProps {
  movies: IMovieSearchResult[];
}

const MovieList = ({ movies }: MovieListProps) => {

  const favorites = useSelector((state: RootState) => state.movies.favoriteMovies);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const handleToggleFavorite = (movie: IMovieSearchResult) => {
    dispatch(addRemoveFavoriteMovies(movie));
  };

  const isFavorite = (movie: IMovieSearchResult) => favorites.includes(movie);
  const onPress = (item: IMovieSearchResult) => {
    navigation.navigate('movieDetails', { movie: item });
  }

  const renderMovie = ({ item }: { item: IMovieSearchResult }) => (
    <>
      <Pressable style={styles.movie} onPress={() => onPress(item)}>
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
      </Pressable>
    </>
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
    backgroundColor: colors.white,
  },
  movie: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.grey,
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
    color: colors.darkGrey,
  },
  favoriteButton: {
    paddingHorizontal: 5,
    flexDirection: 'row',
    height: 42,
  },
  favoriteButtonText: {
    color: colors.pumpkin,
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 5,
  },
});

export default MovieList;
