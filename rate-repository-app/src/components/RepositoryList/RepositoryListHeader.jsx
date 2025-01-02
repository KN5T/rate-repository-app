import FilterSearch from "./FilterSearch"
import OrderFilterMenu from "./OrderFilterMenu"
import { View } from "react-native"

const RepositoryListHeader = ({select, setSelect, searchTerm, setSearchTerm}) => {
    return (
        <View style={{backgroundColor: "#e1e4e8"}}>
            <FilterSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <OrderFilterMenu select={select} setSelect={setSelect} />
        </View>
    )
}

export default RepositoryListHeader