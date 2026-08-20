import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from '@expo/vector-icons/Ionicons';

import Inicio from './pages/Inicio';
import Favoritos from './pages/Favoritos';
import Perfil from './pages/Perfil';

export type Serie = {
  id: number;
  name: string;
  genres: string[];
  premiered: string | null;
  rating: {
    average: number | null;
  };
  summary: string | null;
  image: {
    medium: string;
    original: string;
  } | null;
};

export type RootStackParamList = {
  Tabs: undefined;
  Detalhes: {
    serie: Serie;
  };
};

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {

  const [favoritos, setFavoritos] = useState<Serie[]>([]);

  return (
    <NavigationContainer>

      <Stack.Navigator>

        <Stack.Screen
          name="Tabs"
          options={{ headerShown: false }}
        >
          {() => (
            <Tab.Navigator
              screenOptions={({ route }) => ({
                headerShown: false,

                tabBarIcon: ({ color, size }) => {

                  let iconName: keyof typeof Ionicons.glyphMap;

                  if (route.name === 'Início') {
                    iconName = 'home';
                  } else if (route.name === 'Favoritos') {
                    iconName = 'heart';
                  } else {
                    iconName = 'person';
                  }

                  return (
                    <Ionicons
                      name={iconName}
                      size={size}
                      color={color}
                    />
                  );
                },
              })}
            >

              <Tab.Screen name="Início">
                {() => (
                  <Inicio
                    favoritos={favoritos}
                    setFavoritos={setFavoritos}
                  />
                )}
              </Tab.Screen>

              <Tab.Screen name="Favoritos">
                {() => (
                  <Favoritos
                    favoritos={favoritos}
                    setFavoritos={setFavoritos}
                  />
                )}
              </Tab.Screen>

              <Tab.Screen
                name="Perfil"
                component={Perfil}
              />

            </Tab.Navigator>
          )}
        </Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
  );
}