import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Home from 'components/HomeComponent/Home';

export class HomeScreen extends Component {
    render() {
        return (
            <View>
                <Home/>
                <Text> textInComponent </Text>
            </View>
        )
    }
}

export default HomeScreen
