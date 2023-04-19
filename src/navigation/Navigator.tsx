import React from 'react';

import {PokemonSimple} from '../interfaces/Interfas';
import {createStackNavigator} from '@react-navigation/stack';



import {StyleSheet} from 'react-native';
import HomeScreen from '../screens/HomeScreens';
import { PokemonScreen } from '../screens/PokemonScreen';

export type RootStackParams = {
  HomeScreen: undefined;
  PokemonScreen: {PokemonSimple: PokemonSimple; color: string};
};

const Stack = createStackNavigator<RootStackParams>();

export const Navigator = () => {




  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {},
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="PokemonScreen" component={PokemonScreen} />
    </Stack.Navigator>
  );
};
const Styles = StyleSheet.create({
  card: {
    color: 'black',
  },
});
