import React from "react";
import { TextInput, StyleSheet } from "react-native";

export default function Input({ placeholder, placeholderTextColor }) {
  return (
    <TextInput 
      style={style.inp} 
      placeholder={placeholder} 
      placeholderTextColor={placeholderTextColor}
    />
  );
}

const style = StyleSheet.create({
  inp: {
    width: "60%",
    height: 40,
    borderWidth: 1,
    borderColor: "#c7b5a2",
    borderRadius: 20,
    backgroundColor: "#faf3e8",
    marginLeft: 20,
    marginTop: 20,
    paddingHorizontal: 24,
    fontSize: 18,
    fontFamily: "Didot",
    color: "#2e1e14",
    shadowColor: "#8e7b68",
    shadowOffset: { width: 3, height: 5 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 4,
    letterSpacing: 1,
    borderTopWidth: 0.3,
    borderTopColor: "#ede3d8",
    borderBottomWidth: 3,
    borderBottomColor: "#a48f7a",
    fontStyle: "italic",
    fontWeight: "300",
    lineHeight: 54,
  },
});