import { Image, StyleSheet, View } from "react-native"
import Text from "../Text"

import theme from "../../theme"

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 15,
  },
  textContainer: {
    flex: 1,
    marginRight: 15,
  },
  text: {
    paddingBottom: 5,
  },
  imageContainer: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 5,
  },
  language: {
    alignSelf: "flex-start",
    backgroundColor: theme.colors.primary,
    padding: 5,
    marginTop: 5,
    color: "white",
    borderRadius: 5,
    fontSize: 16,
  },
})

const RepositoryInfo = ({ repository }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: repository.ownerAvatarUrl }}
        />
      </View>
      <View style={styles.textContainer}>
        <Text fontSize={"subheading"} fontWeight={"bold"} style={styles.text}>
          {repository.fullName}
        </Text>
        <Text style={styles.text}>{repository.description}</Text>
        <Text style={styles.language}>{repository.language}</Text>
      </View>
    </View>
  )
}

export default RepositoryInfo
