import ItemSeparator from "../ItemSeparator"
import RepositoryItem from "../RepositoryItem/Index"
import { FlatList, Pressable } from "react-native"
import RepositoryListHeader from "./RepositoryListHeader"
import { Component } from "react"

class RepositoryListContainer extends Component {

    renderHeader = () => {
        const { select, setSelect, searchTerm, setSearchTerm} = this.props
        return (
            <RepositoryListHeader 
                select={select} 
                setSelect={setSelect} 
                searchTerm={searchTerm} 
                setSearchTerm={setSearchTerm}
            />
        )
    }    
    render() {
        const { repositories, handleNavigate, onEndReach } = this.props

        const repositoryNodes = repositories
        ? repositories.edges.map((edge) => edge.node)
        : []

        return (
            <FlatList
                stickyHeaderIndices={[0]}
                data={repositoryNodes}
                ListHeaderComponent={this.renderHeader}
                onEndReached={onEndReach}
                ItemSeparatorComponent={<ItemSeparator />}
                renderItem={({ item }) => <Pressable onPress={() => handleNavigate(item.id)}><RepositoryItem repository={item} /></Pressable>}
            />
        )
    }
}

export default RepositoryListContainer
