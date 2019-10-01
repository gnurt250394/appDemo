import AsyncStorage from '@react-native-community/async-storage'
const database = {
  token: ''
}
const KEY = {
  TOKEN: 'TOKEN'
}
async function getItem(key, object) {
  try {
    let params = await AsyncStorage.getItem(key)
    if (object) params = JSON.parse(params)
    return params
  } catch (error) { }
}
function setItem(key, value) {
  try {
    let params = value
    if (typeof value == "object") params = JSON.stringify(value)

    AsyncStorage.setItem(key, params)
  } catch (error) { }
}
function removeItem(key) {
  try {
    AsyncStorage.removeItem(key)
  } catch (error) { }
}

export default {
  getItem,
  setItem,
  removeItem,
  KEY,
  database
}
