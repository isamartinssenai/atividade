import{ useEffect } from "react";
import { ImageBackground,Image,StyleSheet} from "react-native";


export default function Splash({navigation}){

useEffect(()=>{

const time = setTimeout(()=>{

navigation.navigate("Login");

},5000)

return ()=>clearTimeout(time);

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
