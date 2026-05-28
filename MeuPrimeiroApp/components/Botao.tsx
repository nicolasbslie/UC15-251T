import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Botao = () => {
  return (
    <View>
      <TouchableOpacity 
      onPress={() => console.log("Clicou!")}
      style={styles.botao}>Clique</TouchableOpacity>
    </View>
  )
}

export default Botao

const styles = StyleSheet.create({
    botao: {
        backgroundColor: "black",
        color: "white",
        borderRadius: "5px",
        padding: 5
    }
})