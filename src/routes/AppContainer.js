import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import React from 'react'
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { Transition } from 'react-native-reanimated';
import screenName from 'configs/screenName'
import AuthenStack from './AuthenStack'
import HomeStack from './HomeStack'
import SplashScreen from 'screens/SplashScreen';
import DrawerStack from './DrawerStack';

const appNavigator = createAnimatedSwitchNavigator({
  [screenName.HomeStack]: { screen: DrawerStack },
  [screenName.SplashScreen]: { screen: SplashScreen },
  [screenName.AuthenStack]: { screen: AuthenStack },
}, {
  transition: (
    <Transition.Together>
      <Transition.Out
        type="scale"
        durationMs={400}
        interpolation="easeIn"
      />
      <Transition.In type="fade" durationMs={500} />
    </Transition.Together>
  )
})

export default createAppContainer(appNavigator)