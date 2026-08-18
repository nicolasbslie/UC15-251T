import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const ListarUsuarios = () => {
    const [usuarios, setUsuarios] = useState([])
    useEffect(() => {
        const buscarUsuarios = async () => {
            try{
                console.log("Buscando dados da API...")
                //GET dos dados de user na API JsonPlaceHolder
                const resposta = await fetch("https://jsonplaceholder.typicode.com/users")

                //converte pra algo que possamos usar com TS
                const dados = await resposta.json()

                //usuarios, nosso array criado lá em cima, recebe esses dados
                setUsuarios(dados)
            } catch(erro) {
                console.log("Deu ruim gurizada: ", erro)
            }
        }

        buscarUsuarios()
    }, [])

  return (
    <View>
        <FlatList
            data={usuarios}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => (
                <Text>Nome: {item.name} Email: {item.email}</Text>
            )}
        />
    </View>
  )
}

export default ListarUsuarios

const styles = StyleSheet.create({})