import { Pressable, StyleSheet, TextInput, View } from "react-native"
import Text from "../Text"
import { useFormik } from "formik"
import theme from "../../theme"
import * as yup from "yup"

const styles = StyleSheet.create({
    container: {
      height: 330,
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
    username: yup.string().required("Username is required").min(5, "Username min length is 5").max(30, "Username max length is 30"),
    password: yup.string().required("Password is required").min(5, "Password min length is 5").max(50, "Password max length is 50"),
    confirmation: yup.string().required("Password confirmation is required").oneOf([yup.ref("password"), null], "Passwords did not match"),
  })

const SignUpForm = ({onSubmit}) => {

    const initialValues = {
        username: "",
        password: "",
        confirmation: "",
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
        <TextInput
            name="confirmation"
            secureTextEntry
            placeholderTextColor={styles.placeholderColor}
            style={[
            styles.textField,
            formik.errors.confirmation &&
                formik.touched.confirmation &&
                styles.errorBorder,
            ]}
            placeholder="Password confirmation"
            onChangeText={formik.handleChange("confirmation")}
            value={formik.values.confirmation}
        />
        {formik.touched.confirmation && formik.errors.confirmation && (
            <Text style={styles.errorText}>{formik.errors.confirmation}</Text>
        )}
        <Pressable
            style={[styles.textField, styles.button]}
            onPress={formik.handleSubmit}
        >
            <Text color="textSecondary" fontSize="subheading" fontWeight="bold">
            Sign up
            </Text>
        </Pressable>
        </View>
    )
}

export default SignUpForm