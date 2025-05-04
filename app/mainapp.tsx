import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  Animated,
  Dimensions,
} from "react-native";
import { useRouter } from "expo-router";
import Icon from "react-native-vector-icons/MaterialIcons";
import GiftSection from "./GiftSection";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import styles from "../styles/mainappStyles";

const { width } = Dimensions.get("window");
const ITEM_WIDTH = width * 0.7; // Width of the main card (center)
const SPACING = 10; // Space between cards
export default function MainApp() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("home");
  const scrollY = useRef(new Animated.Value(0)).current;
  const scrollX = useRef(new Animated.Value(0)).current;
  const scrollXRef = useRef(0);
  const scrollRef = useRef<ScrollView | null>(null);

  const headerBackgroundColor = scrollY.interpolate({
    inputRange: [0, 150], // Transition point
    outputRange: ["#ffffff", "#8bc34a"], // From white to yellow-green
    extrapolate: "clamp",
  });
  const sensorData = [
    {
      id: 1,
      name: "Moisture",
      value: "45%",
      icon: "opacity",
      color: "#4CAF50",
    },
    {
      id: 2,
      name: "pH Level",
      value: "6.8",
      icon: "science",
      color: "#2196F3",
    },
    {
      id: 3,
      name: "Temperature",
      value: "24°C",
      icon: "thermostat",
      color: "#FF9800",
    },
  ];

  const infiniteData = [...sensorData];

  useEffect(() => {
    const listener = scrollX.addListener(({ value }) => {
      scrollXRef.current = value; // Store the current value in the ref
    });

    // Cleanup listener when component unmounts
    return () => {
      scrollX.removeListener(listener);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const nextOffset = scrollXRef.current + ITEM_WIDTH + SPACING; // Use the ref value

        // Check if it reaches the end, reset to the beginning seamlessly
        if (nextOffset >= infiniteData.length * (ITEM_WIDTH + SPACING)) {
          scrollRef.current?.scrollTo({ x: 0, animated: false });
        } else {
          scrollRef.current?.scrollTo({ x: nextOffset, animated: true });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [infiniteData]); // Make sure to update this effect if infiniteData changes

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    { useNativeDriver: false }
  );
  const MainApp = () => {
    return (
      <View style={styles.container}>
        <GiftSection />
      </View>
    );
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.container}>
        <Animated.View
          style={[styles.header, { backgroundColor: headerBackgroundColor }]}
        >
          <View style={styles.topRow}>
            <TouchableOpacity
              style={styles.profileRow}
              onPress={() => console.log("Profile tapped")}
            >
              <Image
                source={{
                  uri: "https://scontent.fmnl30-1.fna.fbcdn.net/v/t39.30808-6/482033249_4013790165567606_6860011654686317204_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEyRcMi5P00b_9d9evb1Lzqg084hacdsIeDTziFpx2wh808yEV54NVpSmIfpwtgRu-PxST5-pS9iEASCtkkqB-g&_nc_ohc=NAuaUxrg-cQQ7kNvwGwc1JU&_nc_oc=AdnJvTtcl-5-A1EAN1cODEyK0fXjkkJ9tJVWbF3LP6J-8BQYIcw3B_5XjU0SRA_6S_E&_nc_zt=23&_nc_ht=scontent.fmnl30-1.fna&_nc_gid=IA1A4J2YiA3N5Ds-_3C6Ng&oh=00_AfFL3k2KA9UsNPajmyLYOq2_mkgye_p8q-mRThkaRlE-Zg&oe=681C9D7B",
                }}
                style={styles.profilePic}
              />
              <Text style={styles.welcomeText}>Welcome, Jorrik</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => console.log("Notifications tapped")}
              style={styles.iconContainer}
            >
              <Icon name="notifications" size={28} color="#757575" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => console.log("Filter tapped")}
            style={styles.filterIcon}
          >
            <View style={styles.filterBackground}>
              <Icon name="filter-list" size={28} color="#757575" />
            </View>
          </TouchableOpacity>

          <View style={styles.searchRow}>
            <View style={styles.searchBarContainer}>
              <Icon
                name="search"
                size={24}
                color="#aaa"
                style={styles.searchIcon}
              />
              <TextInput
                style={styles.searchBar}
                placeholder="Type name here..."
                placeholderTextColor="#aaa"
              />
            </View>
          </View>
        </Animated.View>

        {/* Green Gift Section */}
        <View style={styles.giftSection}>
          <Image
            source={{
              uri: "https://www.pngarts.com/files/10/Flower-Pot-Transparent-Background-PNG.png",
            }}
            style={styles.giftImage}
          />
          <View style={styles.giftTextContainer}>
            <Text style={styles.giftTitle}>
              Give a gift that grows and thrives.
            </Text>
            <TouchableOpacity style={styles.giftButton}>
              <Text style={styles.giftButtonText}>Add plants</Text>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView
          style={styles.content}
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
        >
          <GiftSection />

          {/* All My Plants Section */}
          <Text style={styles.sectionTitle}>All My Plants</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {[
              {
                id: 1,
                name: "Aloe Vera",
                img: "https://miro.medium.com/v2/resize:fit:1400/0*A_U0cNmqW_QkdatI",
              },
              {
                id: 2,
                name: "Snake Plant",
                img: "https://images.unsplash.com/photo-1509069575671-3df40ce5307c?q=80&w=2070&auto=format&fit=crop",
              },
              {
                id: 3,
                name: "Cactus",
                img: "https://images.unsplash.com/photo-1533038590840-1cde6e668a91?q=80&w=1974&auto=format&fit=crop",
              },
              {
                id: 4,
                name: "Peace Lily",
                img: "https://images.unsplash.com/photo-1586817100452-0b6defc0d2b5?q=80&w=1974&auto=format&fit=crop",
              },
            ].map((plant) => (
              <TouchableOpacity key={plant.id} style={styles.plantCard}>
                <View style={styles.imageContainer}>
                  <Image
                    source={{ uri: plant.img }}
                    style={styles.plantImage}
                  />
                </View>
                {/* Plant Info */}
                <View style={styles.plantInfo}>
                  <Text style={styles.plantName}>{plant.name}</Text>
                  <TouchableOpacity
                    onPress={() =>
                      console.log(`Next arrow clicked for ${plant.name}`)
                    }
                    style={styles.arrowButton}
                  >
                    <Icon name="arrow-forward-ios" size={16} color="#9ACD32" />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Learn More Section */}
          <Text style={styles.sectionTitle}>Learn More</Text>
          <ScrollView
            style={styles.learnMoreContainer}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            <TouchableOpacity
              style={styles.largeWidget}
              onPress={() => router.push("/AboutScreen")}
            >
              <Icon name="info" size={60} color="#689F38" />
              <Text style={styles.largeWidgetTitle}>About</Text>
              <Text style={styles.largeWidgetText}>
                Learn about plant care, watering schedules, and more.
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.largeWidget}
              onPress={() => router.push("/TipsScreen")}
            >
              <Icon name="lightbulb" size={60} color="#FFB300" />
              <Text style={styles.largeWidgetTitle}>Tips</Text>
              <Text style={styles.largeWidgetText}>
                Get helpful tips on plant maintenance and growth.
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </ScrollView>

        {/* Floating Bottom Navigation Bar */}
        <View style={styles.navBarContainer}>
          <View style={styles.navBar}>
            {["home", "search", "spa", "local-florist", "settings"].map(
              (icon, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.navItem,
                    activeTab === icon ? styles.activeNavItem : null,
                  ]}
                  onPress={() => setActiveTab(icon)}
                >
                  <View
                    style={[
                      styles.navCircle,
                      activeTab === icon ? styles.activeNavCircle : null,
                    ]}
                  >
                    <Icon
                      name={icon}
                      size={28}
                      color={activeTab === icon ? "#ffffff" : "#757575"}
                    />
                  </View>
                </TouchableOpacity>
              )
            )}
          </View>
        </View>
      </View>
    </GestureHandlerRootView>
  );
}
