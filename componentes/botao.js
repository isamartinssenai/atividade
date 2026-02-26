import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function Botao({ txtBtn, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{txtBtn}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "75%",
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: "#c9b6a5",
    borderRadius: 40,
    backgroundColor: '#9c8978',
    paddingVertical: 16,
    paddingHorizontal: 24,
    marginTop: 25,
    shadowColor: "#3e2e23",
    shadowOffset: { width: 4, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
    borderTopWidth: 0.8,
    borderTopColor: "#e8d9cc",
    borderBottomWidth: 4,
    borderBottomColor: "#6b5a49",
    borderLeftWidth: 0.5,
    borderLeftColor: "#d4bfb0",
    borderRightWidth: 0.5,
    borderRightColor: "#d4bfb0",
  },
  buttonText: {
    color: "#faf3e8",
    fontSize: 15,
    fontWeight: "500",
    letterSpacing: 2,
    textTransform: "uppercase",
    textShadowOffset: { width: 1.5, height: 1.5 },
    textShadowRadius: 3,
    fontStyle: "italic",
  },
});