import { StyleSheet, View } from "react-native"
import { Route, Routes, Navigate } from "react-router-native"

import RepositoryList from "./RepositoryList/Index"
import AppBar from "./AppBar"
import theme from "../theme"
import SignIn from "./SignIn/Index"
import Repository from "./Repository"
import NewReview from "./NewReview.jsx/Index"
import SignUp from "./SignUp/Index"
import Reviews from "./Reviews"

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.mainBackground,
    flexGrow: 1,
    flexShrink: 1,
  },
})

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/sign" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/review" element={<NewReview />} />
        <Route path="/myReviews" element={<Reviews />} />
        <Route path="/:id" element={<Repository />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  )
}

export default Main
