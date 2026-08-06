import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

// 1 - Criar uma interface com as propriedades e tipos delas
interface PerfilCartaoProps {
    nome: string
}

// 2 - Dentro dos parênteses, usando desestruturação de objetos, colocamos todos os props que queremos e tipamos como a interface que criamos
const PerfilCartao = ({nome}: PerfilCartaoProps) => {
  return (
    <View>
        {/* 3 - Criamos os props pelo nome sempre que precisarmos */}
      <Text style={styles.texto}>Olá {nome}!</Text>
    </View>
  )
}

export default PerfilCartao

const styles = StyleSheet.create({
    texto: {
        fontSize: 50
    }
})