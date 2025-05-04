import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const ITEM_WIDTH = width * 0.7; // Width of the main card (center)
const SPACING = 10;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    paddingBottom: 15,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  topRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  profileRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  welcomeText: {
    // marginLeft: 50,
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  iconContainer: {
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
    padding: 8,
  },
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eee",
    borderRadius: 20,
    paddingLeft: 10,
    marginTop: 10,
    marginBottom: 5,
    width: "80%",
  },
  searchIcon: {
    marginRight: 5,
  },
  searchBar: {
    flex: 1,
    paddingVertical: 10,
  },
  filterIcon: {
    position: "absolute",
    top: 78,
    right: 15,
  },
  filterBackground: {
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
    padding: 8,
  },
  content: {
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  sampleText: {
    fontSize: 18,
    marginBottom: 20,
  },
  listItem: {
    fontSize: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  horizontalScroll: {
    marginBottom: 20,
  },
  giftSection: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#8bc34a",
    margin: 15,
    padding: 15,
    borderRadius: 10,
    overflow: "visible",
    zIndex: 1,
  },
  giftImage: {
    width: 180,
    height: 150,
    position: "absolute",
    top: -30,
    left: -15,
    zIndex: 2,
  },
  giftTextContainer: {
    flex: 1,
    marginLeft: 130,
  },
  giftTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  giftButton: {
    marginTop: 10,
    backgroundColor: "#689F38",
    opacity: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
  },
  giftButtonText: {
    color: "#fff",
    fontWeight: "bold",
    opacity: 1,
  },
  senscontainer: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: 50,
  },
  senstitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  sensorCard: {
    width: ITEM_WIDTH,
    height: 200,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: SPACING / 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  sensorTitle: {
    fontSize: 22,
    color: "#FFF",
    fontWeight: "bold",
  },
  sensorValue: {
    fontSize: 18,
    color: "#FFF",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000000",
    marginVertical: 10,
  },
  learnMoreContainer: {
    marginBottom: 100,
  },
  largeWidget: {
    width: 280, // Wider than the plant cards
    height: 180, // Taller for a more prominent look
    marginRight: 20,
    backgroundColor: "#ffffff",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  largeWidgetTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#2E7D32",
    marginVertical: 10,
  },
  largeWidgetText: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
    marginTop: 5,
  },
  plantCard: {
    width: 160,
    height: 220,
    borderRadius: 12,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
    marginRight: 15,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#eee",
  },

  imageContainer: {
    width: "100%",
    height: 130,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#eee",
  },

  plantImage: {
    width: "90%",
    height: "90%",
    resizeMode: "cover",
    borderRadius: 8,
  },

  plantInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 10,
  },

  plantName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },

  arrowButton: {
    width: 32, // Circular size
    height: 32,
    borderRadius: 16, // Makes it a circle
    borderWidth: 2, // Circle border thickness
    borderColor: "#9ACD32", // Yellow-green color
    justifyContent: "center",
    alignItems: "center",
  },

  navBarContainer: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: "transparent",
    elevation: 10,
  },
  navBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: "#fff",
    borderRadius: 30,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  navCircle: {
    backgroundColor: "#f0f0f0",
    borderRadius: 30,
    padding: 10,
  },
  activeNavCircle: {
    backgroundColor: "#8bc34a",
    paddingHorizontal: 20,
  },
});

export default styles;
