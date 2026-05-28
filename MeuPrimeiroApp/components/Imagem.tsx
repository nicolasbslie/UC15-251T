import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Imagem = () => {
  return (
    <View>
        {/**
         O componente <Image/> precisa de uri antes do link da imagem
         */}
      <Image style={styles.imagem} source={{uri:'https://ingresso-a.akamaihd.net/b2b/production/uploads/article/image/5551/6d46e6b09162682fa9b468498b2b149d.jpg'}}/>
    </View>
  )
}

export default Imagem

const styles = StyleSheet.create({
    imagem:{
        width: 1080,
        height: 720
    }
})