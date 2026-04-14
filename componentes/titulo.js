import React from "react";
import { Text, StyleSheet } from "react-native";
import { useFonts } from "expo-font";

export default function Titulo({ tit }) {
    const [fonts] = useFonts ({
  
      'breeserif':require('../assets/fontes/breeserif.ttf'),
  
    })
  
  if(!fonts){
  
    return null;
  
  }

  return (
    <Text style={texto.txt}>
      {tit}
    </Text>
  );
}

const texto = StyleSheet.create({
  txt: {
    color: "#2c1810",
    fontSize: 55,
    fontWeight: "400",
    letterSpacing: 2,
    textAlign: "center",
    marginTop: 30,
    marginBottom: 25,
    marginHorizontal: 20,
    textShadowColor: "rgba(170, 150, 130, 0.4)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    borderBottomWidth: 3,
    borderBottomColor: "#c9b6a5",
    paddingBottom: 15,
    textTransform: "uppercase",
    fontStyle: "normal",
    fontFamily:"breeserif"
  },
});