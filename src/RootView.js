import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

class RootView extends Component {

  constructor(props) {
    super(props)
    this.SetDefaultText()

  }
  SetDefaultText = () => {
    let components = [Text, TextInput]
    const customProps = {
      style: {
        fontFamily: R.fonts.Light,
        color: R.colors.black
      }
    }
    for (let i = 0; i < components.length; i++) {
      const TextRender = components[i].render;
      const initialDefaultProps = components[i].defaultProps;
      components[i].defaultProps = {
        ...initialDefaultProps,
        ...customProps,
      }
      components[i].render = function render() {
        let oldProps = this.props;

        this.props = { ...this.props, style: [customProps.style, this.props && this.props.style && this.props.style] };
        try {
          return TextRender.apply(this, arguments);
        } finally {
          this.props = oldProps;
        }
      };
    }
  }
  render() {
    return <View style={styles.container}>{this.props.children}</View>
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
export default RootView
