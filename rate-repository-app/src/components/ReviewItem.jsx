import { Pressable, StyleSheet, View, Alert } from "react-native"
import Text from "./Text"
import theme from "../theme"
import { format } from "date-fns"
import { useNavigate } from "react-router-dom";
import useDeleteReview from "../hooks/useDeleteReview";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        display: "flex",
    },
    header: {
        display: "flex",
        flexDirection: "row",
        marginLeft: 15,
        marginRight: 15,
        marginTop: 15
    },
    rating: {
        width: 50,
        height: 50,
        borderStyle: "solid",
        borderWidth: 2,
        borderRadius: 25,
        borderColor: theme.colors.primary,
        marginRight: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    info : {
        justifyContent: "center",
    },
    body: {
        marginLeft: 75,
        marginRight: 15,
        marginBottom: 15
    },
    buttons: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginBottom: 15,
    }, 
    button: {
        borderRadius: 5,
        height: 50,
        backgroundColor: theme.colors.primary,
        justifyContent: "center",
        paddingLeft: 20,
        paddingRight: 20
    }
})

const ReviewItem = ({review, showCommenterName = true}) => {
    const [deleteReview] = useDeleteReview()
    const navigate = useNavigate()

    const handleView = (repositoryId) => {
        navigate(`/${repositoryId}`)
    }

    const handleDelete = (reviewId) => {
        Alert.alert('Delete review', 'Are you sure you want to delete this review?', [
            {
              text: 'Cancel',
              style: 'cancel',
            },
            {text: 'OK', onPress: () => {
                deleteReview(reviewId)
            }},
        ]);
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.rating}>
                    <Text color="primary" fontSize="subheading" fontWeight="bold">{review.rating}</Text>
                </View>
                <View style={styles.info}>
                    {showCommenterName && <Text fontWeight="bold">{review.user.username}</Text>}
                    {!showCommenterName && <Text fontWeight="bold">{review.repository.ownerName}/{review.repository.name}</Text>}
                    <Text style={{color: "grey"}}>{format(review.createdAt, "dd.MM.yyyy")}</Text>
                </View>
            </View>
            <View style={styles.body}>
                <Text>{review.text}</Text>
            </View>
            {!showCommenterName &&
                <View style={styles.buttons}>
                    <Pressable style={styles.button} onPress={() => handleView(review.repository.id)}>
                        <Text color="textSecondary" fontSize="subheading" fontWeight="bold">
                            View repository
                        </Text>
                    </Pressable>
                    <Pressable style={[styles.button, {backgroundColor: "red"}]} onPress={() => handleDelete(review.id)}>
                        <Text color="textSecondary" fontSize="subheading" fontWeight="bold">
                            Delete review
                        </Text>
                    </Pressable>
                </View>
            }
        </View>
    )
}

export default ReviewItem