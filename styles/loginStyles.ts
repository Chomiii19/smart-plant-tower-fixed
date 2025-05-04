import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    flexGrow: 1,
  },
  background: {
    height: 210,
    justifyContent: "flex-end",
  },
  wave: {
    position: "relative",
    top: 10,
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
    zIndex: 10,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    opacity: 0.8,
    borderRadius: 50,
    padding: 8,
  },
  content: {
    padding: 20,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#1b5e20",
    marginBottom: 5,
  },
  loginPromptText: {
    fontSize: 16,
    color: "#555",
    marginBottom: 20,
  },
  errorText: {
    color: "#ff3b30",
    fontSize: 14,
    marginBottom: 10,
    fontWeight: "bold",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f1f1f1",
    borderRadius: 10,
    padding: 12,
    width: "100%",
    marginBottom: 15,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  optionsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
  },
  rememberMeCircle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#b0b0b0",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
  },
  rememberMeCircleActive: {
    borderColor: "#1b5e20",
    backgroundColor: "#1b5e20",
  },
  checkIcon: {
    alignSelf: "center",
  },
  rememberMeText: {
    fontSize: 12,
    color: "#555",
    marginLeft: -110,
  },
  forgotPasswordText: {
    fontSize: 12,
    color: "#6c757d",
    textDecorationLine: "underline",
  },
  loginButton: {
    backgroundColor: "#1b5e20",
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
    width: "80%",
    alignSelf: "center",
    marginBottom: 80,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default styles;
