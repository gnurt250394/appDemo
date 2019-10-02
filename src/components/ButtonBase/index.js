import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native'
import PropTypes from 'prop-types'
import NavigationServices from 'routes/NavigationServices'
import R from 'res/R'

const prototype = {
    onPress: PropTypes.func,
    styleButton: PropTypes.object,
    value: PropTypes.string,
    styleText: PropTypes.string,
    icon: PropTypes.number
}
class ButtonBase extends Component {
    render() {
        const { onPress, styleButton, value, styleText, icon } = this.props
        return (
            <TouchableOpacity onPress={onPress} style={[styles.button,styleButton]}>
                {value && <Text style={[styles.txt,styleText]}>{value}</Text>}
                {icon && <Image source={icon} style={styles.icon} resizeMode="contain" />}
            </TouchableOpacity>
        )
    }
}
ButtonBase.prototype.props = prototype
export default ButtonBase
const styles = StyleSheet.create({
    icon: {
        width: 22,
        height: 22
    },
    button: {
        height: 40,
        padding:5,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:7,
        margin:4
    },
    txt: {
        fontFamily:R.fonts.BlackItalic,
        fontSize:16,
        color:R.colors.textColor
    }
})