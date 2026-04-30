import { useState } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Container from "../componentes/container";
import Titulo from "../componentes/titulo";
import Label from "../componentes/label";
import Input from "../componentes/input";
import Botao from "../componentes/botao";
import Background from "../componentes/background";
import { Alert, Image, View, Text, TouchableOpacity } from "react-native";


export default function Login({navigation}){
  


// const [user, setUser] = useState("");
const [email, setEmail] = useState("");
const [pass, setPass] = useState("");
   

async function Logar() {

if(email === "" && pass === ""){
    Alert.alert("Sucesso!", "Usuário Logado com Sucesso!");
  
}else{

  try {

    const response = await axios.post("http://10.122.41.133:8000/api/login_novo",{

    email:email,
    senha:pass,

    });
    console.log(response.data);

if(response.data.token){

 await AsyncStorage.setItem('token',response.data.token);

Alert.alert("Sucesso!", "Usuário Logado com Sucesso!");
     navigation.navigate("Conceito");

}else{

Alert.alert("ERRO",response.data.msg)

}  
  
} catch (error) {

  console.log("ERRO" , error.response.data.errors);
}
}

}


const nav = ()=>{
  navigation.navigate("Cadastro");
}


  return (
    <Background>
      <Container>
        <Titulo tit={"Login"}/>
        
          
        
         <View style={{flexDirection:"row", alignContent:"flex-end"}}>
          <Label label={"Email.:"}/>     
         <Input placeholder={"Digite seu email..."} 
        value={email} 
         onChangeText={setEmail}
/>
        </View>
       
        
        <View style={{flexDirection:"row", alignContent:"flex-end"}}>
          <Label label={"Senha.:"}/>     
          <Input placeholder={"Digite sua senha..."} value={pass} onChangeText={setPass}/>
        </View>
        
       <Botao txtBtn={"Aperte para logar!"} onPress={Logar}/>
       
        <TouchableOpacity>
          <Text style={{marginTop:15, color:"black", textAlign:"center"}} onPress={nav}>
            Não tem cadastro? Clique Aqui!
          </Text>
        </TouchableOpacity>
        
        <Image 
          source={require("../assets/logo.png")} 
          style={{height:100,width:178,marginTop: 30,marginBottom: 20}}
        />
      </Container>
    </Background>
  );
}
