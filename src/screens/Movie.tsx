import React from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const Movie = () => {
    const navigation = useNavigation();
    const navigateToMovieDetails = () => {
        navigation.navigate('movieDetails');
    };
    const navigateToFavourites = () => {
        navigation.navigate('favourite');
    };
    React.useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => (
            <TouchableOpacity onPress={navigateToFavourites}>
              <Text style={styles.headerButton}>Favourites</Text>
            </TouchableOpacity>
          ),
        });
      }, [navigation]);
    return (
        <View>
            <Button onPress={navigateToMovieDetails} title={'Navigate to Movie details'}></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    headerButton: {
        marginRight: 15
    }
})