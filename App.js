import React from 'react';
import {View, StyleSheet} from 'react-native';

import Titulo from './components/Titulo';
import Tela from './components/Tela';

export default function App() {
  return (
    <View style={styles.body}>
      <Titulo></Titulo>
      <Tela></Tela>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#20232a',
    width: '100%',
    height: '100%',
    color: 'white',
    justifyContent: 'center',
  },
});
