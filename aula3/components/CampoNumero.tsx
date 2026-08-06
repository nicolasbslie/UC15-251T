import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const CampoNumero = () => {

    const [numero1, setNumero1] = useState<string>('')
    const [numero2, setNumero2] = useState<string>('')
    const [resultado, setResultado] = useState<number>(0)

  return (
    <View>
      <TextInput
        style={styles.input}
        value={numero1}
        onChangeText={setNumero1}
        placeholder='Digite um número'
      />
      <TextInput
        style={styles.input}
        value={numero2}
        onChangeText={setNumero2}
        placeholder='Digite um número'
      />
    <TouchableOpacity style={styles.botao} onPress={() => setResultado(Number(numero1) + Number(numero2))}>
        <Text>Somar</Text>
    </TouchableOpacity>
    <Text>Resultado: {resultado}</Text>
    </View>
  )
}

export default CampoNumero

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10
    },
    botao: {
        padding: 5,
        fontSize: 30,
        backgroundColor: 'orange',
        borderRadius: 15
    }
})