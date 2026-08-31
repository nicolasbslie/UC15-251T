import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const CampoNome = () => {
    const [nome, setNome] = useState<string>('')

    useEffect(() => {
        //Carrega dados salvor no armazenamento interno
        const carregar = async () => {
            const salvo = await AsyncStorage.getItem('nome')
            // se esxistir
            if(salvo){
                setNome(salvo) //salva a informação dentro da varável 'nome' do useState
            }
        }
        carregar()
    }, [])

    //salva um dado na memória interno do dispositico
    const salvar = async () => {
        await AsyncStorage.setItem('nome', nome) // salva na memória um item chamado 'nome'. O valor ele pega da variável nome
    }

  return (
    <View>
      <TextInput value={nome} onChangeText={setNome} placeholder='Insira seu nome'/>
      <TouchableOpacity style={styles.botao} onPress={salvar}>
        <Text style={styles.botaoTexto}>Salvar</Text>
      </TouchableOpacity>
    </View>
  )
}

export default CampoNome

const styles = StyleSheet.create({
    container: { gap: 10 },
    input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 10 },
    botao: { backgroundColor: '#4ade9e', padding: 12, borderRadius: 10, alignItems: 'center' },
    botaoTexto: { fontWeight: 'bold' },
})