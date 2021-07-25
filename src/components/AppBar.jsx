import React from "react";
import { Alert, View, StyleSheet, Pressable } from "react-native";
import Constants from "expo-constants";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 20,
    paddingLeft: 10,
    paddingBottom: 10,
    backgroundColor: theme.colors.backgroundDark,
  },
  text: {
    fontSize: theme.fontSizes.bigHeading,
    fontWeight: theme.fontWeights.bold,
    color: theme.colors.textLight,
  },
});

const AppBar = ({ text }) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => Alert.alert("You pressed the text!")}>
        <Text style={styles.text}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default AppBar;
