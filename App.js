import React from "react";
import Main from "./src/components/Main";
import { View, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NativeRouter } from "react-router-native";

const App = () => {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <Main />
        <StatusBar style="light" />
      </View>
    </NativeRouter>
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
