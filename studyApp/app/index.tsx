import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Fitlife from "@/components/atividade1/fitlifeLogo";
import Navbar from "@/components/atividade2/heroMercadoLivre";
import GridProducts from "@/components/atividade3/produtosMercadoLivre"
import ShopBar from "@/components/atividade4/shopCar";
import Welcome from "@/components/atividade4/welcome";


export default function Index() {
    return (
        <View style={style.container}>

            {/* // Atividade 1 - Tela de Boas-Vindas */}
            {/* <Fitlife /> */}

            {/* // Atividade 2 - Lista de Categorias (Home de E-commerce) */}
            {/* <Navbar /> */}

            {/* // Atividade 3 - Grid de Produtos */}
            {/* <GridProducts /> */}

            {/* Atividade 4 -  */}

            <Welcome />
        </View>
    );

}

const style = StyleSheet.create({
    container: {
        flex: 1
    }
})