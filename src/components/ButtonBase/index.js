import React, { Component } from 'react'
import { Text, View, TouchableOpacity ,StyleSheet} from 'react-native'
import PropTypes from 'prop-types'
import NavigationServices from 'routes/NavigationServices'
import R from 'res/R'

const prototype = {
    onPress: PropTypes.func,
    styleButton: PropTypes.object,
    value: PropTypes.string,
    styleText: PropTypes.string
}
class ButtonBase extends Component {
    render() {
        const { onPress, styleButton, value } = this.props
        return (
            <TouchableOpacity onPress={onPress} style={styleButton}>
                <Text style={styleText}>{value}</Text>
            </TouchableOpacity>
        )
    }
}
ButtonBase.defaultProps = {
    onPress: () => NavigationServices.pop(),
    styleButton: styles.button,
    value: PropTypes.string,
    styleText: PropTypes.string
}
ButtonBase.prototype.props = prototype
export default ButtonBase
const styles = StyleSheet.create({
    button:{
        height:40,
        backgroundColor:R.colors.buttonColor,
    },
    txt:{
        color:R.colors.black,
        
    }
})