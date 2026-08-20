import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, } from 'react-native';

import { Serie } from '../App';

type Props = {
  serie: Serie;
  favorito: boolean;
  onFavoritar: () => void;
  onDetalhes: () => void;
};

export default function SerieCard({
  serie,
  favorito,
  onFavoritar,
  onDetalhes,
}: Props) {

  return (
    <View style={styles.card}>

      {serie.image && (
        <Image
          source={{
            uri: serie.image.medium,
          }}
          style={styles.imagem}
        />
      )}

      <View style={styles.info}>

        <Text style={styles.nome}>
          {serie.name}
        </Text>

        <Text style={styles.genero}>
          Gênero:{' '}
          {serie.genres.length > 0
            ? serie.genres.join(', ')
            : 'Não informado'}
        </Text>

        <TouchableOpacity
          style={styles.detalhes}
          onPress={onDetalhes}
        >
          <Text style={styles.textoBotao}>
            Ver detalhes
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.favorito}
          onPress={onFavoritar}
        >
          <Text>
            {favorito
              ? '❤️ Remover dos favoritos'
              : '🤍 Adicionar aos favoritos'}
          </Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 15,
    overflow: 'hidden',
    elevation: 3,
  },

  imagem: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
  },

  info: {
    padding: 15,
  },

  nome: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  genero: {
    fontSize: 14,
    color: '#555',
    marginBottom: 12,
  },

  detalhes: {
    backgroundColor: '#333',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 8,
  },

  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
  },

  favorito: {
    padding: 10,
    alignItems: 'center',
  },
});