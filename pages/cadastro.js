import { useState } from "react";
import axios from "axios";
import Container from "../componentes/container";
import Titulo from "../componentes/titulo";
import Label from "../componentes/label";
import Input from "../componentes/input";
import Botao from "../componentes/botao";
import Background from "../componentes/background";
import { Alert, Image, View, Text, TouchableOpacity } from "react-native";

export default function Cadastro({ navigation }) {

  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [tel, setTel] = useState("");
  const [nasc, setNasc] = useState("");
  const [gen, setGen] = useState("");

  function apidata (data){

    const [dia,mes,ano]=data.split("/");
    return `${ano}-${mes}-${dia}`;
  }

const value = {

  nome:user,
  email:email,
  senha:pass,
  telefone:tel,
  nascimento:apidata(nasc),
  genero:gen,


}



  async function Cadastrar() {

    if (user === "" || email === "" || pass === "" || tel === "" || nasc === "" || gen === "") {

      Alert.alert("ERRO", "Preencha todos os campos!");
      

    } else { 

      try{

      const response = await axios.post("http://10.122.41.149:9000/api/cadastro_usuario",value);
      console.log (response.data);

       Alert.alert("SUCESSO", "Usuário cadastrado com sucesso");
       navigation.replace("Login");

    }catch(error){

      console.log ("erro",error.response.data.errors);

    }
    
  }
  }

  return (
    <Background>
      <Container>
        <Titulo tit={"Cadastro"} />

        <View style={{ flexDirection: "row" }}>
          <Label label={"User.:"} />
          <Input
            placeholder={"Digite seu user..."}
            value={user}
            onChangeText={setUser}
          />
        </View>

        <View style={{ flexDirection: "row" }}>
          <Label label={"Email.:"} />
          <Input
            placeholder={"Digite seu email..."}
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={{ flexDirection: "row" }}>
          <Label label={"Senha.:"} />
          <Input
            placeholder={"Digite sua senha..."}
            value={pass}
            onChangeText={setPass}
            secureTextEntry={true}
          />
        </View>

        <View style={{ flexDirection: "row" }}>
          <Label label={"Telefone.:"} />
          <Input
            placeholder={"Digite seu telefone..."}
            value={tel}
            onChangeText={setTel}
          />
        </View>

        <View style={{ flexDirection: "row" }}>
          <Label label={"Data de nascimento.:"} />
          <Input
            placeholder={"Data de nascimento..."}
            value={nasc}
            onChangeText={setNasc}
         
          />
        </View>

       <View style={{ flexDirection: "row" }}>
          <Label label={"Genero.:"} />
          <Input
            placeholder={"Digite seu genero..."}
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