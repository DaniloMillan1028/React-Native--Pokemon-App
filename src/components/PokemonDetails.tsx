import React from 'react';
import {Pokemonfull} from '../interfaces/Interfas';
import {ScrollView} from 'react-native-gesture-handler';
import {StyleSheet, Text, View} from 'react-native';
import {FadeInImage} from './FadeInImage';

interface Props {
  pokemon: Pokemonfull;
}
export const PokemonDetails = ({pokemon}: Props) => {
  console.log('pokemon');
  return (
    <ScrollView
      style={{...StyleSheet.absoluteFillObject, backgroundColor: '#B3B6B7'}}>
      {/*tipos */}

      <View style={{...Styles.container, marginTop: 333}}>
        <Text style={Styles.title}>Tipo</Text>

        <Text style={{flexDirection: 'row', marginTop: 5}}>
          {pokemon.types.map(({type}) => (
            <Text
              style={{...Styles.regularText, fontStyle: 'italic'}}
              key={type.name}>
              {type.name + '  '}
            </Text>
          ))}
        </Text>
      </View>
      {/* peso*/}

      <View style={{...Styles.container}}>
        <Text style={Styles.title}>Peso</Text>
        <Text style={Styles.regularText}>{pokemon.weight}Kg</Text>
      </View>
      {/*Sprites */}
      <View style={{...Styles.container}}>
        <Text style={Styles.title}>Sprites</Text>
      </View>
      {/*imagenes de los Sprites */}
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <FadeInImage
          uri={pokemon.sprites.front_default}
          style={Styles.basicSprite}
        />
        <FadeInImage
          uri={pokemon.sprites.back_default}
          style={Styles.basicSprite}
        />
        <FadeInImage
          uri={pokemon.sprites.front_shiny}
          style={Styles.basicSprite}
        />
        <FadeInImage
          uri={pokemon.sprites.back_shiny}
          style={Styles.basicSprite}
        />
      </ScrollView>

      {/*Habilidades */}
      <View style={{...Styles.container}}>
        <Text style={Styles.title}>Habilidades base</Text>
        <Text style={{flexDirection: 'row', marginTop: 5}}>
          {pokemon.abilities.map(({ability}, index) => (
            <Text
              style={{...Styles.regularText, fontStyle: 'italic'}}
              key={ability.name}>
              {ability.name + '  '}{' '}
              {index !== pokemon.abilities.length - 1 ? '& ' : ''}
            </Text>
          ))}
        </Text>
      </View>
      {/*movimientos */}
      <View style={{...Styles.container}}>
        <Text style={Styles.title}>Movimientos</Text>
        <Text style={{flexDirection: 'row', marginTop: 5}}>
          {pokemon.moves.map(({move}, index) => (
            <Text
              style={{...Styles.regularText, fontStyle: 'italic'}}
              key={move.name}>
              {move.name + '  '}
              {index !== pokemon.moves.length - 1 ? ', ' : ''}
            </Text>
          ))}
        </Text>
      </View>
      {/*Stats */}
      <View style={{...Styles.container}}>
        <Text style={Styles.title}>Stats</Text>
        <Text>
          {pokemon.stats.map((stat, i) => (
            <View key={stat.stat.name + i} style={{flexDirection: 'row'}}>
              <Text
                style={{
                  ...Styles.regularText,
                  marginRight: 10,
                  width: 150,
                  fontStyle: 'italic',
                }}
                key={stat.stat.name}>
                {stat.stat.name + '  '}
              </Text>
              <Text
                style={{
                  ...Styles.regularText,
                  fontWeight: 'bold',
                  fontStyle: 'italic',
                }}>
                {stat.base_stat}
              </Text>
            </View>
          ))}
        </Text>
        {/*spreite final */}
        <View style={{marginBottom: 9, alignItems: 'center'}}>
          <FadeInImage
            uri={pokemon.sprites.front_default}
            style={Styles.basicSprite}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const Styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10,
  },
  regularText: {
    fontSize: 17,
  },
  basicSprite: {
    width: 100,
    height: 100,
  },
});
