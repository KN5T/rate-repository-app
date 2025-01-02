import { Pressable, StyleSheet, View } from "react-native"
import RepositoryStatistics from "./RepositoryStatistics"
import RepositoryInfo from "./RepositoryInfo"
import Text from "../Text";
import theme from "../../theme"
import * as Linking from 'expo-linking';

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    display: "flex",
  },
  textField: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#bababa",
    borderRadius: 5,
    height: 50,
    paddingLeft: 20,
  },
  button: {
    backgroundColor: theme.colors.primary,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 0,
    marginRight: 15,
    marginLeft: 15,
    marginBottom: 15,
  },
})

const RepositoryItem = ({ repository, showRepositoryButton }) => {

  return (
    <View testID="repositoryItem" style={styles.container}>
      <RepositoryInfo repository={repository} />
      <RepositoryStatistics stats={repository} />
      {showRepositoryButton &&
        <Pressable style={[styles.textField, styles.button]} onPress={() => Linking.openURL(repository.url)}>
          <Text color="textSecondary" fontSize="subheading" fontWeight="bold">
            Open in GitHub
          </Text>
        </Pressable>
      }
    </View>
  )
}

export default RepositoryItem
