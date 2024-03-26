import { StyleSheet, View } from "react-native"
import RepositoryStatistics from "./RepositoryStatistics"
import RepositoryInfo from "./RepositoryInfo"

const RepositoryItem = ({ repository }) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "white",
      display: "flex",
    },
  })

  return (
    <View testID="repositoryItem" style={styles.container}>
      <RepositoryInfo repository={repository} />
      <RepositoryStatistics stats={repository} />
    </View>
  )
}

export default RepositoryItem
