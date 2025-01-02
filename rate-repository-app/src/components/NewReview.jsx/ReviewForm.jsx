import { Pressable, StyleSheet, TextInput, View } from "react-native"
import Text from "../Text"
import { useFormik } from "formik"
import theme from "../../theme"
import * as yup from "yup"

const styles = StyleSheet.create({
    container: {
      height: 400,
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
    owner: yup.string().required("Repository owner name is required"),
    name: yup.string().required("Repository name is required"),
    rating: yup.number().required("Rating is required").min(0, "Give value between 0 and 100").max(100, "Give value between 0 and 100"),
    review: yup.string().optional(),
  })

const ReviewForm = ({onSubmit}) => {

    const initialValues = {
        owner: "",
        name: "",
        rating: "",
        review: ""
    }

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
    })

    return (
        <View style={styles.container}>
        <TextInput
            name="owner"
            placeholderTextColor={styles.placeholderColor}
            style={[
            styles.textField,
            formik.errors.owner &&
                formik.touched.owner &&
                styles.errorBorder,
            ]}
            placeholder="Repository owner name"
            onChangeText={formik.handleChange("owner")}
            value={formik.values.owner}
        />
        {formik.touched.owner && formik.errors.owner && (
            <Text style={styles.errorText}>{formik.errors.owner}</Text>
        )}
        <TextInput
            name="name"
            placeholderTextColor={styles.placeholderColor}
            style={[
            styles.textField,
            formik.errors.name &&
                formik.touched.name &&
                styles.errorBorder,
            ]}
            placeholder="Repository name"
            onChangeText={formik.handleChange("name")}
            value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name && (
            <Text style={styles.errorText}>{formik.errors.name}</Text>
        )}
        <TextInput
            name="rating"
            placeholderTextColor={styles.placeholderColor}
            style={[
            styles.textField,
            formik.errors.rating &&
                formik.touched.rating &&
                styles.errorBorder,
            ]}
            placeholder="Rating between 0 and 100"
            onChangeText={formik.handleChange("rating")}
            value={formik.values.rating}
        />
        {formik.touched.rating && formik.errors.rating && (
            <Text style={styles.errorText}>{formik.errors.rating}</Text>
        )}
        <TextInput
            name="review"
            multiline
            placeholderTextColor={styles.placeholderColor}
            style={[
                styles.textField,
            ]}
            placeholder="Review"
            onChangeText={formik.handleChange("review")}
            value={formik.values.review}
        />
        <Pressable
            style={[styles.textField, styles.button]}
            onPress={formik.handleSubmit}
        >
            <Text color="textSecondary" fontSize="subheading" fontWeight="bold">
                Create a review
            </Text>
        </Pressable>
        </View>
    )
}

export default ReviewForm