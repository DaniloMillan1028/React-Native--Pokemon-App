
import React, {useEffect, useState} from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import {TextInput} from 'react-native-gesture-handler';
import { useDebouncedValue } from '../hooks/useDebouncedValue';

interface Props {
  onDebounce: (value: any) => void;
  style?: StyleProp<ViewStyle>;
}

export const SearchInput = ({style, onDebounce}: Props) => {
  const [textValue, setTextValue] = useState('');

  const deboncedValue = useDebouncedValue(textValue);

  useEffect(() => {
    onDebounce(deboncedValue);
  }, [deboncedValue]);
  return (
    <View style={{...Styles.container, ...(style as any)}}>
      <View style={Styles.textBack}>
        <TextInput
          style={Styles.TextInput}
          placeholderTextColor={'#B2BABB'}
          placeholder="Buscar pokemones ...."
          autoCapitalize="none"
          autoCorrect={false}
          value={textValue}
          onChangeText={setTextValue}
        />
        <Icon name="search-outline" color="grey" size={28} />
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  textBack: {
    borderRadius: 17,
    backgroundColor: '#F3F1F3',
    height: 40,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 13,
  },
  TextInput: {
    flex: 1,
    fontSize: 18,
    top: 2,
    color: 'black',
  },
});
