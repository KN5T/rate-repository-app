import { FlatList, View } from "react-native"
import Text from "./Text"
import { useQuery } from "@apollo/client"
import { GET_USER } from "../graphql/queries"
import ReviewItem from "./ReviewItem"
import ItemSeparator from "./ItemSeparator"


const Reviews = () => {
    const { data, loading } = useQuery(GET_USER, {
        variables: { includeReviews: true }
    })

    if(loading) return <View><Text>loading...</Text></View>

    const reviews = data ? data.me.reviews.edges.map(edge => edge.node) : null

    return (
        <FlatList 
            data={reviews}
            renderItem={({item}) => <ReviewItem review={item} showCommenterName={false} />}
            ItemSeparatorComponent={<ItemSeparator />}
            keyExtractor={({id}) => id}
        />
    )
}

export default Reviews