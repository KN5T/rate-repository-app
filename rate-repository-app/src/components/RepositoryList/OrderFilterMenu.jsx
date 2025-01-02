import { Pressable, StyleSheet, View } from "react-native"
import Text from "../Text"
import { useState } from "react";
import { Divider, Menu } from "react-native-paper";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const styles = StyleSheet.create({
    menu: {
        position: "relative",
        marginLeft: 20,
        marginRight: 30,
        marginTop: 70,
    },
    menuButton: {
        height: 70,
        justifyContent: "center",
        marginLeft: 30,
        marginRight: 30,
    },
    iconContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
})

const OrderFilterMenu = ({select, setSelect}) => {

    const [visible, setVisible] = useState(false)

    const handlePress = (text) => {
        setVisible(false)
        setSelect(text)
    }

    return (
        <Menu 
        style={styles.menu}     
        visible={visible} 
        onDismiss={() => setVisible(false)} 
        anchor={
        <Pressable style={styles.menuButton} 
            onPress={() => setVisible(true)}>
                <View style={styles.iconContainer}>
                    <Text fontWeight="bold">
                        {select} 
                    </Text>  
                    <Icon style={styles.icon} name="arrow-down-drop-circle-outline" size={20} color="black" />
                </View>
        </Pressable>
      }
    >
        <Menu.Item disabled title="Select an item..." />
        <Divider />
        <Menu.Item onPress={() => handlePress("Latest repositories")} title="Latest repositories" />
        <Divider />
        <Menu.Item onPress={() => handlePress("Highest rated repositories")} title="Highest rated repositories" />
        <Divider />
        <Menu.Item onPress={() => handlePress("Lowest rated repositories")} title="Lowest rated repositories" /> 
    </Menu>
    )
}


export default OrderFilterMenu