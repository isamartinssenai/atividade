import React, { useState,useCallback, useEffect } from "react";
import axios from "axios";
import {View, Text, StyleSheet, FlatList, Pressable, Modal, TouchableOpacity, ImageBackground, ScrollView, Alert} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

export default function Lista({ navigation }) {
  const [dados, setDados] = useState([]);
  const [modal, setModal] = useState(false);
  const [recebeDado, setRecebeDado] = useState("");
  const [loading, setLoading] = useState(false);

  
    async function Buscar() {
      setLoading(true);
      try {
        const token = await AsyncStorage.getItem("token");
        console.log("token recebido", token);
if (token) {
        const response = await axios.post(
          "http://10.122.41.152:8000/api/todos_ebooks",
          {
            token: token,
          }
        );

        const payload = response.data || {};
        const ebooks = Array.isArray(payload.ebooks)
          ? payload.ebooks
          : Array.isArray(payload.data)
          ? payload.data
          : Array.isArray(payload)
          ? payload
          : [];
      
        console.log("ebooks recebidos", ebooks, payload);
        setDados(ebooks);
      }
      } catch (error) {
        console.log(error);
        setDados([]);
      } finally {
        setLoading(false);
      }
    }

useEffect(() => {
    Buscar();
  }, []);


  async function deletar() {
    try {
        const token = await AsyncStorage.getItem("token");
        console.log("token recebido", token);


      console.log("deletar ebook id:", recebeDado.id)
      if(token){
        const response = await axios.delete(
          "http://10.122.41.152:8000/api/deleta_ebook",
          {
            token: token,
            id_ebook: recebeDado.id,
          }
        );
         console.log("cheguei aqui:", recebeDado.id)
  }
    }
  catch (error) {
    console.log("erro ao deletar", error?.response?.data ?? error?.message ?? error);
  }
  }
  const renderItem = ({ item }) => (
    <Pressable
      style={styles.card}
      onPress={() => {
        setRecebeDado(item);
        setModal(!modal);
      }}
    >
      <View style={styles.cardHeader}>
        <Text style={styles.itemTitulo}>{item.titulo}</Text>
      </View>
      <Text style={styles.itemAutor}>{item.autor}</Text>
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
          keyExtractor={(item, index) => item.id?.toString() ?? item.id_ebook?.toString() ?? index.toString()}
          style={styles.list}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <View style={styles.emptyContainer}>
              
            </View>
          )}
        />

        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate("CadastroLivro")}
        >
          <Text style={styles.addButtonText}>+ Novo E-book</Text>
        </TouchableOpacity>

          <Modal visible={modal} animationType="fade" transparent={true} onRequestClose={()=>setModal(false)}>
            <View style={styles.modalOverlay}>
              <View style={styles.modalCard}>
                <Text style={styles.modalTitle}>{recebeDado.titulo}</Text>
                <Text style={styles.modalSubtitle}>{recebeDado.autor}</Text>
                <ScrollView contentContainerStyle={styles.modalScroll}>
                  <Text style={styles.textoModal}>
                    {recebeDado.texto}
                  </Text>
                </ScrollView>
                <View style={styles.modalButtons}>
                  <TouchableOpacity
                    style={[styles.modalButton, styles.modalButtonAlt]}
                    onPress={() => setModal(false)}
                  >
                    <Text style={styles.modalButtonText}>Fechar</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.modalButton}
                    onPress={() => navigation.navigate("EditaLivro", { item: recebeDado })}
                  >
                    <Text style={styles.modalButtonText}>Editar</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.modalButton, styles.modalButtonDanger]}
                    onPress={() => {
                      Alert.alert("Atenção", "Tem certeza que deseja deletar este e-book?", [{ text: "Cancelar", style: "cancel" }, { text: "Deletar", style: "destructive", onPress: () => {
                        deletar();
                        setModal(false);
                      } }]);
                    }}
                  >
                    <Text style={styles.modalButtonText}>Deletar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },

  container: {
    flex: 1,
    paddingHorizontal: 18,
    paddingTop: 20,
  },

  list: {
    flex: 1,
  },

  listContent: {
    paddingBottom: 24,
  },

  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 40,
  },

  emptyText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    paddingHorizontal: 20,
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
    backgroundColor: "rgba(255,255,255,0.98)",
    paddingVertical: 18,
    paddingHorizontal: 18,
    marginBottom: 16,
    borderRadius: 24,

    borderWidth: 1,
    borderColor: "rgba(189, 157, 117, 0.6)",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.16,
    shadowRadius: 10,

    elevation: 6,
  },

  cardHeader: {
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(124, 96, 65, 0.15)",
    paddingBottom: 6,
  },

  itemTitulo: {
    fontSize: 20,
    fontWeight: "700",
    color: "#3c2f1f",
    marginBottom: 4,
  },

  itemAutor: {
    fontSize: 16,
    color: "#7a5c3e",
    fontWeight: "600",
  },

  nome: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 6,
    color: "#5c3d00",
    letterSpacing: 1,
  },

  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    paddingHorizontal: 16,
  },

  modalCard: {
    width: "100%",
    maxWidth: 420,
    backgroundColor: "rgba(255,255,255,0.98)",
    borderRadius: 28,
    padding: 24,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.18,
    shadowRadius: 18,
    elevation: 12,
  },

  modalTitle: {
    fontSize: 24,
    fontWeight: "800",
    color: "#2c1d12",
    textAlign: "center",
    marginBottom: 10,
  },

  modalSubtitle: {
    fontSize: 16,
    color: "#7a5c3e",
    textAlign: "center",
    marginBottom: 18,
  },

  modalScroll: {
    paddingBottom: 12,
  },

  textoModal: {
    fontSize: 17,
    color: "#424242",
    textAlign: "left",
    lineHeight: 26,
    marginBottom: 20,
  },

  modalButtons: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 10,
  },

  modalButton: {
    flex: 0,
    minWidth: 90,
    backgroundColor: "#A47854",
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 4,
  },

  modalButtonAlt: {
    backgroundColor: "#E1D8C5",
  },

  modalButtonDanger: {
    backgroundColor: "#c1503f",
  },

  modalButtonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "700",
    letterSpacing: 0.5,
  },

  addButton: {
    backgroundColor: "#A47854",
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 18,
    marginBottom: 24,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.16,
    shadowRadius: 10,
    elevation: 6,
  },

  addButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    letterSpacing: 1,
  },
});
