import React from "react";
import Main from "./src/components/Main";
import { View, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NativeRouter } from "react-router-native";
import { ApolloProvider } from "@apollo/client";
import createApolloClient from "./src/utils/apolloClient";
import Constants from "expo-constants";
import AuthStorage from "./src/utils/authStorage";
import AuthStorageContext from "./src/contexts/AuthStorageContext";

const authStorage = new AuthStorage();
const apolloClient = createApolloClient(authStorage);

const App = () => {
  // console.log(Constants.manifest);
  return (
    <NativeRouter>
      <ApolloProvider client={apolloClient}>
        <AuthStorageContext.Provider value={authStorage}>
          <View style={styles.container}>
            <Main />
            <StatusBar style="light" />
          </View>
        </AuthStorageContext.Provider>
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
