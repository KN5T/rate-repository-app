import { View, FlatList } from "react-native"
import Text from "./Text"
import { useParams } from "react-router-dom"
import RepositoryItem from "./RepositoryItem/Index"
import ReviewItem from "./ReviewItem"
import ItemSeparator from "./ItemSeparator"
import useRepository from "../hooks/useRepository"

const Repository = () => {
    const { id } = useParams()
    const { repository, fetchMore, loading} = useRepository({first: 6, repositoryId: id})

    if (loading) return <View><Text>loading...</Text></View>

    const onEndReach = () => {
      fetchMore()
    }

    const reviews = repository
      ? repository.reviews.edges.map((edge) => edge.node)
      : []

    return (
      <FlatList 
        data={reviews}
        onEndReached={onEndReach}
        onEndReachedThreshold={0}
        renderItem={({item}) => <ReviewItem review={item} />}
        ItemSeparatorComponent={<ItemSeparator />}
        keyExtractor={({id}) => id}
        ListHeaderComponent={() => <View><RepositoryItem repository={repository} showRepositoryButton={true} /><ItemSeparator /></View>}
      />
    )
}

export default Repository