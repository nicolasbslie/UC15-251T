import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CardProduto from './CardProduto'

const dadosProdutos = [
    {id: 1, titulo: "Tênis Air Jordan 1 Low Masculino", link: "https://imgnike-a.akamaihd.net/360x360/0165105CA8.jpg", preco: 1049.99},
    {id: 2, titulo: "Tênis ASICS GEL-NYC - Unissex - Bege/Branco", link: "https://www.asics.com.br/arquivos/ids/3809125-1000-1000/1203A383_113_SL_LT_GLB.jpg", preco: 749.99},
    {id: 3, titulo: "Tênis wayvee 2.0 skate black white/red", link: "https://secure-static.vans.com.br/medias/sys_master/vans/vans/hc7/hd7/h00/h00/12865715732510/Midres-Vans-V1004600200003-01.jpg?w=1920&q=100", preco: 379.99},
]

const ListaProdutos = () => {
  return (
    <View>
      <FlatList
      data={dadosProdutos}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({item}) => (
        <CardProduto id={Number(item.id)} titulo={item.titulo} link={item.link} preco={item.preco} />
      )}
      />
    </View>
  
    )}

export default ListaProdutos

const styles = StyleSheet.create({})