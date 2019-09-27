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
import RootView from './src/RootView'
Sentry.init({
  dsn: 'https://a12ca466e88843da82d0c48da3116a77@sentry.io/1763978'
})

const App = () => {
  return (
    <Provider store={store}>
      <RootView>

      </RootView>
    </Provider>
  )
}


export default App
