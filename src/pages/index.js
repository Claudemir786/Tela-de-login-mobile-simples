import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Cabecalho from '../components/Header';
import Corpo from '../components/Body';
import Rodape from '../components/Footer';

export default function App() {
  return (
    <View style={styles.container}>
     <Cabecalho name='Login'/>
     <Corpo/>
     <Rodape/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3A085D',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



