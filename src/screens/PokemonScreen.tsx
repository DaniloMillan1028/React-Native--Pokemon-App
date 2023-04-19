import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ActivityIndicator,
} from 'react-native';

import {StackScreenProps} from '@react-navigation/stack';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import Icon from 'react-native-vector-icons/Ionicons';
import {FadeInImage} from '../components/FadeInImage';
import {PokemonDetails} from '../components/PokemonDetails';
import { usePokemon } from '../hooks/usePokemon';
import { RootStackParams } from '../navigation/Navigator';

interface Prosp extends StackScreenProps<RootStackParams, 'PokemonScreen'> {}

export const PokemonScreen = ({navigation, route}: Prosp) => {
  const {PokemonSimple,   color} = route.params;
  const {id, name, picute} = PokemonSimple;
  const {top} = useSafeAreaInsets();

  const {isLoading, pokemon} = usePokemon(id);

  console.log(pokemon);
  return (
    <View style={{flex: 1}}>
      {/*Header*/}
      <View style={{...Styles.container, backgroundColor: color}}>
        {/*devolver ala pagina principal*/}
        <TouchableOpacity
          activeOpacity={0.8}
          style={{...Styles.backBotton, top: top + 3}}
          onPress={() => navigation.pop()}>
          <Icon name="arrow-back-outline" color="white" size={34} />
        </TouchableOpacity>
        {/*nombres de los pokemones */}
        <Text style={{...Styles.pokemonName, top: top + 45}}>
          {name + '\n'}
        </Text>
        <Text style={{...Styles.pokemonId}}># {id}</Text>
        <Image
          source={require('../assets/pokebola-blanca.png')}
          style={{...Styles.pokeBall}}
        />
        <FadeInImage uri={picute} style={Styles.pokeImagen} />
      </View>
      {/*Detalles y loading */}
      {isLoading ? (
        <View style={Styles.loading}>
          <ActivityIndicator color={color} size={30} />
        </View>
      ) : (
        <PokemonDetails pokemon={pokemon} />
      )}
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    height: 350,
    zIndex: 999,
    alignItems: 'center',
    borderBottomRightRadius: 1000,
    borderBottomLeftRadius: 1000,
  },
  backBotton: {
    position: 'absolute',
    left: 20,
  },
  pokemonName: {
    color: 'white',
    fontSize: 40,
    alignSelf: 'flex-start',
    left: 30,
  },
  pokeBall: {
    width: 250,
    height: 250,
    bottom: -9,
    opacity: 0.4,
  },
  pokeImagen: {
    width: 250,
    height: 250,
    position: 'absolute',
    bottom: -11,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pokemonId: {
    position: 'absolute',
    top: 15,
    right: 10,
    fontSize: 35,
  },
});
