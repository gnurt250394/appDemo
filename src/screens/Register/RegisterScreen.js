import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import HeaderDefault from 'components/HeaderDefault'
import Container from 'library/Container'
import InputAuthen from 'components/LoginComponent/InputAuthen'
import ButtonBase from 'components/ButtonBase'
import R from 'res/R'
import { requestRegister } from 'configs/apis/requestAuthen'
import { showMessage } from 'react-native-flash-message'
import utils from 'configs/utils'
import status from 'configs/constants'
import NavigationServices from 'routes/NavigationServices'

class RegisterScreen extends Component {
    state = {
        isLoading: false
    }
    onRegister = async () => {
        let fullName = this.inputFullName.getValue()
        let email = this.inputEmail.getValue()
        let password = this.inputPassword.getValue()
        let password2 = this.inputPassword2.getValue()
        let phone = this.inputPhone.getValue()
        if (password != password2) {
            utils.alertDanger('Mật khẩu cũ và mới không khớp')
            return
        }
        this.setState({ isLoading: true })
        let res = await requestRegister(fullName, password, email, phone)
        this.setState({ isLoading: false }) 
        if (res && res.code == status.SUCCESS) {
            utils.alertSuccess('Đăng ký thành công')
            NavigationServices.pop()
        } else {
            utils.alertDanger(res.message)
        }
    }
    render() {
        return (
            <Container isLoading={this.state.isLoading}>
                <InputAuthen placeholder={"Họ và Tên"} ref={ref => this.inputFullName = ref} />
                <InputAuthen placeholder={"Email"} ref={ref => this.inputEmail = ref} keyboardType="email-address" />
                <InputAuthen placeholder={"Số điện thoại"} ref={ref => this.inputPhone = ref} keyboardType="numeric" />
                <InputAuthen placeholder={"Mật khẩu"} ref={ref => this.inputPassword = ref} secureTextEntry={true} />
                <InputAuthen placeholder={"Nhập lại mật khẩu"} ref={ref => this.inputPassword2 = ref} secureTextEntry={true} />
                <ButtonBase value="Đăng ký" onPress={this.onRegister} styleButton={styles.buttonRegister} />
            </Container>
        )
    }
}

export default RegisterScreen


const styles = StyleSheet.create({
    buttonRegister: {
        backgroundColor: R.colors.buttonColor,
        marginTop: 20,
    },
})