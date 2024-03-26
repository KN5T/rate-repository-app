import { Pressable, StyleSheet, TextInput, View } from "react-native"
import Text from "./Text"
import { useFormik } from "formik"
import theme from "../theme"
import * as yup from "yup"
import useSignIn from "../hooks/useSignIn"
import { useNavigate } from "react-router-dom"

const styles = StyleSheet.create({
  container: {
    height: 220,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: "white",
    justifyContent: "space-evenly",
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
  },
  placeholderColor: "#bfbdbd",
  errorBorder: {
    borderColor: theme.colors.error,
  },
  errorText: {
    color: theme.colors.error,
  },
})

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
})

const SignIn = () => {
  const [signIn] = useSignIn()
  const navigate = useNavigate()

  const initialValues = {
    username: "",
    password: "",
  }

  const onSubmit = async (values) => {
    const { username, password } = values

    try {
      const { data } = await signIn({ username, password })
      console.log("data", data)
      navigate("/")
    } catch (e) {
      console.log(e)
    }
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  })

  return (
    <View style={styles.container}>
      <TextInput
        name="username"
        placeholderTextColor={styles.placeholderColor}
        style={[
          styles.textField,
          formik.errors.username &&
            formik.touched.username &&
            styles.errorBorder,
        ]}
        placeholder="Username"
        onChangeText={formik.handleChange("username")}
        value={formik.values.username}
      />
      {formik.touched.username && formik.errors.username && (
        <Text style={styles.errorText}>{formik.errors.username}</Text>
      )}
      <TextInput
        name="password"
        secureTextEntry
        placeholderTextColor={styles.placeholderColor}
        style={[
          styles.textField,
          formik.errors.password &&
            formik.touched.password &&
            styles.errorBorder,
        ]}
        placeholder="Password"
        onChangeText={formik.handleChange("password")}
        value={formik.values.password}
      />
      {formik.touched.password && formik.errors.password && (
        <Text style={styles.errorText}>{formik.errors.password}</Text>
      )}
      <Pressable
        style={[styles.textField, styles.button]}
        onPress={formik.handleSubmit}
      >
        <Text color="textSecondary" fontSize="subheading" fontWeight="bold">
          Sign in
        </Text>
      </Pressable>
    </View>
  )
}

export default SignIn
