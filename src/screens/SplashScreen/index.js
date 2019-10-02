import React, { Component } from 'react';
import { View, Text } from 'react-native';
import utils from 'configs/utils';
import NavigationServices from 'routes/NavigationServices';
import screenName from 'configs/screenName';

class SplashScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentDidMount = async () => {
        let token = await utils.getItem(utils.KEY.TOKEN)
        if (token) {
            setTimeout(() => {
                NavigationServices.navigate(screenName.HomeStack)
            }, 3000)
        } else {
            setTimeout(() => {
                NavigationServices.navigate(screenName.AuthenStack)
            }, 3000)
        }
    };

    render() {
        return (
            <View>
                <Text> SplashScreen </Text>
            </View>
        );
    }
}

export default SplashScreen;
