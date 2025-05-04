import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
import Svg, { Path } from "react-native-svg";
import auth from "../config/firebaseConfig";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import styles from "../styles/registrationStyle";

export default function Registration() {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async () => {
    if (!fullName.trim() || !email.trim() || !password.trim()) {
      setError("Please fill all fields.");
      return;
    }

    try {
      setError("");

      // 🔥 Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // 🔥 Update the user's profile with the full name
      await updateProfile(userCredential.user, {
        displayName: fullName,
      });

      console.log("User registered:", userCredential.user);

      // ✅ After successful registration, navigate to login page
      router.replace("/"); // Replace so they can't go back to registration by back button
    } catch (error) {
      const err = error as { code?: string; message?: string };
      console.error("Login error:", err);
      if (err.code === "auth/user-not-found") {
        setError("No user found with that email.");
      } else if (err.code === "auth/wrong-password") {
        setError("Incorrect password.");
      } else {
        setError("Login failed. Please try again.");
      }
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {/* Top Background with Correct Curve */}
      <View style={styles.backgroundContainer}>
        <ImageBackground
          source={require("../assets/images/backgoundpre.jpg")}
          style={styles.background}
        >
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Icon name="arrow-back" size={24} color="1b5e20" />
          </TouchableOpacity>
        </ImageBackground>

        {/* Correct Curve */}
        {/* Wave SVG */}
        <Svg
          height="100"
          width="100%"
          viewBox="0 0 1440 320"
          style={styles.wave}
        >
          <Path
            fill="#fff"
            d="M0,192L60,176C120,160,240,128,360,133.3C480,139,600,181,720,181.3C840,181,960,139,1080,117.3C1200,96,1320,96,1380,96L1440,96L1440,320L0,320Z"
          />
        </Svg>
      </View>

      <View style={styles.content}>
        <Text style={styles.header}>Register</Text>
        <Text style={styles.loginPromptText}>Create your new account</Text>

        <View style={styles.inputContainer}>
          <Icon name="person" size={20} color="#aaa" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            placeholderTextColor="#aaa"
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon name="email" size={20} color="#aaa" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#aaa"
            keyboardType="email-address"
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon name="lock" size={20} color="#aaa" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#aaa"
            secureTextEntry
          />
        </View>

        <TouchableOpacity
          style={styles.registerButton}
          onPress={handleRegister}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
