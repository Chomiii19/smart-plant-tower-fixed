import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import Icon from "react-native-vector-icons/MaterialIcons";
import styles from "../styles/aboutScreenStyles";

export default function AboutScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Top Section with Image and Curved White Bottom */}
        <View style={styles.topSection}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1483794344563-d27a8d18014e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }}
            style={styles.topImage}
          />
          <View style={styles.curve} />
          <Text style={styles.aboutText}>About</Text>
        </View>

        {/* About Content */}
        <View style={styles.content}>
          <Text style={styles.title}>Welcome to Our App</Text>
          <Text style={styles.paragraph}>
            Our app helps you manage and care for your plants with ease. You can
            monitor their status, receive tips, and track their growth journey.
            Stay connected with your green buddies!
          </Text>

          <Text style={styles.title}>Features</Text>
          <Text style={styles.paragraph}>
            🌿 Real-time plant status monitoring{"\n"}
            🌿 Care tips and reminders{"\n"}
            🌿 Add and manage multiple plants{"\n"}
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
      </ScrollView>
    </View>
  );
}
