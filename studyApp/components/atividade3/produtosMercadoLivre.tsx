import { StyleSheet, Text, View, Image, TextInput, ScrollView } from "react-native";
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from "react";
import Main from "../atividade2/categoryMercadolivre";
import { SafeAreaView } from "react-native-safe-area-context";



export default function Grid() {

    const [valor, setValor] = useState("")


    const [produtos, setProdutos] = useState([
        {
            productID: 1,
            productImage: require("../../assets/images/atividade3/smarttv.jpg"),
            productName: "Smart Tv",
            price: 1276.89,
            descriptions: "Smart Tv 43 Aoc Led...",
            desconto: "34% OFF no Pix",
            aviso: "Entrega Rápida"
        },
        {
            productID: 2,
            productImage: require("../../assets/images/atividade3/lavadora.jpg"),
            productName: "Lavadora",
            price: 319.90,
            descriptions: "Lavadora De Alta...",
            desconto: "10% OFF no Pix",
            aviso: "Entrega Rápida"
        },
        {
            productID: 3,
            productImage: require("../../assets/images/atividade3/caixadesom.jpg"),
            productName: "Lavadora",
            price: 349.45,
            descriptions: "Caixa Amplificada...",
            aviso: "Entrega Rápida"
        },
        {
            productID: 4,
            productImage: require("../../assets/images/atividade3/camerainteligente.jpg"),
            productName: "Lavadora",
            price: 185.30,
            descriptions: "Câmera Inteligente...",
            aviso: "Entrega Rápida"
        }
    ])

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

            <ScrollView>
                <View style={style.gridProducts}>
                    {produtos.map((product) => (
                        <View style={style.products} key={product.productID}>
                            <View style={style.imageProducts}>
                                <Image source={product.productImage} />
                            </View>
                            <View style={style.flexContainer}>
                                <Text style={style.desconto}>{product.desconto}</Text>
                                <Text style={style.productDescription}>{product.descriptions}</Text>
                                <Text>{product.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</Text>
                                <View style={style.aviso}>
                                    <Text style={style.textAviso}>{product.aviso}</Text>
                                </View>
                                <View style={style.containerImage}>
                                    <Text style={style.textProducts}>Frete Gratis </Text>
                                    <Image style={style.imageProductsLogo} source={require("../../assets/images/atividade3/frete.png")} />
                                </View>
                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    },
    header: {
    },
    navbar: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        padding: 15,
        gap: 5,
        marginTop: 29
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
        gap: 13,
        height: "100%"
    },
    imageScroll: {
        width: 355,
        height: 135,
        justifyContent: "center",
        objectFit: "cover",
        borderRadius: 18,
    },
    iconCategory: {
        alignItems: "center",
    },
    scroll: {

    },
    gridProducts: {
        flexWrap: "wrap",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 26,
        margin: 23
    },
    productDescription: {
        overflow: "hidden",
        wordWrap: "wrap",
        fontWeight: "500"
    },
    products: {
        alignItems: "flex-start",
        borderWidth: 1,
        borderColor: "#66666617",
        gap: 5,
        padding: 12,
        height: 287,
        borderRadius: 15,
        boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 1px"
    },
    imageProducts: {
        borderWidth: 1,
        borderColor: "#66666617",
        borderRadius: 23,
        marginBottom: 12
    },
    desconto: {
        color: "#00A650"
    },
    containerImage: {
        alignItems: "center",
        flexDirection: "row",
    },
    textProducts: {
        color: "#00A650",
        fontSize: 15,
        fontWeight: "bold"
    },
    aviso: {
        backgroundColor: "#06b95d41",
        padding: 4,
        borderRadius: 6
    },
    textAviso: {
        color: "#015e2e",
        fontWeight: "600"
    },
    imageProductsLogo: {

    },
    flexContainer:{
        marginTop: "auto",
        gap: 6
    }
})