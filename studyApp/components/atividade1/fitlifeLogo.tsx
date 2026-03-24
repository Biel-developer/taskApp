import { router } from "expo-router";
import { replace } from "expo-router/build/global-state/routing";
import { useEffect, useRef, useState } from "react";
import { Animated, Image, StyleSheet, Text, View } from "react-native";




export default function Fitlife() {

  const valorAnimado = useRef(new Animated.Value(0)).current;
  const translateY = valorAnimado.interpolate({
    inputRange:[0, 1],
    outputRange:[45, 0]
  })

  useEffect(() =>{
    Animated.timing(valorAnimado, 
      { toValue:1,
        duration: 2000,
        useNativeDriver: true,
       }).start(() => {
        router.push("/welcome")
       })
  },[])


  return (
    <Animated.View style={[style.container, {opacity: valorAnimado, transform:[{translateY: translateY}]}]}>
        <View style={style.logo}>
          <Image source={require("../../assets/images/atividade1/peso.png")} />
          <Text style={style.title}>FitLife</Text>
        </View>
    </Animated.View>
  );
}

const style = StyleSheet.create({
  title: {
    color: "#222",
    fontSize: 65,
    fontWeight: "bold"
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  logo: {
    alignItems: "center",
  }
})