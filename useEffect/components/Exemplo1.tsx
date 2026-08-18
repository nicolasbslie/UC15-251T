import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const Exemplo1 = () => {
    const [contador, setContador] = useState<number>(0)

    useEffect(() => {
        console.log("O componente foi renderizado!")
    })
  return (
    <View>
        <Text>Renderizações: {contador}</Text>
        <Text onPress={() => setContador(contador + 1)}>➕ Clique para renderizar o componente</Text>
    </View>
  )
}

export default Exemplo1

const styles = StyleSheet.create({})