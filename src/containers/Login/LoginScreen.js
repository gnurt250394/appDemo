import React, { Component } from 'react';
import { View, Text ,TouchableOpacity,TextInput} from 'react-native';
import NavigationServices from 'routes/NavigationServices';
import screenName from 'configs/screenName';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  onLogin=()=>{
      console.log(this.props)
      NavigationServices.navigate(screenName.HomeStack)
  }
  render() {
    return (
      <View>
        <TextInput value={'hihi'} />
        <Text style={{color:'blue'}}> LoginScreen </Text>
        <TouchableOpacity onPress={this.onLogin}>
        <Text >click</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default LoginScreen;
