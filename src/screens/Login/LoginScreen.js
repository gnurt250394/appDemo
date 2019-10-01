import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NavigationServices from 'routes/NavigationServices';
import screenName from 'configs/screenName';
import FlashMessage from 'library/FlashMessage';
import { showMessage } from 'react-native-flash-message';
import HeaderDefault from 'components/HeaderDefault';
import ButtonBase from 'components/ButtonBase';
import InputAuthen from 'components/LoginComponent/InputAuthen';
import R from 'res/R';
import Container from 'library/Container';
import { requestLogin } from 'configs/apis/requestAuthen';
import status from 'configs/constants';
import utils from 'configs/utils';
class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }
  onLogin = async () => {
    let email = this.inputEmail.getValue()
    let password = this.inputPass.getValue()

    this.setState({ isLoading: true })
    let res = await requestLogin(email, password)
    this.setState({ isLoading: false })
    if (res && res.code == status.SUCCESS) {
      utils.setItem(utils.KEY.TOKEN,res.token)
      // utils.setItem(utils.KEY.TOKEN,{a:'a'})
      // NavigationServices.navigate(screenName.HomeStack)
    } else {
      showMessage({
        type: 'danger',
        message: 'Lỗi!',
        icon: 'danger',
        description: res.message,
      })
    }
  }
  componentDidMount = () => {
    setTimeout(() => {
      this.setState({ isLoading: false })

    }, 0)
  };
  Logout = async () => {
    let a = await utils.getItem(utils.KEY.TOKEN)
    
  }
  render() {
    return (
      <Container scrollView={true} isLoading={this.state.isLoading}>
        <InputAuthen placeholder="Email / Số điện thoại" ref={ref => this.inputEmail = ref} />
        <InputAuthen placeholder="Mật khẩu" ref={ref => this.inputPass = ref} />
        <ButtonBase
          onPress={this.onLogin}
          styleButton={styles.buttonLogin}
          value="Đăng nhập" />
        <ButtonBase
          onPress={this.Logout}
          styleButton={styles.buttonLogin}
          value="Đăng nhập" />
      </Container>
    );
  }
}

export default LoginScreen;


const styles = StyleSheet.create({
  buttonLogin: {
    backgroundColor: R.colors.buttonColor,
    marginTop: 10,
  },
})