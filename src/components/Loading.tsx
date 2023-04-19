import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'

 export const Loading = () => {
  return (
    <View style={Styles.container}>
        <ActivityIndicator size={50} color="grey" />

        <Text style={{color: 'black'}}>Cargando....</Text>
      </View>
  )
}

const Styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
    },
    
  });