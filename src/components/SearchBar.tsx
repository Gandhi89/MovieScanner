import React, { useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

type SearchBarProps = {
  onSubmit(): void;
}

const SearchBar = ({ onSubmit }: SearchBarProps) => {
  const [searchKeyword, setSearchKeyword] = useState('');

  const onSubmitEditing = () => {
    setSearchKeyword('');
    onSubmit();
  }

  return (
    <TextInput
      value={searchKeyword}
      style={styles.input}
      placeholder="Search Movie"
      placeholderTextColor={colors.grey}
      onChangeText={setSearchKeyword}
      returnKeyType='go'
      onSubmitEditing={onSubmitEditing}
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