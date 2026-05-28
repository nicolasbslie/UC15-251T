import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CaixaComScroll = () => {
  return (
    <ScrollView style={styles.caixaScroll}>
        <Text>ABCDERFGHIJKLMNOPQRSTUVWXYZ</Text>
        <Text>ABCDERFGHIJKLMNOPQRSTUVWXYZ</Text>
        <Text>ABCDERFGHIJKLMNOPQRSTUVWXYZ</Text>
        <Text>ABCDERFGHIJKLMNOPQRSTUVWXYZ</Text>
        <Text>ABCDERFGHIJKLMNOPQRSTUVWXYZ</Text>
        <Text>ABCDERFGHIJKLMNOPQRSTUVWXYZ</Text>
        <Text>ABCDERFGHIJKLMNOPQRSTUVWXYZ</Text>
        <Text>ABCDERFGHIJKLMNOPQRSTUVWXYZ</Text>
        <Text>ABCDERFGHIJKLMNOPQRSTUVWXYZ</Text>
        <Text>ABCDERFGHIJKLMNOPQRSTUVWXYZ</Text>
        <Text>ABCDERFGHIJKLMNOPQRSTUVWXYZ</Text>
        <Text>ABCDERFGHIJKLMNOPQRSTUVWXYZ</Text>
        <Text>ABCDERFGHIJKLMNOPQRSTUVWXYZ</Text>
        <Text>ABCDERFGHIJKLMNOPQRSTUVWXYZ</Text>
    </ScrollView>
  )
}

export default CaixaComScroll

const styles = StyleSheet.create({
    caixaScroll:{
        margin: 20,
        height: 50,
        backgroundColor: "white"
    }
})