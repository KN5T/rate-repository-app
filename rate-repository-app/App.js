import { NativeRouter } from "react-router-native"
import { ApolloProvider } from "@apollo/client"
import AuthStorage from "./src/utils/authStorage"

import Main from "./src/components/Main"
import createApolloClient from "./src/utils/apolloClient"
import AuthStorageContext from "./src/contexts/AuthStorageContext"
import { PaperProvider } from "react-native-paper"

const authStorage = new AuthStorage()
const apolloClient = createApolloClient(authStorage)

const App = () => {
  
  return (
    <NativeRouter>
      <ApolloProvider client={apolloClient}>
        <AuthStorageContext.Provider value={authStorage}>
          <PaperProvider>
            <Main />
          </PaperProvider>
        </AuthStorageContext.Provider>
      </ApolloProvider>
    </NativeRouter>
  )
}

export default App





