import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface cardProps {
    nome: string,
    idade: number
}

const Card = ({nome, idade}: cardProps) => {
  return (
    <View>
      <Text style={styles.texto}>Olá {nome}, você tem {idade} anos!</Text>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    texto: {
        fontSize: 35,
        color: "orange",
        fontWeight: "black"
    }
})