import React from "react";
import {
  Dimensions,
  View,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";
import { Link } from "react-router-native";
import Constants from "expo-constants";
import Text from "./Text";
import theme from "../theme";
import useAuthorizedUser from "../hooks/useAuthorizedUser";
import useAuthStorage from "../hooks/useAuthStorage";
import { useApolloClient } from "@apollo/client";

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
  const { authorizedUser } = useAuthorizedUser();
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const signout = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  };
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link to="/">
          <Text style={styles.text}>Repositories</Text>
        </Link>
        {!authorizedUser ? (
          <Link to="/signin">
            <Text style={styles.text}>Sign in</Text>
          </Link>
        ) : (
          <Pressable onPress={signout}>
            <Text style={styles.text}>Sign out</Text>
          </Pressable>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
