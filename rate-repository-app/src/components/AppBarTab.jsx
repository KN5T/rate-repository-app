import { Pressable } from "react-native"
import Text from "./Text"
import { Link } from "react-router-native"

const AppBarTab = ({ name, style, linkTo, handlePress }) => {
  return (
    <Pressable>
      <Link to={linkTo} onPress={handlePress}>
        <Text style={style}>{name}</Text>
      </Link>
    </Pressable>
  )
}

export default AppBarTab
