/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import utils from 'configs/utils';
import Container from 'library/Container';
import { RNCamera } from 'react-native-camera'
import DetectWithCamera from 'screens/DetectWithCamera';
import CanvasSketch from 'screens/CanvasSketch';
class HomeScreen extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }
    onFacesDetected = (faces) => {
        console.log(faces);
    }


    render() {
        return (
            // <DetectWithCamera />
            <CanvasSketch />
        );
    }
}

const styles = StyleSheet.create({

});

export default HomeScreen