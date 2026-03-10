import Container from "../componentes/container";
import Titulo from "../componentes/titulo";
import Label from "../componentes/label";
import Input from "../componentes/input";
import Botao from "../componentes/botao";
import Background from "../componentes/background";
import { Alert, Image, View, Text, TouchableOpacity } from "react-native";


export default function Cadastro({navigation}){
  
  

  return (
    <Background>
      <Container>
        <Titulo tit={"Cadastro"}/>
        
        <View style={{flexDirection:"row", alignContent:"flex-start"}}>
          <Label label={"User.:"}/>     
          <Input placeholder={"Digite seu user..."}/>
        </View>     
        
        <View style={{flexDirection:"row", alignContent:"flex-end"}}>
          <Label label={"Email.:"}/>     
          <Input placeholder={"Digite seu email..."}/>
        </View>
        
        <View style={{flexDirection:"row", alignContent:"flex-end"}}>
          <Label label={"Senha.:"}/>     
          <Input placeholder={"Digite sua senha..."}/>
        </View>

        <View style={{flexDirection:"row", alignContent:"flex-end"}}>
          <Label label={"CPF.:"}/>     
          <Input placeholder={"Digite sua senha..."}/>
        </View>

        <View style={{flexDirection:"row", alignContent:"flex-end"}}>
          <Label label={"Idade.:"}/>     
          <Input placeholder={"Digite sua senha..."}/>
        </View>
        
        <Botao 
         
          txtBtn={"Aperte para logar!"}
        />

       
        <TouchableOpacity >
          <Text style={{marginTop:15, color:"black", textAlign:"center"}} onPress={()=>navigation.navigate("Login")}>
            Já Possui Conta? Clique Aqui!
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