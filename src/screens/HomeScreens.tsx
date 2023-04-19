import React, {useState} from 'react';
import {FlatList, StyleSheet, View, Image, Text} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import PokemonCard from '../components/PokemonCard';
import {ActivityIndicator} from 'react-native';
import { usePokemonPagina } from '../hooks/usePokemonPagina';

const HomeScreen = (): any => {
  const navigator = useNavigation();
  const {top} = useSafeAreaInsets();
  const {simplePokemonList, loadPokemos} = usePokemonPagina();
  const [isloading, setIsLoading] = useState(false);

  const handleLoadPokemos = async () => {
    setIsLoading(true);
    await loadPokemos();
    setIsLoading(false);
  };
  return (
    <>
      <Image
        source={require('../assets/pokebola.png')}
        style={Styles.pokebolaBG}
      />
      <FlatList
        data={simplePokemonList}
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
              marginBottom: top + 40,
              color: 'black',
              borderRadius: 12,
              backgroundColor: '#E0E0E0',
            }}>
            Pokemon
          </Text>
        }
        renderItem={({item}) => (
          <PokemonCard pokemon={item} navigator={navigator} />
        )}
        //parte del scroll
        onEndReached={loadPokemos}
        onEndReachedThreshold={1}
        ListFooterComponent={
          isloading ? (
            <View>
              <ActivityIndicator style={{height: 100}} size={15} color="grey" />
            </View>
          ) : null
        }
      />
    </>
  );
};

export default HomeScreen;

const Styles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
  },
  pokebolaBG: {
    position: 'absolute',
    width: 300,
    height: 300,
    top: -100,
    right: -100,
    opacity: 0.2,
  },
  tittle: {
    fontSize: 30,
    margin: 5,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
});
