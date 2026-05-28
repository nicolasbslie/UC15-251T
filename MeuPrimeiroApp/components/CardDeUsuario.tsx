import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CardDeUsuario = () => {
    const dados = (
        {id: "1", nome: "Fulano"},
        {id: "2", nome: "Ciclano"},
        {id: "3", nome: "Beltrano"},
    )

  return (
    <View>
      <FlatList
      data={dados}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => <Text>{item.nome}</Text>}
      />
    </View>
  )
}

export default CardDeUsuario

const styles = StyleSheet.create({})