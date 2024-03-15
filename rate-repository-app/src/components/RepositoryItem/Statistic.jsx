import { View, StyleSheet } from "react-native"
import Text from "../Text"

const styles = StyleSheet.create({
  item: {
    alignItems: "center",
  },
})

const Statistic = ({ name, number }) => {
  const formatNumber = (num) => {
    return num >= 1000 ? (num / 1000).toFixed(1) + "k" : num
  }

  return (
    <View style={styles.item}>
      <Text fontWeight={"bold"}>{formatNumber(number)}</Text>
      <Text>{name}</Text>
    </View>
  )
}

export default Statistic
