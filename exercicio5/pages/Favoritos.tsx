import React from 'react';
import { View, Text, FlatList, StyleSheet,} from 'react-native';

import SerieCard from '../components/SerieCard';
import { Serie, RootStackParamList } from '../App';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type Props = {
  favoritos: Serie[];
  setFavoritos: React.Dispatch<React.SetStateAction<Serie[]>>;
};

type NavigationProps =
  NativeStackNavigationProp<RootStackParamList>;

export default function Favoritos({
  favoritos,
  setFavoritos,
}: Props) {

  const navigation = useNavigation<NavigationProps>();

  function removerFavorito(id: number) {
    setFavoritos((lista) =>
      lista.filter((serie) => serie.id !== id)
    );
  }

  function verDetalhes(serie: Serie) {
    navigation.navigate('Detalhes', {
      serie: serie,
    });
  }

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Favoritos
      </Text>

      {favoritos.length === 0 ? (

        <Text style={styles.mensagem}>
          Nenhuma série adicionada aos favoritos.
        </Text>

      ) : (

        <FlatList
          data={favoritos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <SerieCard
              serie={item}
              favorito={true}
              onFavoritar={() => removerFavorito(item.id)}
              onDetalhes={() => verDetalhes(item)}
            />
          )}
        />

      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 15,
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  mensagem: {
    textAlign: 'center',
    marginTop: 40,
    fontSize: 16,
    color: '#666',
  },
});