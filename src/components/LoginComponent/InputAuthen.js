import React, { Component } from 'react'
import { Text, View, TextInput } from 'react-native'
import PropTypes from 'prop-types';
class InputAuthen extends Component {
    state = {
        value: ''
    }

    onChangeText = (value) => {
        this.setState({ value })
    }
    render() {
        const { placeholder, style } = this.props
        const { value } = this.state
        return (
            <View>
                <TextInput
                    placeholder={placeholder}
                    value={value}
                    onChangeText={this.onChangeText}
                    style={[{}, style]}
                />
            </View>
        )
    }
}

InputAuthen.prototype.props = {
    placeHolder: PropTypes.string,
    style: PropTypes.object,
    
}
export default InputAuthen
