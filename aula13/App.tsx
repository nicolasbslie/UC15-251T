import React, { useState } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import {
  PaperProvider,
  TextInput,
  Text,
} from 'react-native-paper'

import CardProduto from './components/CardProduto'

export default function App() {
  const [busca, setBusca] = useState('')

  const produtos = [
    {
      id: 1,
      titulo: 'iPhone 16e',
      link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREHGgRtRDP3WUaEUi0cOCKhGxre43mFqQRdho0jf1buA&s=10',
      preco: 3500.99,
    },
    {
      id: 2,
      titulo: 'iPhone 13',
      link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPQSLJPXpXXVnDEiW8kwUhCvkx5GmeR3HVlkOenjSP5g&s=10',
      preco: 2200.99,
    },
  ]

  const produtosFiltrados = produtos.filter((produto) =>
    produto.titulo
      .toLowerCase()
      .includes(busca.toLowerCase())
  )

  const tema = {
    colors: {
      primary: '#6750A4',
      background: '#F7F5FA',
      surface: '#FFFFFF',
    },
  }

  return (
    <PaperProvider theme={tema}>
      <View style={styles.container}>

        <Text style={styles.tituloPagina}>
        Loja de Celulares
        </Text>

        <Text style={styles.subtitulo}>
          Encontre o celular ideal para você
        </Text>

        <TextInput
          mode="outlined"
          label="Buscar produto"
          value={busca}
          onChangeText={setBusca}
          left={
            <TextInput.Icon icon="magnify" />
          }
          style={styles.busca}
        />

        <FlatList
          data={produtosFiltrados}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <CardProduto
              id={item.id}
              titulo={item.titulo}
              link={item.link}
              preco={item.preco}
            />
          )}
          ListEmptyComponent={
            <Text style={styles.vazio}>
              Nenhum produto encontrado.
            </Text>
          }
        />

      </View>
    </PaperProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F5FA',
    padding: 15,
    paddingTop: 45,
  },

  tituloPagina: {
    fontSize: 26,
    fontWeight: 'bold',
  },

  subtitulo: {
    fontSize: 15,
    marginTop: 5,
    marginBottom: 20,
    color: '#666666',
  },

  busca: {
    marginBottom: 15,
    backgroundColor: '#FFFFFF',
  },

  vazio: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 18,
  },
})