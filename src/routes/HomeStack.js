import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import screenName from 'configs/screenName'
import HomeScreen from 'containers/HomeScreen'

const homeStack = createStackNavigator({
    [screenName.HomeScreen]: { screen: HomeScreen }
},{
    headerMode:'none',
})

export default createAppContainer(homeStack)