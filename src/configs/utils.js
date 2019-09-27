import AsyncStorage from '@react-native-community/async-storage'
const database = {
  token: ''
}
const KEY = {
  TOKEN: ''
}
function getItem (key) {
  try {
    return AsyncStorage.getItem(key)
  } catch (error) {}
}
function setItem (key, value) {
  try {
     AsyncStorage.setItem(key, value)
  } catch (error) {}
}
function removeItem (key) {
  try {
    AsyncStorage.removeItem(key)
  } catch (error) {}
}
function setItemObject (key, value) {
  try {
    let params = JSON.stringify(value)
    AsyncStorage.setItem(key, params)
  } catch (error) {}
}
async function getItemObject (key) {
  try {
    let params = await AsyncStorage.getItem(key)
    return JSON.parse(params)
  } catch (error) {}
}
export default {
  getItem,
  setItem,
  removeItem,
  setItemObject,
  getItemObject,
  KEY,
  database
}
