import { router } from "expo-router";
import { Text, TouchableOpacity } from "react-native"


export default function Dashboard(){

    function antePage(){
        router.push("/hero")
    }

    return(
        <TouchableOpacity onPress={antePage}>
            <Text>OLa</Text>
        </TouchableOpacity>
    );
}