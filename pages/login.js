import { useState } from "react";
import Container from "../componentes/container";
import Titulo from "../componentes/titulo";
import Label from "../componentes/label";
import Input from "../componentes/input";
import Botao from "../componentes/botao";
import Background from "../componentes/background";
import { Alert, Image, View, Text, TouchableOpacity } from "react-native";


export default function Login({navigation}){
  
 const [user, setUser] = useState("");
const [email, setEmail] = useState("");
const [pass, setPass] = useState("");
   
 const log = () => {   
 

  if(user.trim === "gim" && email.trim === "gim@gmail.com" && pass.trim === "123"){
    Alert.alert("Sucesso!", "Usuário Logado com Sucesso!");
     navigation.navigate("Cadastro");

  } else if(user.trim === " " || email.trim === " " || pass.trim === " "){
    Alert.alert("ERRO", "Favor preencher todos os campos!");

  } else {
    Alert.alert("ERRO!", "Usuário não cadastrado!");
  }
}



const nav = ()=>{
  navigation.navigate("Cadastro");
}


  return (
    <Background>
      <Container>
        <Titulo tit={"Login"}/>
        
        <View style={{flexDirection:"row", alignContent:"flex-start"}}>
          <Label label={"User.:"}/>     
          <Input placeholder={"Digite seu user..."} value={user} onChangeText={setUser} />
        </View>     
        
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
        
       <Botao txtBtn={"Aperte para logar!"} onPress={log}/>
       
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