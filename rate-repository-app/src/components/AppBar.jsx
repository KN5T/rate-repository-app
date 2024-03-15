import { View, StyleSheet, ScrollView } from "react-native"
import AppBarTab from "./AppBarTab"
import theme from "../theme"

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    height: 90,
    backgroundColor: theme.colors.appBarBackground,
  },
  scrollView: {
    alignItems: "center"
  },
  barItem: {
    color: "#ffffff",
    fontSize: 18,
    padding: 30
  },
})

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.scrollView}>
        <AppBarTab style={styles.barItem} name={"Repositories"} linkTo="/" />
        <AppBarTab style={styles.barItem} name={"Sign in"} linkTo="/sign" />
      </ScrollView>
    </View>
  )
}

export default AppBar
