import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { colors } from '../../utils/colors';

const LoadingIndicator = () => {
  return (
    <View style={styles.loading}>
        <ActivityIndicator  size={"large"}/>
        <Text style={styles.text}>Loading...</Text>
  </View>
  );
};

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
    },
    text: {
        marginTop: 10,
        fontSize: 20,
        alignSelf: 'center',
        justifyContent: 'center',
        color: colors.grey
    }
});

export default LoadingIndicator;
