import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";
import Icon from "react-native-vector-icons/MaterialIcons";
import Svg, { Path } from "react-native-svg";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../config/firebaseConfig";
import styles from "../styles/loginStyles";

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    if (!email.trim() || !password.trim()) {
      setError("Email and password cannot be empty.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    try {
      setError("");

      // ❌ REMOVE setPersistence — React Native handles persistence automatically

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User logged in:", userCredential.user);

      router.push("/mainapp"); // successful login, redirect
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
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView style={styles.scrollContainer}>
        {/* Background with Wave */}
        <ImageBackground
          source={require("../assets/images/backgoundpre.jpg")}
          style={styles.background}
        >
          {/* Back Button */}
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Icon name="arrow-back" size={24} color="#1b5e20" />
          </TouchableOpacity>

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
        </ImageBackground>

        <View style={styles.content}>
          <Text style={styles.welcomeText}>Welcome back</Text>
          <Text style={styles.loginPromptText}>Log in to your account</Text>

          {/* Error Message */}
          {error ? <Text style={styles.errorText}>{error}</Text> : null}

          {/* Email Input */}
          <View style={styles.inputContainer}>
            <Icon
              name="email"
              size={20}
              color="#b0b0b0"
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#aaa"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
          </View>

          {/* Password Input */}
          <View style={styles.inputContainer}>
            <Icon
              name="lock"
              size={20}
              color="#b0b0b0"
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#aaa"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Icon
                name={showPassword ? "visibility" : "visibility-off"}
                size={20}
                color="#b0b0b0"
              />
            </TouchableOpacity>
          </View>

          {/* Remember Me & Forgot Password */}
          <View style={styles.optionsContainer}>
            <TouchableOpacity
              style={[
                styles.rememberMeCircle,
                rememberMe ? styles.rememberMeCircleActive : null,
              ]}
              onPress={() => setRememberMe(!rememberMe)}
            >
              {rememberMe && (
                <Icon
                  name="check"
                  size={12}
                  color="#fff"
                  style={styles.checkIcon}
                />
              )}
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setRememberMe(!rememberMe)}>
              <Text style={styles.rememberMeText}>Remember me</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => console.log("Forgot password tapped!")}
            >
              <Text style={styles.forgotPasswordText}>Forgot password?</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}
