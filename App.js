import React from "react";
import Main from "./src/components/Main";
import { View, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NativeRouter } from "react-router-native";
import { ApolloProvider } from "@apollo/client";
import createApolloClient from "./src/utils/apolloClient";
const apolloClient = createApolloClient();

const App = () => {
  return (
    <NativeRouter>
      <ApolloProvider client={apolloClient}>
        <View style={styles.container}>
          <Main />
          <StatusBar style="light" />
        </View>
      </ApolloProvider>
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
