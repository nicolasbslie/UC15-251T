import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const Cartao = () => {
  return (
    <View style={styles.container}>
        <Image source={require('../assets/favicon.png')}/>
        <Image style={styles.image} source={{uri:'https://media.istockphoto.com/id/466167557/pt/foto/rec%C3%A9m-nascido-chick.jpg?s=612x612&w=0&k=20&c=sCYAg33JEEyBpzxTiCpKg1DEBoBhRLxBRsT5Zz9YMT8='}}/>
      <Text style={styles.titulo} numberOfLines={1} selectable={true}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, exercitationem tempore. Voluptas, dolorum autem animi quod ratione consequatur corrupti fuga esse corporis velit ex expedita beatae voluptatum tempore atque odit?</Text>

      <TouchableOpacity onPress={() => alert("Xablau")} style={styles.botao}>
        <Text>Clique em mim</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    padding: 10,
    margin: 5,
    maxWidth: 200
  }, 
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1a1425'
  }, 
  image: {
    height: 222,
    width: 222
  },
  botao: {
    backgroundColor: 'litghgreen',
    padding: 5,
    borderRadius: 5,
    alignItems: 'center'
  }
})

export default Cartao