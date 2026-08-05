import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'

interface CartaoPerfilProps {
  imagem: string,
  nome: string,
  bio: string
}

const CartaoPerfil = ({imagem, nome, bio}: CartaoPerfilProps) => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.card}>
            <Image source={{uri: imagem,}} style={styles.imagem} />
            <Text style={styles.nome}> {nome} </Text>
            <Text style={styles.bio}> {bio} </Text>
            <TouchableOpacity style={styles.botao}>
                <Text style={styles.textoBotao}>Seguir</Text>
            </TouchableOpacity>
            </View>
    </SafeAreaView>
  )
}

export default CartaoPerfil

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  card: {
    width: 300,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 15,
    alignItems: 'center',
    elevation: 5,
  },
  imagem: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },
  nome: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  bio: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginVertical: 10,
  },
  botao: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 10,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
})