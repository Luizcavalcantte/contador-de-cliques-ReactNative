import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function Tela() {
  const [contador, setContador] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Você clicou {contador} vezes</Text>
      <View style={styles.btns}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            setContador(contador + 1);
          }}>
          <Text style={styles.txtBtns}>Clique aqui</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            setContador(0);
          }}>
          <Text style={styles.txtBtns}>Reiniciar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
  },
  texto: {
    fontSize: 20,
    marginBottom: 20,
    color: 'white',
  },
  btn: {
    backgroundColor: '#51aec9',
    width: 100,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  txtBtns: {
    color: 'white',
    fontWeight: 'bold',
  },
  btns: {
    width: 250,

    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
