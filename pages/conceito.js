import { useState, useEffect } from "react";
import Container from "../componentes/container";
import Titulo from "../componentes/titulo";
import Label from "../componentes/label";
import Input from "../componentes/input";
import Botao from "../componentes/botao";
import Background from "../componentes/background";
import axios from "axios";
import {View, Text, StyleSheet, FlatList, Pressable, Modal, TouchableOpacity, ImageBackground,ScrollView} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function Lista() {
  const [dados, setDados] = useState([]);
  const [modal, setModal] = useState(false);
  const [recebeDado, setRecebeDado] = useState("");

  useEffect(() => {
    async function Buscar() {
      try {
        const token = await AsyncStorage.getItem("token");
        console.log("token recebido", token);

        const response = await axios.post(
          "http://10.122.41.133:8000/api/todos_ebooks",
          {
            token: token,
          }
        );

        setDados(response.data.ebooks);
      } catch (error) {
        console.log(error);
      }
    }

    Buscar();
  }, []);

  const renderItem = ({ item }) => (
    <Pressable
      style={styles.card}
      onPress={() => {
        setRecebeDado(item);
        setModal(!modal);
      }}
    >
      <Text style={styles.nome}>{item.autor}</Text>
      <Text>{item.titulo}</Text>
    </Pressable>
  );

  return (
    <ImageBackground
      source={{
        uri: "https://i.pinimg.com/736x/ca/55/0b/ca550b01d5b66dacd10e3ae06af30b16.jpg",
      }}
      style={styles.background}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.container}>

        <Text style={styles.titulo}>Lista de E-books</Text>

        <FlatList
          data={dados}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />

          <Modal visible={modal} animationType="fade" transparent={true}>
<ScrollView>
          <View style={styles.modal}>

           
            

              <View style={styles.modalContent}>

                <Text style={styles.nome}>
                  {recebeDado.titulo}
                </Text>

                <Text style={styles.textoModal}>
                  {recebeDado.texto}
                </Text>

                <TouchableOpacity
                  style={styles.botao}
                  onPress={() => setModal(false)}
                >
                  <Text style={styles.textoBotao}>
                    Fechar
                  </Text>
                </TouchableOpacity>

              </View>

         

          </View>
</ScrollView>
        </Modal>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },

 
  titulo: {
    color: "#2c1810",
    fontSize: 55,
    fontWeight: "400",
    letterSpacing: 2,
    textAlign: "center",
    marginTop: 30,
    marginBottom: 25,
    marginHorizontal: 20,
    textShadowColor: "rgb(255, 255, 255)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    borderBottomWidth: 3,
    borderBottomColor: "#c9b6a5",
    paddingBottom: 15,
    textTransform: "uppercase",
    fontStyle: "normal",
    fontFamily: "breeserif",
  },

  card: {
    backgroundColor: "rgba(255,255,255,0.95)",
    paddingVertical: 20,
    paddingHorizontal: 18,
    marginBottom: 18,
    borderRadius: 22,

    borderWidth: 1.5,
    borderColor: "#d6b98c",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.18,
    shadowRadius: 6,

    elevation: 7,
  },

  nome: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 6,
    color: "#5c3d00",
    letterSpacing: 1,
  },

 modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.6)",
  },

  modalContent: {
    width: "85%",
    backgroundColor: "#fff",
    borderRadius: 25,
    padding: 25,
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,

    elevation: 10,
  },

  textoModal: {
    fontSize: 18,
    color: "#444",
    textAlign: "center",
    marginTop: 10,
    lineHeight: 26,
  },

  botao: {
    marginTop: 20,
    backgroundColor: "#c49a6c",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 14,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,

    elevation: 5,
  },
});
