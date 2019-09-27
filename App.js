/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Provider } from 'react-redux'
import RootView from 'RootView'
import store from 'middlewares/stores'
import * as Sentry from '@sentry/react-native'
Sentry.init({
  dsn: 'https://a12ca466e88843da82d0c48da3116a77@sentry.io/1763978'
})
function crashapp () {
  Sentry.nativeCrash()
  throw new Error('My first Sentry error!')
}
const App = () => {
  crashapp()
  return (
    <Provider store={store}>
      <RootView />
    </Provider>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter
  },
  engine: {
    position: 'absolute',
    right: 0
  },
  body: {
    backgroundColor: Colors.white
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark
  },
  highlight: {
    fontWeight: '700'
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right'
  }
})

export default App
