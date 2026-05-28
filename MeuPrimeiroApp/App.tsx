import { StyleSheet, Text, View } from 'react-native';
import HomeDoNicolas from './pages/HomeDoNicolas';

export default function App() {
  return (
    <View style={styles.container}>
      <HomeDoNicolas/>
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
