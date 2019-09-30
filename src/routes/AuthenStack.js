import { createAppContainer } from 'react-navigation'
import { createStackNavigator, createPointerEventsContainer } from 'react-navigation-stack'
import screenName from 'configs/screenName'
import LoginScreen from 'screens/Login/LoginScreen'
const authenStack = createStackNavigator({
    [screenName.LoginScreen]: { screen: LoginScreen }
}, {
    initialRouteName: screenName.loginScreen,
    headerMode: 'none',
})

export default createAppContainer(authenStack)