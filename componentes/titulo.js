import React from "react";
import { Text, StyleSheet } from "react-native";

export default function Titulo({ tit }) {
  return (
    <Text style={texto.txt}>
      {tit}
    </Text>
  );
}

const texto = StyleSheet.create({
  txt: {
    color: "#2c1810",
    fontSize: 52,
    fontFamily: "Garamond",
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
  },
});