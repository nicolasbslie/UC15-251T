import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import SerieCard from '../components/SerieCard';
import { Serie, RootStackParamList } from '../App';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

type Props = {
  favoritos: Serie[];
  setFavoritos: React.Dispatch<React.SetStateAction<Serie[]>>;
};

export default function Inicio({
  favoritos,
  setFavoritos,
}: Props) {

  const [series, setSeries] = useState<Serie[]>([]);
  const [carregando, setCarregando] = useState(true);

  const navigation = useNavigation<NavigationProps>();

  useEffect(() => {
    fetch('https://api.tvmaze.com/shows')
      .then((response) => response.json())
      .then((data) => {
        setSeries(data);
        setCarregando(false);
      })
      .catch((error) => {
        console.log('Erro ao buscar séries:', error);
        setCarregando(false);
      });
  }, []);

  function adicionarFavorito(serie: Serie) {
    setFavoritos((lista) => {
      if (lista.some((item) => item.id === serie.id)) {
        return lista.filter((item) => item.id !== serie.id);
      }

      return [...lista, serie];
    });
  }

  function abrirDetalhes(serie: Serie) {
    navigation.navigate('Detalhes', {
      serie: serie,
    });
  }

  if (carregando) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" />
        <Text>Carregando séries...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Séries
      </Text>

      <FlatList
        data={series}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <SerieCard
            serie={item}
            favorito={favoritos.some(
              (fav) => fav.id === item.id
            )}
            onFavoritar={() => adicionarFavorito(item)}
            onDetalhes={() => abrirDetalhes(item)}
          />
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#f5f5f5',
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
});