import React from "react";
import RepositoryItem from "./RepositoryItem";
import { FlatList, View, StyleSheet } from "react-native";
import useRepositories from "../hooks/useRepositories";

const ItemSeparator = () => <View style={styles.separator} />;
const RepositoryList = () => {
  const { repositories } = useRepositories();
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];
  return (
    <View>
      <FlatList
        style={styles.flatList}
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => <RepositoryItem item={item} />}
        keyExtractor={(repo) => repo.id}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  separator: {
    height: 5,
  },
  flatList: {
    marginBottom: 100,
  },
});

export default RepositoryList;
