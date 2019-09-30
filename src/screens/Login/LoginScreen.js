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
class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading:true
    };
  }
  onLogin = () => {
    let email = this.inputEmail.getValue()
    let password = this.inputPass.getValue()
    if (!email) {
      showMessage({
        type: 'danger',
        message: 'hello',
        icon: 'danger',
        description: 'hihi',
      })
      return
    }
    if (!password) {
      showMessage({
        type: 'danger',
        message: 'hello',
        icon: 'danger',
        description: 'hihi',
      })
      return
    }

    NavigationServices.navigate(screenName.HomeStack)   
  }
  componentDidMount = () => {
    setTimeout(()=>{
      this.setState({isLoading:false})

    },3000)
  };
  
  render() {
    return (
      <Container scrollView={true} isLoading={this.state.isLoading}>
        <InputAuthen placeholder="Email / Số điện thoại" ref={ref => this.inputEmail = ref} />
        <InputAuthen placeholder="Mật khẩu" ref={ref => this.inputPass = ref} />
        <ButtonBase
          onPress={this.onLogin}
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