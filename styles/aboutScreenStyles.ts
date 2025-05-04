import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  topSection: {
    position: "relative",
    height: 300,
  },
  topImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  curve: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 100,
    backgroundColor: "#f5f5f5",
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
  },
  aboutText: {
    position: "absolute",
    bottom: 30,
    left: 20,
    fontSize: 32,
    fontWeight: "bold",
    color: "#4caf50",
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#388E3C",
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    color: "#555",
    lineHeight: 24,
    marginBottom: 20,
  },
  goBackButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4caf50",
    paddingVertical: 12,
    borderRadius: 30,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  goBackText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
});

export default styles;
