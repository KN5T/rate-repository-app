import AsyncStorage from "@react-native-async-storage/async-storage"

class AuthStorage {
  constructor(namespace = "auth") {
    this.namespace = namespace
  }

  async getAccessToken() {
    // Get the access token for the storage
    const rawToken = await AsyncStorage.getItem(`${this.namespace}:token`)

    return rawToken ? JSON.parse(rawToken) : null
  }

  async setAccessToken(accessToken) {
    // Add the access token to the storage
    await AsyncStorage.setItem(`${this.namespace}:token`, JSON.stringify(accessToken))
  }

  async removeAccessToken() {
    // Remove the access token from the storage
    await AsyncStorage.removeItem(`${this.namespace}:token`)
    console.log("token", this.getAccessToken())
  }
}

export default AuthStorage