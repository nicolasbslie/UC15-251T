import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

interface CardProdutoProps {
    id: number,
    titulo: string,
    link: string
    preco: number,
}

const CardProduto = ({titulo, preco, link, id}: CardProdutoProps) => {
  return (
    <View style={styles.card}>
      <Text>{id}</Text>
    <Image source={{ uri: link}} style={styles.foto}></Image>
      <Text style={styles.texto}>{titulo}</Text>
      <Text style={styles.valor}>R${preco}</Text>
    </View>
  )
}

export default CardProduto

const styles = StyleSheet.create({
    card: {
    width: 180,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    margin: 10,
    },

    texto: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
    },

    valor: {
        fontSize: 15,
        color: "green"
    },

    foto: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
    }
})