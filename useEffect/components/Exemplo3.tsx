import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const Exemplo3 = () => {
    const [contador, setContador] = useState<number>(0)
    const [outroContador, setOutroContador] = useState<number>(0)

    useEffect(() => {
        console.log("O componente foi renderizado")
    }, [contador])

  return (
    <View>
        <Text>Contador: {contador}</Text>
        <Text>Outro Contador: {outroContador}</Text>
        <Text onPress={() => setContador(contador + 1)}>➕ Clique para renderizar o componente</Text>
        <Text onPress={() => setContador(outroContador + 1)}>➕ Clique para renderizar o componente</Text>
    </View>
  )
}

export default Exemplo3

const styles = StyleSheet.create({})