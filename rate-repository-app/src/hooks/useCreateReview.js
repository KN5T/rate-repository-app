import { useMutation } from "@apollo/client"
import { CREATE_REVIEW } from "../graphql/mutations"
import { GET_USER } from "../graphql/queries"

const useCreateReview = () => {
    const [mutate] = useMutation(CREATE_REVIEW, {
        refetchQueries: [ { query: GET_USER, variables: { includeReviews: true } } ]
    })

    const createReview = async (review) => {
        const result = await mutate({variables: { review}})

        return result
    }

    return [createReview]
}

export default useCreateReview