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
    bottom: -1, // Slight overlap to prevent gap
    width: "100%",
    height: 120, // Slightly larger for a smooth transition
    backgroundColor: "#f5f5f5",
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    zIndex: 1, // Ensure it renders above the image
  },
  tipsText: {
    position: "absolute",
    bottom: 40,
    left: 20,
    fontSize: 32,
    fontWeight: "bold",
    color: "#4caf50",
    zIndex: 2, // Render above the curve
  },
  content: {
    padding: 20,
    marginTop: -60, // Pull content up to avoid a visible gap
    backgroundColor: "#f5f5f5",
    zIndex: 0,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2E7D32",
    marginBottom: 15,
  },
  tipTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#388E3C",
    marginTop: 20,
  },
  description: {
    fontSize: 16,
    color: "#555",
    lineHeight: 24,
    marginBottom: 15,
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
