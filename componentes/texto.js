import React from "react";
import { Text, StyleSheet } from "react-native";

export default function Texto({ txt }) {
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
    fontStyle: "italic",
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
  },
});