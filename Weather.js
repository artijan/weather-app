import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Weather({ temp, condition }) {
  return (
    <View style={styles.container}>
      <Text>{temp}</Text>
      <Text>{condition}</Text>
    </View>
  );
}

Weather.PropTypes = {
  temp: PropTypes.number.isRequired,
  conditions: PropTypes.oneOf([
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
});
