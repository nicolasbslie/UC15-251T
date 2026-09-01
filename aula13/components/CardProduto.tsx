import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Card, Button, Text } from 'react-native-paper'

interface CardProdutoProps {
  id: number
  titulo: string
  link: string
  preco: number
}

const CardProduto = ({ titulo, preco, link }: CardProdutoProps) => {
  return (
    <Card style={styles.card}>
      <Card.Cover
        source={{ uri: link }}
        style={styles.imagem}
      />

      <View style={styles.conteudo}>
        <Text style={styles.titulo}>
          {titulo}
        </Text>

        <Text style={styles.preco}>
          R$ {preco.toFixed(2).replace('.', ',')}
        </Text>
      </View>

      <Card.Actions style={styles.acoes}>
        <Button
          mode="contained"
          icon="cart"
          style={styles.botao}
        >
          Comprar
        </Button>
      </Card.Actions>
    </Card>
  )
}

export default CardProduto

const styles = StyleSheet.create({
  card: {
    width: '100%',
    marginBottom: 15,
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
  },

  imagem: {
    height: 200,
    borderRadius: 0,
  },

  conteudo: {
    padding: 15,
  },

  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  preco: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6750A4',
  },

  acoes: {
    paddingHorizontal: 15,
    paddingBottom: 15,
  },

  botao: {
    width: '100%',
    borderRadius: 10,
  },
})