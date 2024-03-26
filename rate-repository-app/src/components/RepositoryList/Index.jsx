import { View } from "react-native"
import useRepositories from "../../hooks/useRepositories"
import Text from "../Text"
import RepositoryListContainer from "./RepositoryListContainer"

const RepositoryList = () => {
  const { repositories, loading } = useRepositories()

  if (loading) return <View><Text>loading...</Text></View>

  return (
    <RepositoryListContainer repositories={repositories} />
  )
}

export default RepositoryList
