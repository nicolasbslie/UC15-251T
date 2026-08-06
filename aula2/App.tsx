import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Cartao from './components/Cartao';
import PerfilCartao from './components/PerfilCartao';
import CardProduto from './components/CardProduto';

export default function App() {
  return (
    <View style={styles.container}>
      <CardProduto
        imagem="https://imgnike-a.akamaihd.net/360x360/0165105CA8.jpg"
        nome="Tênis Air Jordan 1 Low Masculino"
        preco={1049.99}
      />
      <CardProduto
        imagem="https://www.asics.com.br/arquivos/ids/3809125-1000-1000/1203A383_113_SL_LT_GLB.jpg"
        nome="Tênis ASICS GEL-NYC - Unissex - Bege/Branco"
        preco={799.99}
      />
      <CardProduto
        imagem="https://secure-static.vans.com.br/medias/sys_master/vans/vans/hc7/hd7/h00/h00/12865715732510/Midres-Vans-V1004600200003-01.jpg?w=1920&q=100"
        nome="tênis wayvee 2.0 skate black white/red"
        preco={379.99}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
