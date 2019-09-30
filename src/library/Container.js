import React, { Component } from 'react';
import { View, StyleSheet,ImageBackground } from 'react-native';
import HeaderDefault from 'components/HeaderDefault';
import PropTypes from 'prop-types';
const prototype = {
    onPressLeft: PropTypes.func,
    iconLeft: PropTypes.number,
    valueLeft: PropTypes.string,
    onPressRight: PropTypes.func,
    valueRight: PropTypes.string,
    iconRight: PropTypes.number
}
class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { onPressLeft, onPressRight, valueRight, iconRight, valueLeft, iconLeft } = this.props
        return (
            <ImageBackground source={{uri:'http://all4desktop.com/data_images/original/4236532-background-images.jpg'}} style={styles.container}>
                <HeaderDefault
                    onPressLeft={onPressLeft}
                    onPressRight={onPressRight}
                    valueRight={valueRight}
                    iconRight={iconRight}
                    valueLeft={valueLeft}
                    iconLeft={iconLeft}
                />
                {this.props.children}
            </ImageBackground>
        );
    }
}
Container.prototype.props = prototype
export default Container;


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
})