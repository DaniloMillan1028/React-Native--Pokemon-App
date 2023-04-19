import React, { useEffect } from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Navigator} from './Navigator';



import Icon from 'react-native-vector-icons/Ionicons';
import {Tab2Screen} from './Tab2';

const Tab = createBottomTabNavigator();

const Tabs = () => {




  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          backgroundColor: 'rgba(255,255,255,0.80)',
          borderWidth: 0,
          elevation: 0,
          height: 55,
          borderRadius: 10,
        },
        tabBarActiveTintColor: '#5856D6',
        tabBarHideOnKeyboard: true,
      }}
      sceneContainerStyle={{backgroundColor: 'white'}}>
      <Tab.Screen
        name="HomeSceeen"
        component={Navigator}
        options={{
          tabBarLabel: 'Listado',
          tabBarIcon: ({color}) => (
            <Icon color={color} size={27} name="list-outline" />
          ),
        }}
      />
      <Tab.Screen
        name="PokemonScreen"
        component={Tab2Screen}
        options={{
          tabBarLabel: 'Búsqueda',
          tabBarIcon: ({color}) => (
            <Icon color={color} size={27} name="search-outline" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default Tabs;
