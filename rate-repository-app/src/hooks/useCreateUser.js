import { useMutation } from "@apollo/client"
import { CREATE_USER } from "../graphql/mutations"

const useCreateUser = () => {
    const [mutate] = useMutation(CREATE_USER)

    const createUser = async (user) => {
        await mutate({variables: { user }})
    }

    return [createUser]

}

export default useCreateUser