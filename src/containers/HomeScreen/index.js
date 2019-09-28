import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Home from 'components/HomeComponent/Home';

export class HomeScreen extends Component {
    render() {
        return (
            <View style={{flex:1,
            backgroundColor:'red'}}>
                <Text> textInComponent dsafas</Text>
            </View>
        )
    }
}

export default HomeScreen
