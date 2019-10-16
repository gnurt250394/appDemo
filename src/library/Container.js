import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground, ScrollView, StatusBar } from 'react-native';
import HeaderDefault from 'components/HeaderDefault';
import PropTypes from 'prop-types';
import {
    Placeholder,
    PlaceholderMedia,
    PlaceholderLine,
    Fade,

} from "rn-placeholder";
import AnimatedLoader from "react-native-animated-loader";
import R from 'res/R';
const prototype = {
    onPressLeft: PropTypes.func,
    iconLeft: PropTypes.number,
    valueLeft: PropTypes.string,
    onPressRight: PropTypes.func,
    valueRight: PropTypes.string,
    iconRight: PropTypes.number,
    scrollView: PropTypes.bool,
    isLoading: PropTypes.bool
}
class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isReady: true,
            isLoading: true
        };
    }
    static getDerivedStateFromProps(props, state) {
        if (props.isLoading !== state.isLoading) {
            return {
                isLoading: props.isLoading
            };
        }
        return null
    }
    componentDidMount = () => {
        this.timeOut = setTimeout(() => {
            this.setState({ isLoading: false })
        }, 10000)
    };

    componentWillUnmount = () => {
        clearTimeout(this.timeOut)
    }
    render() {
        const { onPressLeft, onPressRight, valueRight, iconRight, valueLeft, iconLeft, scrollView, isLoading } = this.props
        const ContainerComponent = scrollView ? ScrollView : View
        return (
            <ImageBackground source={{ uri: 'http://all4desktop.com/data_images/original/4236532-background-images.jpg' }} style={styles.container}>
                <HeaderDefault
                    onPressLeft={onPressLeft}
                    onPressRight={onPressRight}
                    valueRight={valueRight}
                    iconRight={iconRight}
                    valueLeft={valueLeft}
                    iconLeft={iconLeft}
                />
                <StatusBar animated={true} backgroundColor={'#1e82b2'} barStyle="dark-content" />
                <ContainerComponent
                    style={ContainerComponent == ScrollView ? styles.containerComponent : [{ flex: 1 }, styles.containerComponent]}
                    keyboardShouldPersistTaps="handled">
                    <AnimatedLoader
                        visible={isLoading}

                        overlayColor="rgba(255,255,255,0.4)"
                        source={R.animations.loading}
                        animationStyle={styles.lottie}
                        speed={1}
                    />
                    {this.props.children}
                </ContainerComponent>


            </ImageBackground>
        );
    }
}
Container.prototype.props = prototype
export default Container;


const styles = StyleSheet.create({
    containerComponent: {
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        backgroundColor: '#FFF',
        paddingTop: 10,
    },
    container: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingLeft: 10,
    },
    lottie: {
        width: 100,
        height: 100
    }
})