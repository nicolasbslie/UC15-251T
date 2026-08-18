import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const Exemplo2 = () => {

    useEffect(() => {
        console.log("O componente apareceu na tela")
    }, [])

  return (
    <View>
      <Text>Componente montado na tela</Text>
    </View>
  )
}

export default Exemplo2

const styles = StyleSheet.create({})