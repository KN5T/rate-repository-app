import { StyleSheet, View } from "react-native"
import Statistic from "./Statistic"

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 15,
    marginTop: 10,
  },
})

const RepositoryStatistics = ({ stats }) => {
  return (
    <View style={styles.container}>
      <Statistic name={"Stars"} number={stats.stargazersCount} />
      <Statistic name={"Forks"} number={stats.forksCount} />
      <Statistic name={"Reviews"} number={stats.reviewCount} />
      <Statistic name={"Rating"} number={stats.ratingAverage} />
    </View>
  )
}

export default RepositoryStatistics
