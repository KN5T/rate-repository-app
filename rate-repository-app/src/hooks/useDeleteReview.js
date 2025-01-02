import { useMutation } from "@apollo/client"
import { DELETE_REVIEW } from "../graphql/mutations"
import { GET_USER } from "../graphql/queries"


const useDeleteReview = () => {
    const [mutate] = useMutation(DELETE_REVIEW, {
        refetchQueries: [ { query: GET_USER, variables: { includeReviews: true } } ]
    })

    const deleteReview = (reviewId) => {
        mutate({ variables: { deleteReviewId: reviewId} })
    }

    return [deleteReview]
}

export default useDeleteReview