import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import * as ImagePicker from 'expo-image-picker'

const CHAVE_FOTO = '@app'

const FotoPerfil = () => {
    const [foto, setFoto] = useState<string>('')

    useEffect(() => {
        //Carrega dados salvor no armazenamento interno
        const carregar = async () => {
            const salvo = await AsyncStorage.getItem(CHAVE_FOTO)
            // se esxistir
            if(salvo){
                setFoto(salvo) //salva a informação dentro da varável 'nome' do useState
            }
        }
        carregar()
    }, [])

    const escolherFoto = async () => {
        const resultado = await ImagePicker.launchImageLibraryAsync({
            mediaTypes:['images'],
            quality: 0.8
        })
        //se eu escolhi uma foto
        if(!resultado.canceled) {
            const uri = resultado.assets[0].uri
            setFoto(uri)
            await AsyncStorage.setItem(CHAVE_FOTO, uri) // salvo o caminho da foto
        }
    }

  return (
    <View>
      <Image source={{uri:foto}} style={styles.foto}/>

      <TouchableOpacity style={styles.botao} onPress={escolherFoto}>
        <Text style={styles.botaoTexto}>Trocar foto</Text>
      </TouchableOpacity>
    </View>
  )
}

export default FotoPerfil

const styles = StyleSheet.create({
    container: { gap: 10 },
    botao: { backgroundColor: '#4ade9e', padding: 12, borderRadius: 10, alignItems: 'center' },
    botaoTexto: { fontWeight: 'bold' },
})