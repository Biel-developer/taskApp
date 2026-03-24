import { router } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"


export default function Welcome() {

    function homePage(){
        router.push("/home")
    }

    return (
            <View style={style.container}>
                <Image source={require("../../assets/images/atividade4/background.jpg")} />
                <View style={style.textBackground}>
                    <Text style={style.text1}>Eleve sua experiência de direção com elegância</Text>
                    <Text style={style.text2}>Descubra um mundo de veículos premium ao seu alcance.</Text>
                </View>
                <View style={style.buttonBackground}>
                    <TouchableOpacity style={style.button} onPress={homePage}>
                        <Text style={style.textButton}>Começar</Text>
                    </TouchableOpacity>
                </View>
            </View>
    );
}


const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    textBackground: {
        position: "absolute",
        zIndex: 9999,
        margin: 18,
        marginTop: 114,
        width: "95%"
    },
    text1: {
        color: "#fff",
        fontSize: 35,
        fontWeight: "bold",
    },
    text2: {
        color: "rgba(255, 255, 255, 0.42)",
        fontSize: 25,
        fontWeight: "bold",
    },
    buttonBackground:{
        position: "absolute",
        marginTop: 734,
        alignItems: "center",
        justifyContent: "center",
        width: "100%"
    },
    button:{
        backgroundColor: "#3F33FF",
        width: "80%",
        padding: 10,
        borderRadius: 23
    },
    textButton:{
        color: "#fff",
        textAlign: "center",
        fontSize: 35
    }
})