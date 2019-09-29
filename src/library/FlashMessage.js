import { showMessage } from "react-native-flash-message"
const showAlert = (option = { message, description, icon, type }) => {
    showMessage(option)
}
export default {
    showAlert
}