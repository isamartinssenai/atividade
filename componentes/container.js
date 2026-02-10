import react from "react";
import {View, StyleSheet} from "react-native";
import jsxRuntime from "react/jsx-runtime";


export default function Container({children}){
    return(

<View style={container.cont}>
{children}
</View>


    )
}

const container = StyleSheet.create({
cont:{

    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#404040",

}


})