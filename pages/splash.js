import{ useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ImageBackground,Image,StyleSheet} from "react-native";


export default function Splash({navigation}){



useEffect(()=>{

const validacao = async()=>{

    const token = await AsyncStorage.getItem('token');
    console.log("token.:",token);

 
const time = setTimeout(()=>{

    if(token){
navigation.navigate("Conceito");


}else{
 
    navigation.replace("Login")
}

},3000)

return ()=>clearTimeout(time);

}

validacao();

},[])


    return(

        //importaçao com imagem interna <ImageBackground source={require('../assets/fundo2.png')}>
 <ImageBackground source={{uri:'https://i.pinimg.com/736x/ca/55/0b/ca550b01d5b66dacd10e3ae06af30b16.jpg'}} style={style.imgBack}>
<Image source={require('../assets/logo.png')} style={style.imgLogo}/>

        </ImageBackground>

    )
}


const style = StyleSheet.create({

imgBack:{

    flex:1,
    justifyContent:"center",
    alignItems:"center"

},
imgLogo:{

    width:350,
    height:200,
}

})
