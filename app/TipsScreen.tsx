import React, { useRef } from "react";
import { View, Text, Animated, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import Icon from "react-native-vector-icons/MaterialIcons";
import styles from "../styles/tipScreenStyles";

export default function TipsScreen() {
  const router = useRouter();
  const scrollY = useRef(new Animated.Value(0)).current;

  const imageScale = scrollY.interpolate({
    inputRange: [0, 300],
    outputRange: [1, 1.5], // Zoom-in effect
    extrapolate: "clamp",
  });

  return (
    <View style={styles.container}>
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
      >
        {/* Top Section with Zoom-In Image */}
        <View style={styles.topSection}>
          <Animated.Image
            source={{
              uri: "https://images.unsplash.com/photo-1492496913980-501348b61469?q=80&w=2070&auto=format&fit=crop",
            }}
            style={[styles.topImage, { transform: [{ scale: imageScale }] }]}
          />

          {/* Curve Overlay */}
          <View style={styles.curve} />
          <Text style={styles.tipsText}>Tips</Text>
        </View>

        {/* Tips Content */}
        <View style={styles.content}>
          <Text style={styles.title}>Plant Care Tips</Text>

          <Text style={styles.tipTitle}>🌞 Light Requirements</Text>
          <Text style={styles.description}>
            Place your plants where they get enough sunlight, but avoid direct
            exposure for too long.
          </Text>

          <Text style={styles.tipTitle}>💧 Watering</Text>
          <Text style={styles.description}>
            Water your plants only when the soil is dry. Overwatering can lead
            to root rot.
          </Text>

          <Text style={styles.tipTitle}>🌱 Soil and Fertilizer</Text>
          <Text style={styles.description}>
            Use nutrient-rich soil and fertilize once a month for healthy
            growth.
          </Text>

          <Text style={styles.tipTitle}>🌿 Pruning and Maintenance</Text>
          <Text style={styles.description}>
            Trim dead or yellowing leaves regularly to keep your plants healthy.
          </Text>

          <Text style={styles.tipTitle}>🌡️ Temperature Control</Text>
          <Text style={styles.description}>
            Keep your plants in environments with consistent temperatures and
            avoid extreme fluctuations.
          </Text>
        </View>

        {/* Go Back Button */}
        <TouchableOpacity
          style={styles.goBackButton}
          onPress={() => router.back()}
        >
          <Icon name="arrow-back" size={24} color="#fff" />
          <Text style={styles.goBackText}>Go Back</Text>
        </TouchableOpacity>
      </Animated.ScrollView>
    </View>
  );
}
