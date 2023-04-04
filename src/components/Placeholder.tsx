import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';

type PlaceholderProps = {
  message: String;
  showEmoji?: boolean;
  style?: ViewStyle;
}

const Placeholder = ({message, showEmoji = true, style}: PlaceholderProps) => {
  return (
    <View style={[styles.container, style]}>
      { showEmoji && <Text style={styles.emoji}>👆</Text>}
      <Text style={styles.title}>{message}</Text>
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

export default Placeholder;
