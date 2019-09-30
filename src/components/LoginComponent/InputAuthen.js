import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet } from 'react-native'
import PropTypes from 'prop-types';
import R from 'res/R';
import { showMessage } from 'react-native-flash-message';
class InputAuthen extends Component {
    state = {
        value: ''
    }

    onChangeText = (value) => {
        this.setState({ value })
    }
    onBlur = () => {
        const { value } = this.state
        const { placeholder } = this.props
        if (!value) {
            showMessage({
                icon: 'danger',
                type: 'danger',
                message: 'Lỗi!',
                description: `${placeholder} không được để trống`
            })
        }
    }
    getValue = () => {
        return this.state.value
    }
    render() {
        const { placeholder, style, ...otherProps } = this.props
        const { value } = this.state
        return (
            <TextInput
                {...otherProps}
                placeholder={placeholder}
                value={value}
                onChangeText={this.onChangeText}
                style={[styles.input, style]}
                onBlur={this.onBlur}
            />
        )
    }
}
InputAuthen.defaultProps = {
    placeholder: 'Enter....',
}
InputAuthen.prototype.props = {
    placeholder: PropTypes.string,
    style: PropTypes.object,
}
export default InputAuthen


const styles = StyleSheet.create({
    input: {
        borderBottomColor: R.colors.black,
        borderBottomWidth: 1,
        paddingLeft: 10,
        marginHorizontal: 10,
    },
})