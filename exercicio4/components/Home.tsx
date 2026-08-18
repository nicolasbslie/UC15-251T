import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = ({navigation}: any) => {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title='Ir para Busca'
        onPress={() => navigation.navigate('CardPokemon')}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})