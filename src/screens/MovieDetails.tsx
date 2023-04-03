import { RouteProp, useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { IMovieDetails, IMovieSearchResult } from '../../redux/Movie/movieSlice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovie } from '../../redux/Movie/movieActions';
import { RootState } from '../../store';
import { colors } from '../../utils/colors';

type MovieDetailParamList = {
    MovieDetail: { movie: IMovieSearchResult };
};
  
type MovieDetailScreenRouteProp = RouteProp<
    MovieDetailParamList,
    'MovieDetail'
>;

type MovieDetailProps = {
    route: MovieDetailScreenRouteProp;
};

export const MovieDetails = ({ route }: MovieDetailProps) => {
    const { movie } = route.params;
    const navigation = useNavigation();
    navigation.setOptions({ title: movie.Title });
    const dispatch = useDispatch();
    const movieInfo: (IMovieDetails | null) = useSelector((state: RootState) => state.movies.movie);

    useEffect(() => {
        dispatch(fetchMovie(movie.imdbID));
    }, [movie]);

    if (!movieInfo) return null
    const {Poster, Plot, Title, Released, Runtime, Genre, Director, Writer, Actors, Language, Country, Awards, Ratings } = movieInfo;
    
    return (
        <ScrollView style={styles.container}>
            <Image style={styles.poster} source={{ uri: Poster }} />
            <Text style={styles.title}>{Title}</Text>
            <View style={styles.infoContainer}>
                <Text style={styles.infoLabel}>Plot:</Text>
                <Text style={styles.infoValue}>{Plot}</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.infoLabel}>Released:</Text>
                <Text style={styles.infoValue}>{Released}</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.infoLabel}>Runtime:</Text>
                <Text style={styles.infoValue}>{Runtime}</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.infoLabel}>Genre:</Text>
                <Text style={styles.infoValue}>{Genre}</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.infoLabel}>Director:</Text>
                <Text style={styles.infoValue}>{Director}</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.infoLabel}>Writer:</Text>
                <Text style={styles.infoValue}>{Writer}</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.infoLabel}>Actors:</Text>
                <Text style={styles.infoValue}>{Actors}</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
      padding: 10,
    },
    poster: {
      width: '100%',
      height: 400,
      resizeMode: 'contain',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginVertical: 10,
    },
    infoContainer: {
      flexDirection: 'row',
      marginBottom: 10,
    },
    infoLabel: {
      fontWeight: 'bold',
      marginRight: 10,
      width: 80,
    },
    infoValue: {
      flex: 1,
    },
    plot: {
      marginVertical: 20,
    },
  });