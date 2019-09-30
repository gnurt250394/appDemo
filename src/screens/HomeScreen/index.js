import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import Home from 'components/HomeComponent/Home';
import NavigationServices from 'routes/NavigationServices';
import screenName from 'configs/screenName';
import HeaderDefault from 'components/HeaderDefault';  
import Container from 'library/Container';

class HomeScreen extends Component {
    render() {
        return (
            <Container >
                <TouchableOpacity onPress={() => {
                    NavigationServices.navigate(screenName.RegisterScreen)
                }}>
                    <Text>click</Text>
                </TouchableOpacity>
                <Text> textInComponent dsafas</Text>
            </Container>
        )
    }
}

export default HomeScreen
