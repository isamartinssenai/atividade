import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useRoute } from "@react-navigation/native";
import Container from "../componentes/container";
import Titulo from "../componentes/titulo";
import Label from "../componentes/label";
import Input from "../componentes/input";
import Botao from "../componentes/botao";
import Background from "../componentes/background";
import { Alert, Image, View, Text, TouchableOpacity } from "react-native";

export default function EditaLivro({ navigation }) {

  const route = useRoute();
  const params = route.params || {};
  const item = params.item || params;
   

  const [id, setId] = useState(item?.id_ebook || "");
  const [titulo, setTitulo] = useState(item?.titulo || "");
  const [autor, setAutor] = useState(item?.autor || "");
  const [sinopse, setSinopse] = useState(item?.sinopse || "");
  const [texto, settexto] = useState(item?.texto || "");
  const [gen, setGen] = useState(item?.genero || "");

 




  async function Cadastrar() {

    if (titulo === "" || autor === "" || sinopse === "" || texto === "" || gen === "") {

      Alert.alert("ERRO", "Preencha todos os campos!");
      

    } else { 

      try{

         const token = await AsyncStorage.getItem('token');
    console.log("token.:",token);

    if(token){
      console.log("id.:", id);
      const response = await axios.put("http://10.122.41.152:8000/api/altera_ebook",{
        token: token,
        id_ebook: id,
        titulo: titulo,
        autor: autor,
        sinopse: sinopse,
        texto: texto,
        genero: gen,
      });
      console.log(response.data);

      Alert.alert("SUCESSO", "Dados alterados com sucesso!!");
      navigation.navigate("Conceito", { refresh: Date.now() });
    }
    } catch (error) {
      console.log("erro", error?.response?.data?.errors ?? error?.response?.data ?? error?.message ?? error);
    }
}
}

  
  
  


  return (
    <Background>
      <Container>
        <Titulo tit={"Edita Ebook"} />

       

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
          txtBtn={"Editar"}
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