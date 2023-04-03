import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Button } from 'react-native';

export const MovieDetails = () => {
    const navigation = useNavigation();
    const navigateToFavourites = () => {
        navigation.navigate('favourite');
    };
    return (
        <View>
            <Button onPress={navigateToFavourites} title={'Navigate to Favourites'}></Button>
        </View>
    );
}