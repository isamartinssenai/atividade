import { useState } from "react";
import axios from "axios";

import Container from "../componentes/container";
import Titulo from "../componentes/titulo";
import Label from "../componentes/label";
import Input from "../componentes/input";
import Botao from "../componentes/botao";
import Background from "../componentes/background";
import { Image, View, Text, TouchableOpacity } from "react-native";

export default function Cep({ navigation }) {

  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
//   const [pass, setPass] = useState("");
//   const [cpf, setcpf] = useState("");
//   const [idade, setidade] = useState("");

  async function Buscar(){


    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    setEndereco(response.data);

  }

 


  return (
    <Background>
      <Container>
        <Titulo tit={"Busca Cep"} />

        <View style={{ flexDirection: "row" }}>
          <Label label={"Cep"} />
          <Input
            placeholder={"Digite seu cep..."}
            value={cep} 
            onChangeText={setCep}
          />
        </View> 

        <View style={{ flexDirection: "row" }}>
          <Label label={"Rua"} />
        <Label label={endereco.logradouro} />
        </View>

        <View style={{ flexDirection: "row" }}>
          <Label label={"Bairro"} />
        <Label label={endereco.bairro}/>
        </View>

        <View style={{ flexDirection: "row" }}>
          <Label label={"Cidade"} />
         <Label label={endereco.localidade}/>
   
        </View>

        <View style={{ flexDirection: "row" }}>
          <Label label={"Estado"} />
          <Label label={endereco.estado}/>
        </View>

        <Botao
          txtBtn={"Buscar"}
          onPress={Buscar}
        />

        <TouchableOpacity>
          <Text
            style={{ marginTop: 15, color: "black", textAlign: "center" }}
            onPress={() => navigation.navigate("Login")}
          >
            Já Possui Conta? Clique Aqui!
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