import { useState, useRef, useEffect } from "react";
import { useRouter, useFocusEffect } from "expo-router";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Animated,
} from "react-native";
import { Asset } from "expo-asset"; // Import Asset for preloading
import { useCallback } from "react";
import AnimationSplashScreen from "../components/AnimatedSplashScreen";
import styles from "../styles/indexStyles";

export default function Index() {
  const [isSplashVisible, setIsSplashVisible] = useState(true);
  const [isAnimationDelayed, setIsAnimationDelayed] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false); // Image preloading state
  const router = useRouter();

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const translateXAnim = useRef(new Animated.Value(-100)).current;

  useEffect(() => {
    // Preload the background image properly
    const loadAssets = async () => {
      await Asset.loadAsync([require("../assets/images/backgoundpre.jpg")]);
      setIsImageLoaded(true);
    };

    loadAssets().catch((error) =>
      console.error("Failed to preload image", error)
    );
  }, []);

  useFocusEffect(
    useCallback(() => {
      if (isAnimationDelayed) {
        fadeAnim.setValue(0);
        translateXAnim.setValue(-100);

        Animated.parallel([
          Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
          }),
          Animated.timing(translateXAnim, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
          }),
        ]).start();
      }

      return () => {};
    }, [isAnimationDelayed])
  );

  // Splash screen visibility and animation delay
  if (isSplashVisible || !isImageLoaded) {
    return (
      <AnimationSplashScreen
        onFinish={() => {
          setIsSplashVisible(false);
          setTimeout(() => {
            setIsAnimationDelayed(true);
          }, 500); // Delay animation after splash
        }}
      />
    );
  }

  return (
    <ImageBackground
      source={require("../assets/images/backgoundpre.jpg")}
      style={styles.background}
    >
      <View style={styles.overlay}>
        {isAnimationDelayed && (
          <Animated.View
            style={[
              styles.mainTextContainer,
              {
                opacity: fadeAnim,
                transform: [{ translateX: translateXAnim }],
              },
            ]}
          >
            <Text style={styles.mainTextLine}>The best</Text>
            <Text style={styles.mainTextLine}>app for</Text>
            <Text style={styles.mainTextLine}>your plants</Text>
          </Animated.View>
        )}

        <TouchableOpacity
          style={styles.signInButton}
          onPress={() => router.push("./LoginScreen")}
        >
          <Text style={styles.signInButtonText}>Sign in</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("./Registration")}>
          <Text style={styles.createAccountText}>Create an account</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
