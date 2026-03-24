import { StyleSheet, Text, View, Image, TextInput, ScrollView } from "react-native";
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from "react";
import Main from "./categoryMercadolivre";




export default function Navbar() {

    const [valor, setValor] = useState("")

    return (
        <View style={style.container}>
            <View style={style.header}>
                <LinearGradient
                    colors={['#FFF159', '#FFF159', '#fff15900']}
                    style={style.background}
                />
            </View>

            <View style={style.navbar}>
                <View>
                    <Image source={require("../../assets/images/atividade2/logo-mercadoLivre.png")} />
                </View>

                <View style={style.input}>
                    <EvilIcons name="search" size={24} color="black" />
                    <TextInput
                        placeholder="o que busca?"
                        placeholderTextColor={"#2222226d"}
                        onChangeText={setValor}
                        value={valor}
                        style={style.textInput}
                    />
                </View>

                <View style={style.elementShop}>
                    <Image source={require("../../assets/images/atividade2/menu.png")} />
                    <Image source={require("../../assets/images/atividade2/cart.png")} />
                </View>
            </View>

            <View style={style.scroll}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={style.scrollImage}>
                    <View style={style.imageRow}>
                        <Image style={style.imageScroll} source={require("../../assets/images/atividade2/foto1.png")} />
                        <Image style={style.imageScroll} source={require("../../assets/images/atividade2/foto3.png")} />
                        <Image style={style.imageScroll} source={require("../../assets/images/atividade2/foto4.png")} />
                        <Image style={style.imageScroll} source={require("../../assets/images/atividade2/foto5.png")} />
                        <Image style={style.imageScroll} source={require("../../assets/images/atividade2/foto6.png")} />
                        <Image style={style.imageScroll} source={require("../../assets/images/atividade2/foto7.png")} />
                        <Image style={style.imageScroll} source={require("../../assets/images/atividade2/foto8.png")} />
                        <Image style={style.imageScroll} source={require("../../assets/images/atividade2/foto9.png")} />
                    </View>
                </ScrollView>
            </View>

            <Main />
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    header:{

    },
    navbar: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        padding: 15,
        gap: 5,
        marginTop: 34
    },
    elementShop: {
        flexDirection: "row"
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        width: "100%",
        height: 345
    },
    input: {
        backgroundColor: "#fff",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 15,
        height: 45,
        width: "50%"
    },
    textInput: {
        width: "85%",
        height: "100%",
        fontSize: 19,
        outlineColor: "#fff",
        outlineWidth: 0,
    },
    
    scrollImage: {
        padding: 12
    },
    imageRow: {
        flexDirection: "row", 
        justifyContent: "center",
        width: "100%",
        gap:13,
        height: "100%"
    },
    imageScroll: {
        width: 355,
        height: 135,
        justifyContent: "center",
        objectFit: "cover",
        borderRadius: 18,
    },
    iconCategory:{
        alignItems: "center",
    },
    scroll:{

    }
})