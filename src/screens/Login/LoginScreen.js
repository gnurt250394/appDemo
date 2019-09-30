import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import NavigationServices from 'routes/NavigationServices';
import screenName from 'configs/screenName';
import FlashMessage from 'library/FlashMessage';
import { showMessage } from 'react-native-flash-message';
import HeaderDefault from 'components/HeaderDefault';
import ButtonBase from 'components/ButtonBase';
import InputAuthen from 'components/LoginComponent/InputAuthen';
import R from 'res/R';
import Container from 'library/Container';
class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  onLogin = () => {
    let email = this.inputEmail.getValue()
    let password = this.inputPass.getValue()
    
    showMessage({
      type: 'danger',
      message: 'hello',
      icon: 'danger',
      description: 'hihi',
    })
    NavigationServices.navigate(screenName.HomeStack)
  }
  render() {
    return (
      <Container >
        <InputAuthen placeholder="Email / Số điện thoại" ref={ref => this.inputEmail = ref} />
        <InputAuthen placeholder="Mật khẩu" ref={ref => this.inputPass = ref} />
        <ButtonBase
          onPress={this.onLogin}
          styleButton={{
            backgroundColor: R.colors.buttonColor,
            marginTop: 10,
          }}
          value="Đăng nhập" />
      </Container>
    );
  }
}

export default LoginScreen;
