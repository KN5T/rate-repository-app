import SignUpForm from "./SignUpForm"
import useSignIn from "../../hooks/useSignIn"
import { useNavigate } from "react-router-native"
import useCreateUser from "../../hooks/useCreateUser"

const SignUp = () => {
    const [createUser] = useCreateUser()
    const [signIn] = useSignIn()
    const navigate = useNavigate()

    const onSubmit = async (values) => {

        try {
            const user = { username: values.username, password: values.password}
            await createUser(user)

            const { data } = await signIn(user)
            console.log("data", data)
            navigate("/")
        } catch(e) {
            console.log(e)
        }
    }

    return (
        <SignUpForm onSubmit={onSubmit}/>
    )
}

export default SignUp