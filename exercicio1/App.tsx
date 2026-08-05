import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CartaoPerfil from './components/CartaoPerfil';

export default function App ()  {
  return (
  <View>
    <CartaoPerfil 
    imagem='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgK3p8jtKmeo9Lg6wXThSTBpCJu-6EulWCAmyxb5OjdRJ6NtuD63CEMYr8&s=10'
    nome='Fábio Fabão'
    bio='Desenvolvedor apaixonado por tecnologia e inovação... E cachoros'
  />;

  <StatusBar style="auto" />
  </View>
)
};