import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'

const CaixaDeTexto = () => {
  return (
    <View>
      <TextInput style={styles.caixa} placeholder="Escreva seu nome" onChangeText={(texto) => console.log(texto)}/>
    </View>
  )
}

export default CaixaDeTexto

const styles = StyleSheet.create({
    caixa:{
        backgroundColor:"white",
        padding:2,
        paddingLeft: 15,
        borderRadius: 10,
        borderColor: "black"
    }
})