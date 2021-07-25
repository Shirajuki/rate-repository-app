import React from "react";
import Main from "./src/components/Main";
// import Constants from "expo-constants";
import { View, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

const App = () => {
  return (
    <View style={styles.container}>
      <Main />
      <StatusBar style="light" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: Constants.statusBarHeight || 0,
  },
  separator: {
    height: 10,
  },
});

export default App;
