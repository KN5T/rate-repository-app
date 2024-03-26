import RepositoryItem from "../RepositoryItem/Index"
import { StyleSheet, View, FlatList } from "react-native"

const styles = StyleSheet.create({
    separator: {
      height: 10,
    },
  })
  
const ItemSeparator = () => <View style={styles.separator} />

const RepositoryListContainer = ({repositories}) => {

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

export default RepositoryListContainer
