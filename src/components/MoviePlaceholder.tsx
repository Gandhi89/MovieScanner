import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MoviePlaceholder = () => {
  const placeholderMessage = "Can't remember that movie that rhymed with 'Fright Club'? Search it here!";
  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>👆</Text>
      <Text style={styles.title}>{placeholderMessage}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
  },
  emoji: {
    fontSize: 30,
    marginTop: 20,
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    color: '#8c8c8c',
    marginTop: 10,
  },
});

export default MoviePlaceholder;
