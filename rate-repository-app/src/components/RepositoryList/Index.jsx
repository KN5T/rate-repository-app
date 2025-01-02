import { View } from "react-native"
import useRepositories from "../../hooks/useRepositories"
import Text from "../Text"
import RepositoryListContainer from "./RepositoryListContainer"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDebounce } from 'use-debounce';

const RepositoryList = () => {
  const [select, setSelect] = useState("Latest repositories")
  const [searchTerm, setSearchTerm] = useState("")
  const [debouncedSearchTerm] = useDebounce(searchTerm, 500);
  const { repositories, loading, refetch, fetchMore } = useRepositories({ first: 8 })
  const navigate = useNavigate()

  useEffect(() => {
    switch(select) {
      case "Latest repositories":
          refetch({ orderBy: "CREATED_AT", orderDirection: "DESC", searchKeyword: debouncedSearchTerm })
          break
      case "Highest rated repositories":
          refetch({ orderBy: "RATING_AVERAGE", orderDirection: "DESC", searchKeyword: debouncedSearchTerm })
          break
      case "Lowest rated repositories":
          refetch({ orderBy: "RATING_AVERAGE", orderDirection: "ASC", searchKeyword: debouncedSearchTerm })
          break
  }
  }, [select, debouncedSearchTerm])

  if (loading) return <View><Text>loading...</Text></View>

  const handleNavigate = (id) => {
    navigate(`/${id}`)
  }

  const onEndReach = () => {
    fetchMore()
  };

  return (
    <RepositoryListContainer 
      select={select} 
      setSelect={setSelect} 
      searchTerm={searchTerm} 
      setSearchTerm={setSearchTerm} 
      repositories={repositories} 
      handleNavigate={handleNavigate}
      onEndReach={onEndReach}
    />
  )
}

export default RepositoryList
