import react from "react";
import {Text, StyleSheet} from "react-native";



export default function Label({label}){
    return(

<Text style={texto.txt}>
{label}
</Text>


    )
}

const texto = StyleSheet.create({
  txt: {
    color: "#4a3729",
    fontSize: 20,
    alignSelf: "flex-start",
    marginTop: 20,
    marginBottom: 6,
    marginLeft: 20,
    fontWeight: "400",
    fontFamily: "Cochin",
    letterSpacing: 1.8,
    textTransform: "lowercase",
    fontVariant: ["small-caps"],
    backgroundColor: "rgba(250, 240, 230, 0.7)",
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
    borderLeftWidth: 3,
    borderLeftColor: "#b59d84",
    borderRightWidth: 0.3,
    borderRightColor: "#dacfc4",
    shadowColor: "#a38e7a",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
});
