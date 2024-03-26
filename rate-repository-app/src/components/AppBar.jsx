import { View, StyleSheet, ScrollView } from "react-native"
import AppBarTab from "./AppBarTab"
import theme from "../theme"
import { useQuery } from "@apollo/client"
import { GET_USER } from "../graphql/queries"
import { useApolloClient } from "@apollo/client"
import useAuthStorage from "../hooks/useAuthStorage"

const styles = StyleSheet.create({
  container: {
    height: 90,
    backgroundColor: theme.colors.appBarBackground,
  },
  scrollView: {
    alignItems: "center",
  },
  barItem: {
    color: "#ffffff",
    fontSize: 18,
    padding: 30,
  },
})

const AppBar = () => {
  const apolloClient = useApolloClient()
  const authStorage = useAuthStorage()
  const { data } = useQuery(GET_USER)

  const user = (data && data.me) ? data.me : null

  const signOut = async () => {
    await authStorage.removeAccessToken()
    apolloClient.resetStore()
  }

  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.scrollView}>
        <AppBarTab style={styles.barItem} name={"Repositories"} linkTo="/" />
        {user && (
          <AppBarTab
            style={styles.barItem}
            name={"Sign out"}
            linkTo="/"
            handlePress={signOut}
          />
        )}
        {!user && (
          <AppBarTab style={styles.barItem} name={"Sign in"} linkTo="/sign" />
        )}
      </ScrollView>
    </View>
  )
}

export default AppBar
