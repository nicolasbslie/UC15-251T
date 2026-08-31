import { Alert, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import * as ImagePicker from 'expo-image-picker'

// Função responsável por abrir a galeria do celular.
const EscolherFoto = () => {

    const [foto, setFoto] = useState<string>()

    const escolherDaGaleria = async () => {

        const resultado = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'], // Define quais tipos de arquivos podem ser escolhidos.
            allowsEditing: true, // Permite recortar a imagem antes de confirmar
            aspect: [1,1], // Define a proporção do recorte da imagem.
            quality: 0.8 // Define a qualidade da imagem.
        })

        if(!resultado.canceled) {
            setFoto(resultado.assets[0].uri)
        }

    }

    const tirarFoto = async () => {
        // Função assíncrona do ImagePicker que pede permissão ao usuário
        const { status } = await ImagePicker.requestCameraPermissionsAsync()

        if(status != 'granted'){
            Alert.alert('Permissão é necessária para continuar')
            return
        }

        const resultado = await ImagePicker.launchCameraAsync({
            mediaTypes: ['images'], 
            allowsEditing: true, 
            quality: 0.8 
        })

        if(!resultado.canceled){
            setFoto(resultado.assets[0].uri)
        }
    }

  return (
    <View>
      <TouchableOpacity onPress={escolherDaGaleria}>
        <Text>Escolher Foto</Text>
      </TouchableOpacity>
    <TouchableOpacity onPress={tirarFoto}>
        <Text>Tirar Foto</Text>
    </TouchableOpacity>

        {/* Só mostra o componente se tiver foto*/}
      {foto && <Image source={{uri: foto}}/>}
      {
        fotos.length > 0 && <FlatList
        data={fotos}
        keyExtractor={{item} => item}
        renderItem={({item}) => <Image style={styles.preview} source={{ uri: item}}/>}
        />
      }
    </View>
  )
}

export default EscolherFoto

const styles = StyleSheet.create({})