/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Provider } from 'react-redux'
import store from 'middlewares/stores'
import * as Sentry from '@sentry/react-native'
import { Transitioner } from 'react-navigation-stack'
import RootView from './src/RootView'
import NavigationServices from 'routes/NavigationServices'
import AppContainer from 'routes/AppContainer'
import FlashMessage from "react-native-flash-message";
// Sentry.init({
//   dsn: 'https://a12ca466e88843da82d0c48da3116a77@sentry.io/1763978'
// })

const App = (props) => {
  return (
    <Provider store={store}>
      <RootView>
       
        <AppContainer
          uriPrefix="/app"
          ref={ref => NavigationServices.setTopNavigator(ref)} />
          <FlashMessage
          position="top" 
          /> 
      </RootView>
    </Provider>
  )
}


export default App
