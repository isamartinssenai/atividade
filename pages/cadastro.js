import { useState } from "react";
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
  const [CPF, setcpf] = useState("");
  const [idade, setidade] = useState("");

  function Cadastrar() {

    if (user === "" || email === "" || pass === "" || CPF === "" || idade === "") {

      Alert.alert("ERRO", "Preencha todos os campos!");
      console.log("azedou");

    } else { 

      Alert.alert("Sucesso!", "Cadastro realizado com sucesso!");
      console.log("Estou aqui");
      navigation.navigate ("Login");
      
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
          <Label label={"CPF.:"} />
          <Input
            placeholder={"Digite seu CPF..."}
            value={CPF}
            onChangeText={setcpf}
          />
        </View>

        <View style={{ flexDirection: "row" }}>
          <Label label={"Idade.:"} />
          <Input
            placeholder={"Digite sua idade..."}
            value={idade}
            onChangeText={setidade}
            keyboardType="numeric"
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