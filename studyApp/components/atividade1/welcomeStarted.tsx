import { router } from "expo-router";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";


export default function WelcomeStarted() {

    // function proxPage(){
    //     router.push("/dashboard")
    // }

    return (
        <View style={style.container}>
            <View style={style.image}>
                <Image style={style.imageBack} source={require("../../assets/images/atividade1/background.png")} />
            </View>
            <View style={style.header}>
                <Image style={style.imageHeader} source={require("../../assets/images/atividade1/logo_header.png")} />
            </View>
            <View style={style.infoStarted}>
                <View style={style.containerText}>
                    <View style={style.spaceText}>
                        <Text style={style.textPrimary}>Bem-Vindo ao <Text style={style.textNormal}><Image style={style.imageText} source={require("../../assets/images/atividade1/logo_header.png")} />FitLife</Text></Text>
                        <Text style={style.textSecundary}>Gerencie seus treinos, monitore sua nutrição e alcance seus objetivos de saúde conosco.</Text>
                    </View>
                    <TouchableOpacity style={style.buttonStart} >
                        <Text style={style.textButton}>Começar</Text>
                    </TouchableOpacity>
                    <Text style={style.account}>Já tem uma conta? <Text style={style.login}>Iniciar Sessão</Text></Text>
                </View>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#06050A",
        height: "100%",
    },
    imageBack:{
        width: "100%"
    },
    image: {
        opacity: 0.6
    },
    header: {
        position: "absolute",
        zIndex: 999,
        margin: 25,
        marginTop: 56
    },
    imageHeader: {
        width: 45,
        height: 45
    },
    text: {
        color: "#fff",
        fontSize: 45
    },
    infoStarted: {
        position: "absolute",
        zIndex: 9999,
        justifyContent: "flex-end",
        height: "100%",
        margin: 15,
    },
    containerText:{
        marginBottom: 55
    },
    spaceText: {
        gap: 15,
    },
    textPrimary: {
        color: "#fff",
        fontSize: 67,
        fontWeight: "bold",
    },
    textNormal: {
        fontWeight: "normal"
    },
    imageText: {
        width: 34,
        height: 34,
    },
    textSecundary: {
        color: "#666",
        fontSize: 19,
        marginBottom: 35
    },
    buttonStart: {
        backgroundColor: "#6C63FF",
        width: "100%", 
        padding: 20,
        borderRadius: 24,
        marginBottom: 23
    },
    textButton: {
        color: "#fff",
        textAlign: "center",
        fontSize: 25,
        fontWeight: "bold"
    },
    account:{
        color:"#fff",
        fontSize: 18,
        textAlign: "center"
    },
    login:{
        color: "#6C63FF",
        fontSize: 19
    }
})