import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const ITEM_WIDTH = width * 0.5;
const SPACING = 15;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  heroImage: {
    width: "100%",
    height: 300,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginTop: 20,
  },
  subtitle: {
    fontSize: 18,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
  },
  shadowContainer: {
    width: ITEM_WIDTH,
    marginHorizontal: SPACING / 2,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 5 },
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden", // Prevent overflow
  },
  carouselItemContainer: {
    overflow: "hidden", // Prevent any white space overflow
    borderRadius: 10,
  },
  carouselImage: {
    width: ITEM_WIDTH + 30, // Slightly larger for parallax but no overflow
    height: 250,
    resizeMode: "cover",
  },
  borderContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 10,
  },
  carouselTitle: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default styles;
