import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Rain: {
    iconName: "weather-lightning-rainy",
    gradient: ["#000428", "#004e92"],
    subtitle: "Just don't go outside.",
  },
  Atmosphere: {
    iconName: "weather-hazy",
    gradient: ["#4da0b0", "#d39d38"],
    subtitle: "haaaaaaaaazy day",
  },
  Thunderstorm: {
    iconName: "weather-hurricane",
    gradient: ["#2C3E50", "#4CA1AF"],
    subtitle: "it's fucking crazy now!",
  },
  Drizzle: {
    iconName: "weather-rainy",
    gradient: ["#3a7bd5", "#3a6073"],
    subtitle: "rain and rain and rain again!",
  },
  Snow: {
    iconName: "snowflake",
    gradient: ["#E6DADA", "#274046"],
    subtitle: "Hi Olaf! Hi Anna! Do You want to build a snowman?",
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#F2994A", "#F2C94C"],
    subtitle: "I'm burining now!!",
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#ECE9E6", "#FFFFFF"],
    subtitle: "gray....",
  },
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          name={weatherOptions[condition].iconName}
          size={100}
          color="white"
        />

        <Text style={styles.temp}>{temp}℃</Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.title}>{condition}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 36,
    color: "white",
  },
  condition: {
    fontSize: 18,
    color: "white",
  },

  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 44,
    fontWeight: "300",
    marginBottom: 10,
  },
  subtitle: {
    fontWeight: "800",
    color: "white",
    fontSize: 24,
  },
  textContainer: {
    paddingHorizontal: 10,
    alignItems: "flex-start",
  },
});
