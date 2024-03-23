import { Pressable } from "react-native"
import Text from "./Text"
import { Link } from "react-router-native"

const AppBarTab = ({ name, style, linkTo, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <Link to={linkTo}>
        <Text style={style}>{name}</Text>
      </Link>
    </Pressable>
  )
}

export default AppBarTab
