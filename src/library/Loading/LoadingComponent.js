import React, { Component } from 'react';
import { View, Text ,ActivityIndicator} from 'react-native';
import LoadingManager from '../Loading/LoadingManager'
function showLoading() {
    LoadingManager.getDefault()
}
class LoadingComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View >
                <Text> LoadingComponent </Text>
            </View>
        );
    }
}

export default LoadingComponent;
