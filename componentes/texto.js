import React from "react";
import { Text, StyleSheet } from "react-native";
import { useFonts } from "expo-font";

export default function Texto({ txt }) {

  const [fonts] = useFonts ({

    'garamond':require('../assets/fontes/garamond.ttf'),
    'garamonditalic':require('../assets/fontes/garamonditalic.ttf')

  })

if(!fonts){

  return null;

}

  return (
    <Text style={texto.txt}>
      {txt}
    </Text>
  );
}

const texto = StyleSheet.create({
  txt: {
    color: "#ffff",
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "center",
    textDecorationLine: "underline",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    letterSpacing: 2,
    lineHeight: 60,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    padding: 10,
    borderRadius: 8,
    margin: 5,
    fontFamily: "garamond",
  },
});