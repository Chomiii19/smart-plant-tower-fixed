import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  mainTextContainer: {
    position: "absolute",
    top: 70,
    left: 20,
  },
  mainTextLine: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#fff",
    lineHeight: 40,
    marginBottom: 10,
  },
  signInButton: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    padding: 15,
    borderRadius: 30,
    width: "80%",
    alignItems: "center",
    marginBottom: 20,
  },
  signInButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  createAccountText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default styles;
