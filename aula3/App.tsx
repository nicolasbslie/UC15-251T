import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Card from './components/Card';
import Contador from './components/Contador';
import Dijuntor from './components/Dijuntor';
import CampoNome from './components/CampoNome';
import CampoNumero from './components/CampoNumero';

export default function App() {
  return (
    <View style={styles.container}>
      <CampoNumero/>
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
