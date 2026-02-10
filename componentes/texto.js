import react from "react";
import {Text, StyleSheet} from "react-native";



export default function Texto({txt}){
    return(

<Text style={texto.txt}>
{txt}
</Text>


    )
}

const texto = StyleSheet.create({
txt:{

    color:"#ffff",
    fontSize:50

},


})