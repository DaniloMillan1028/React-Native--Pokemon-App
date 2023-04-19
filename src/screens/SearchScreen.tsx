import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {PokemonSimple} from '../interfaces/Interfas';

import {Loading} from '../components/Loading';
import {SearchInput} from '../components/SearchInput';
import PokemonCard from '../components/PokemonCard';
import { usePokemonSearch } from '../hooks/usePokemonSearch';

const screenWidth = Dimensions.get('window').width;

export const SearchScreen = () => {
  const navigator = useNavigation();

  const {top} = useSafeAreaInsets();

  const {isFetching, simplePokemonList} = usePokemonSearch();

  const [pokemonFilter, setPokemonFilter] = useState<PokemonSimple[]>([]);

  const [term, setTerm] = useState('');

  useEffect(() => {
    if (term && term.length === 0) {
      return setPokemonFilter([]);
    }

    if (isNaN(Number(term))) {
      setPokemonFilter(
        simplePokemonList.filter(poke =>
          poke.name.toLocaleLowerCase().includes(term.toLocaleLowerCase()),
        ),
      );
    } else {
      const pokemonById = simplePokemonList.find(poke => poke.id === term);
      setPokemonFilter(pokemonById ? [pokemonById] : []);
    }
  }, [term]);

  console.log(isFetching);

  if (isFetching) {
    return <Loading />;
  }

  return (
    <View style={{flex: 1}}>
      <SearchInput
        onDebounce={value => setTerm(value)}
        style={{
          position: 'absolute',
          zIndex: 999,
          width: screenWidth - 40,
          top: 15,
          paddingBottom: 10,
        }}
      />

      <FlatList
        data={pokemonFilter}
        keyExtractor={pokemon => pokemon.id}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        // header
        ListHeaderComponent={
          <Text
            style={{
              ...Styles.tittle,
              ...Styles.globalMargin,
              top: top + 15,
              marginTop: top + 40,
              marginBottom: 20,
              color: 'black',
            }}>
            {term}
          </Text>
        }
        renderItem={({item}) => (
          <PokemonCard pokemon={item} navigator={navigator} />
        )}
      />
    </View>
  );
};
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tittle: {
    fontSize: 30,
    margin: 5,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  globalMargin: {
    marginHorizontal: 20,
  },
});
