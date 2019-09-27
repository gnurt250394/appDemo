import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export class RootView extends Component {
  render () {
    return <View style={styles.container}>{this.props.children}</View>
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
export default RootView
