import React from "react";
import { View, Image, StyleSheet } from "react-native";
import theme from "../theme";
import Text from "./Text";

const makeKText = (number) => {
  if (number > 1000) return (number / 1000).toFixed(1) + "k";
  return number;
};
const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.item}>
      <View style={styles.infoBox}>
        <Image
          style={styles.image}
          source={{
            uri: item.ownerAvatarUrl,
          }}
        />
        <View style={styles.info}>
          <Text style={styles.fullName} fontWeight="bold">
            {item.fullName}
          </Text>
          <Text>{item.description}</Text>
        </View>
      </View>
      <Text style={styles.language}>{item.language}</Text>
      <View style={styles.statsBox}>
        <View style={styles.stats}>
          <Text fontWeight="bold">{makeKText(item.stargazersCount)}</Text>
          <Text>Stars</Text>
        </View>
        <View style={styles.stats}>
          <Text fontWeight="bold">{makeKText(item.forksCount)}</Text>
          <Text>Forks</Text>
        </View>
        <View style={styles.stats}>
          <Text fontWeight="bold">{makeKText(item.reviewCount)}</Text>
          <Text>Reviews</Text>
        </View>
        <View style={styles.stats}>
          <Text fontWeight="bold">{makeKText(item.ratingAverage)}</Text>
          <Text>Rating</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    display: "inline-flex",
    backgroundColor: "#eee",
    padding: 10,
    marginBottom: 8,
    alignItems: "flex-start",
  },
  title: {
    fontSize: 16,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 10,
  },
  infoBox: {
    flexDirection: "row",
    marginBottom: 5,
  },
  info: {
    flexDirection: "column",
    justifyContent: "center",
  },
  fullName: {
    marginBottom: 4,
  },
  language: {
    paddingVertical: 5,
    paddingHorizontal: 7,
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
    display: "inline-block",
    color: "white",
    marginLeft: 60,
    marginBottom: 5,
  },
  statsBox: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignSelf: "stretch",
    marginTop: 10,
  },
  stats: {
    textAlign: "center",
  },
});

export default RepositoryItem;
