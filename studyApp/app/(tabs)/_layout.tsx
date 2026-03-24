import { Tabs } from "expo-router";
import { Image } from "react-native";
import Octicons from '@expo/vector-icons/Octicons';


export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        sceneStyle: { backgroundColor: "#fff" },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarInactiveTintColor: "#201f1f2a",
        tabBarActiveTintColor: "#111",
        tabBarStyle: {
          backgroundColor: "#ffffff",
          borderColor: "#22222215"
        }
      }}
    >

      <Tabs.Screen name="index"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color, size }) => (
            <Octicons name="home-fill" size={size} color={color} />
          )
        }} />

        <Tabs.Screen name="dashboard"
          options={{
            title: 'Pesquisa',
            tabBarIcon: ({color, size}) => (
              <Octicons name="search" size={size} color={color} />
            )
          }} />
    </Tabs>
  )
}