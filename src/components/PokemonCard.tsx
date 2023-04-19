import React, {PureComponent, useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Image,
} from 'react-native';
import {PokemonSimple} from '../interfaces/Interfas';
import ImageColors from 'react-native-image-colors';
import {FadeInImage} from './FadeInImage';

const windowWidth = Dimensions.get('window').width;

interface Props {
  pokemon: PokemonSimple;
  navigation: any;
}

class PokemonCard extends PureComponent<any> {
  handleOnPress = async () => {
    const {navigator, pokemon} = this.props;
    navigator.navigate('PokemonScreen', {
      PokemonSimple: pokemon,
      color: this.state.bgColor,
    });
    console.log('ingresa');
  };

  state = {
    bgColor: 'grey',
  };
  // Metodo paraa utilizar el useState
  componentDidMount() {
    ImageColors.getColors(`${this.props.pokemon.picute}`, {
      fallback: 'grey',
    }).then(colors => {
      colors.platform === 'android'
        ? this.setState({bgColor: colors.dominant || 'grey'})
        : this.setState({bgColor: colors || 'grey'});
    });
  }
  render(): React.ReactNode {
    const {bgColor} = this.state;
    const {pokemon} = this.props;
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={this.handleOnPress}
        style={{
          ...Styles.cardContainer,
          width: windowWidth * 0.45,
          backgroundColor: bgColor,
        }}>
        <View>
          <Image
            source={require('../assets/pokebola-blanca.png')}
            style={Styles.pokebola}
          />
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <FadeInImage uri={pokemon.picute} style={Styles.image} />
        </View>
        <View>
          <Text style={Styles.name}>{pokemon.name}</Text>
          <Text style={Styles.nameContainer}>{'\n' + pokemon.id}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
export default PokemonCard;

const Styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 10,
    height: 120,
    width: 160,
    marginBottom: 25,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  name: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
    top: 10,
    left: 10,
    textAlign: 'center',
  },
  image: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameContainer: {
    position: 'absolute',
    top: 5,
    right: 5,
    color: 'black',
  },
  pokebola: {
    width: 100,
    height: 100,
    position: 'absolute',
    opacity: 0.3,
  },
});
