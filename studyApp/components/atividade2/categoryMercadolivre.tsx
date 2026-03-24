import { Text, View, ScrollView, Image, StyleSheet, TouchableOpacity } from "react-native";


export default function Main() {
    return (
        <View style={style.scroll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={style.scrollImage}>
                <View style={style.imageRow}>
                    <View style={style.cardCategory}>
                        <TouchableOpacity>
                            <Image style={style.imageScroll} source={require("../../assets/images/atividade2/icon1.png")} />
                        </TouchableOpacity>
                        <Text style={style.textCategory}>Mercado Play</Text>
                    </View>
                    <View style={style.cardCategory}>
                        <TouchableOpacity>
                            <Image style={style.imageScroll} source={require("../../assets/images/atividade2/icon2.png")} />
                        </TouchableOpacity>
                        <Text style={style.textCategory}>Mercado</Text>
                    </View>
                    <View style={style.cardCategory}>
                        <TouchableOpacity>
                            <Image style={style.imageScroll} source={require("../../assets/images/atividade2/icon3.png")} />
                        </TouchableOpacity>
                        <Text >Internacioal</Text>
                    </View>
                    <View style={style.cardCategory}>
                        <TouchableOpacity>
                            <Image style={style.imageScroll} source={require("../../assets/images/atividade2/icon4.png")} />
                        </TouchableOpacity>
                        <Text style={style.textCategory}>Veículos</Text>
                    </View>
                    <View style={style.cardCategory}>
                        <TouchableOpacity>
                            <Image style={style.imageScroll} source={require("../../assets/images/atividade2/icon5.png")} />
                        </TouchableOpacity>
                        <Text style={style.textCategory}>Moda</Text>
                    </View>
                    <View style={style.cardCategory}>
                        <TouchableOpacity>
                            <Image style={style.imageScroll} source={require("../../assets/images/atividade2/icon6.png")} />
                        </TouchableOpacity>
                        <Text style={style.textCategory}>Celulares</Text>
                    </View>
                    <View style={style.cardCategory}>
                        <TouchableOpacity>
                            <Image style={style.imageScroll} source={require("../../assets/images/atividade2/icon7.png")} />
                        </TouchableOpacity>
                        <Text style={style.textCategory}>Lar</Text>
                    </View>
                    <View style={style.cardCategory}>
                        <TouchableOpacity>
                            <Image style={style.imageScroll} source={require("../../assets/images/atividade2/icon8.png")} />
                        </TouchableOpacity>
                        <Text>Computação</Text>
                    </View>
                    <View style={style.cardCategory}>
                        <TouchableOpacity>
                            <Image style={style.imageScroll} source={require("../../assets/images/atividade2/icon9.png")} />
                        </TouchableOpacity>
                        <Text >Televisoes</Text>
                    </View>
                    <View style={style.cardCategory}>
                        <TouchableOpacity>
                            <Image style={style.imageScroll} source={require("../../assets/images/atividade2/icon10.png")} />
                        </TouchableOpacity>
                        <Text style={style.textCategory}>Mais vendidos</Text>
                    </View>
                    <View style={style.cardCategory}>
                        <TouchableOpacity>
                            <Image style={style.imageScroll} source={require("../../assets/images/atividade2/icon11.png")} />
                        </TouchableOpacity>
                        <Text >Imóveis</Text>
                    </View>
                    <View style={style.cardCategory}>
                        <TouchableOpacity>
                            <Image style={style.imageScroll} source={require("../../assets/images/atividade2/icon12.png")} />
                        </TouchableOpacity>
                        <Text >Afiliados</Text>
                    </View>
                    <View style={style.cardCategory}>
                        <TouchableOpacity>
                            <Image style={style.imageScroll} source={require("../../assets/images/atividade2/icon13.png")} />
                        </TouchableOpacity>
                        <Text style={style.textCategory}>Ver mais</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const style = StyleSheet.create({
    scroll: {
        marginTop: 25
    },
    scrollImage: {

    },
    imageRow: {
        flexDirection: "row",
        gap: 12,
        paddingLeft: 25,
        paddingRight: 25
    },
    imageScroll: {
        width: 50,
        height: 50
    },
    cardCategory: {
        alignItems: "center"
    },
    textCategory: {
        maxWidth: 55,
        textAlign: "center"
    }
})