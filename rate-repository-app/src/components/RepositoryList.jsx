import { FlatList, View, StyleSheet } from "react-native"
import RepositoryItem from "./RepositoryItem/Index"
import useRepositories from "../hooks/useRepositories"
import Text from "./Text"

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
})

const ItemSeparator = () => <View style={styles.separator} />

const RepositoryList = () => {
  const { repositories, loading } = useRepositories()

  if (loading) return <View><Text>loading...</Text></View>

  // Get the nodes from the edges array
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : []

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <RepositoryItem repository={item} />}
    />
  )
}

export default RepositoryList
