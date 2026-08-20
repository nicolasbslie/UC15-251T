import React from 'react';
import { View, Text, StyleSheet, } from 'react-native';

export default function Perfil() {
  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Meu Perfil
      </Text>

      <View style={styles.card}>

        <Text style={styles.nome}>
          Nick
        </Text>

        <Text style={styles.email}>
          nick@email.com
        </Text>

        <Text style={styles.descricao}>
          Usuário apaixonado por filmes e séries.
          Aqui você pode acompanhar suas séries favoritas
          e descobrir novos conteúdos.
        </Text>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    elevation: 3,
  },

  nome: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  email: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },

  descricao: {
    fontSize: 16,
    lineHeight: 24,
    color: '#444',
  },
});