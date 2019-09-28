import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import screenName from 'configs/screenName'
import AuthenStack from './AuthenStack'
import HomeStack from './HomeStack'

const appNavigator = createSwitchNavigator({
    [screenName.AuthenStack]: { screen: AuthenStack },
    [screenName.HomeStack]:{screen:HomeStack}
})

export default createAppContainer(appNavigator)