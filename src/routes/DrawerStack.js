import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator, createPointerEventsContainer } from 'react-navigation-stack'
import { DrawerNavigatorItems, createDrawerNavigator } from 'react-navigation-drawer';
import screenName from 'configs/screenName'
import LoginScreen from 'screens/Login/LoginScreen'
import { fromLeft, zoomIn, zoomOut, fadeIn, fadeOut, flipX, flipY, fromBottom, fromRight, fromTop, } from 'react-navigation-transitions';
import RegisterScreen from 'screens/Register/RegisterScreen'
import ForgotPassScreen from 'screens/ForgotPassWord/ForgotPassScreen';
import HomeStack from './HomeStack';
import {  CustomDrawerContentComponent } from './customDrawer';
import R from 'res/R';


const drawerStack = createDrawerNavigator({
    [screenName.HomeStack]: { screen: HomeStack },
    [screenName.RegisterScreen]: { screen: RegisterScreen },
    [screenName.ForgotPasswordScreen]: { screen: ForgotPassScreen },
}, {
    edgeWidth:200,
    lazy:true,
    resetOnBlur:true,
    unmountInactiveRoutes:true,
    contentComponent: (props) => CustomDrawerContentComponent(props)
})

export default createAppContainer(drawerStack)