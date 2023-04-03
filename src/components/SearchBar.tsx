import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

function SearchBar() {
  return (
    <TextInput
      style={styles.input}
      placeholder="Search Movie"
      placeholderTextColor={colors.grey}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderRadius: 4,
    margin: 10,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderColor: colors.white,
    backgroundColor: colors.white,
  },
});

export default SearchBar;