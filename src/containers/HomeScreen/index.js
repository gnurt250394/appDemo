import React, { Component } from 'react'
import { Text, View,TouchableOpacity } from 'react-native'
import Home from 'components/HomeComponent/Home';
import NavigationServices from 'routes/NavigationServices';
import screenName from 'configs/screenName';

class HomeScreen extends Component {
    render() {
        return (
            <View style={{flex:1,
            backgroundColor:'red'}}>
            <TouchableOpacity onPress={()=>{
                NavigationServices.navigate(screenName.RegisterScreen)
            }}>
            <Text>click</Text>
            </TouchableOpacity>
                <Text> textInComponent dsafas</Text>
            </View>
        )
    }
}

export default HomeScreen
