import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {NavigationContainer} from '@react-navigation/native';
import {Navigator} from './src/navigation/Navigator';
const App = () => {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
};

export default App;
