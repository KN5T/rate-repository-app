import { StyleSheet } from "react-native"
import { Searchbar } from "react-native-paper"

const styles = StyleSheet.create({
    searchBar: {
        marginTop: 20,
        marginHorizontal: 15,
        backgroundColor: "white",
        borderRadius: 10,
    }, 
})

const FilterSearch = ({searchTerm, setSearchTerm}) => {

    return (
        <Searchbar
            style={styles.searchBar}
            placeholder="Search"
            value={searchTerm}
            onChangeText={setSearchTerm}
        />
    )
}

export default FilterSearch