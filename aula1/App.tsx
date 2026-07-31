import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import Cartao from './components/Cartao';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Cartao/>
          <Cartao/>
          <Cartao/>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
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
