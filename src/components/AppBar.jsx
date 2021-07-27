import React from "react";
import { Dimensions, View, StyleSheet, ScrollView } from "react-native";
import { Link } from "react-router-native";
import Constants from "expo-constants";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 20,
    paddingLeft: 10,
    paddingBottom: 10,
    backgroundColor: theme.colors.backgroundDark,
    width: Dimensions.get("window").width || 300,
  },
  text: {
    fontSize: theme.fontSizes.bigHeading,
    fontWeight: theme.fontWeights.bold,
    color: theme.colors.textLight,
    paddingRight: 10,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link to="/">
          <Text style={styles.text}>Repositories</Text>
        </Link>
        <Link to="/signin">
          <Text style={styles.text}>Sign in</Text>
        </Link>
      </ScrollView>
    </View>
  );
};

export default AppBar;
