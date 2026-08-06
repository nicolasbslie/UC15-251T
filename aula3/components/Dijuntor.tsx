import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const Dijuntor = () => {

    const [dijuntor, setDijuntor] = useState('Desligado')


  return (
    <View>

      <Text style={styles.texto}>{dijuntor}</Text>

    <TouchableOpacity style={styles.botao} onPress={() => setDijuntor(dijuntor === 'Desligado' ? 'Ligado' : 'Desligado')}>
        <Text>Clique</Text>
    </TouchableOpacity>

    </View>
  )
}

export default Dijuntor

const styles = StyleSheet.create({
    texto: {
        fontSize: 30,
        alignItems: 'center'
    },

    botao: {
        padding: 10,
        backgroundColor: 'orange',
        alignItems: 'center',
        borderRadius: 20
    }
})