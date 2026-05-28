import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Imagem from "../components/Imagem";
import CaixaDeTexto from "../components/CaixaDeTexto";
import CaixaComScroll from "../components/CaixaComScroll";

const HomeDoNicolas = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Home</Text>
      <Text style={styles.saudacao}>Bem-Vindo(a) ao myApp! 😎</Text>
      <Imagem/>
      <CaixaDeTexto></CaixaDeTexto>
      <CaixaComScroll></CaixaComScroll>
    </View>
  );
};

export default HomeDoNicolas;

const styles = StyleSheet.create({
    container:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "orange"
    },
    titulo:{
        color: "blue",
        fontSize: 32
    },
    saudacao:{
        marginTop: 5,
        backgroundColor: "red"
    }
})
