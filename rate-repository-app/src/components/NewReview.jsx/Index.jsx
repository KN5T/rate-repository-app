import ReviewForm from "./ReviewForm"
import { useNavigate } from "react-router-native"
import useCreateReview from "../../hooks/useCreateReview"


const NewReview = () => {
    const navigate = useNavigate()
    const [createReview] = useCreateReview()
    
    const onSubmit = async (values) => {
        try {
            const review = {
                ownerName: values.owner,
                rating: Number(values.rating),
                repositoryName: values.name,
                text: values.review
            }
            
            const {data} =  await createReview(review)
            navigate(`/${data.createReview.repositoryId}`)
        } catch(e) {
            console.log(e)
        }
    }

    return (
        <ReviewForm onSubmit={onSubmit}/>
    )
}


export default NewReview