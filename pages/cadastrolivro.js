import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import Container from "../componentes/container";
import Titulo from "../componentes/titulo";
import Label from "../componentes/label";
import Input from "../componentes/input";
import Botao from "../componentes/botao";
import Background from "../componentes/background";
import { Alert, Image, View, Text, TouchableOpacity } from "react-native";

export default function CadastroLivro({ navigation }) {

  //livro titulo autor sinopse texto genero
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [sinopse, setSinopse] = useState("");
  const [texto, settexto] = useState("");
  const [gen, setGen] = useState("");

 




  async function Cadastrar() {

    if (titulo === "" || autor === "" || sinopse === "" || texto === "" || gen === "") {

      Alert.alert("ERRO", "Preencha todos os campos!");
      

    } else { 

      try{

         const token = await AsyncStorage.getItem('token');
    console.log("token.:",token);

    if(token){

      const response = await axios.post("http://10.122.41.147:8000/api/cadastra_ebook",{

  token:token,
  titulo:titulo,
  autor:autor,
  sinopse:sinopse,
  texto:texto,
  genero:gen,


      });
      console.log (response.data);

       Alert.alert("SUCESSO", "Livro cadastrado com sucesso");
       navigation.replace("Conceito");
    }
    }catch(error){

      console.log ("erro",error.response.data.errors);

    }
}
}

  
  
  


  return (
    <Background>
      <Container>
        <Titulo tit={"Cadastro Livro"} />

       

        <View style={{ flexDirection: "row" }}>
          <Label label={"Titulo:"} />
          <Input
            placeholder={"Digite seu titulo..."}
            value={titulo}
            onChangeText={setTitulo}
          />
        </View>

        <View style={{ flexDirection: "row" }}>
          <Label label={"Autor:"} />
          <Input
            placeholder={"Digite seu(a) autor..."}
            value={autor}
            onChangeText={setAutor}
            
          />
        </View>

        <View style={{ flexDirection: "row" }}>
          <Label label={"Sinopse:"} />
          <Input
            placeholder={"Digite sua  sinopse..."}
            value={sinopse}
            onChangeText={setSinopse}
          />
        </View>

        <View style={{ flexDirection: "row" }}>
          <Label label={"Texto:"} />
          <Input
            placeholder={"Digite seu texto..."}
            value={texto}
            onChangeText={settexto}
         
          />
        </View>

       <View style={{ flexDirection: "row" }}>
          <Label label={"Gênero:"} />
          <Input
            placeholder={"Digite o gênero..."}
            value={gen}
            onChangeText={setGen}
          
          />
        </View>


        <Botao
          txtBtn={"Cadastrar"}
          onPress={Cadastrar}
        />

        <TouchableOpacity>
          <Text
            style={{ marginTop: 15, color: "black", textAlign: "center" }}
            onPress={() => navigation.navigate("Login")}
          >
            
          </Text>
        </TouchableOpacity>

        <Image
          source={require("../assets/logo.png")}
          style={{ height: 100, width: 178, marginTop: 30, marginBottom: 20 }}
        />

      </Container>
    </Background>
  );
}