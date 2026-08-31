import { StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Tema = () => {
    const [tema, setTema] = useState<string>('claro')

    useEffect(() => {
        // Carrega o tema salvo no armazenamento interno
        const carregar = async () => {
            const salvo = await AsyncStorage.getItem('tema')
            // Se existir um tema salvo
            if (salvo) {
                setTema(salvo)
            }
        }

        carregar()
    }, [])

    // Salva o tema escolhido na memória interna do dispositivo
    const salvarTema = async (novoTema: string) => {
        setTema(novoTema)
        await AsyncStorage.setItem('tema', novoTema)
    }

    return (
        <View style={[styles.container, { backgroundColor: tema === 'claro' ? '#fff' : '#222' }]}>

            <Text style={{ color: tema === 'claro' ? '#222' : '#fff', fontSize: 24, fontWeight: 'bold' }}>Escolha o tema</Text>

            <Text style={{ color: tema === 'claro' ? '#555' : '#ccc' }}>Tema atual: {tema}</Text>

            <TouchableOpacity style={styles.botao} onPress={() => salvarTema('claro')}>
                <Text style={styles.botaoTexto}>Tema Claro</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao} onPress={() => salvarTema('escuro')}>
                <Text style={styles.botaoTexto}>Tema Escuro</Text>
            </TouchableOpacity>

            <Switch />
        </View>
    )
}

export default Tema

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 15, padding: 20 },
    botao: { backgroundColor: '#4ade9e', padding: 12, borderRadius: 10, width: '80%', alignItems: 'center' },
    botaoTexto: { fontWeight: 'bold' },
})