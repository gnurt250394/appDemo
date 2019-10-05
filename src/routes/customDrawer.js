import R from "res/R"
import React from 'react'
import { Image, Text, View, StyleSheet, ScrollView, SafeAreaView } from 'react-native'
import { DrawerNavigatorItems, createDrawerNavigator } from 'react-navigation-drawer';
import screenName from "configs/screenName"
const getLabel = (props) => (scene) => {
    return <View style={styles.containerLabel}>
        <Text style={[styles.txtlabel, { color: scene.tintColor }]}>{props.getLabel(scene)}</Text>
    </View>
}

const renderIcon = ({ route, focused, tintColor }) => {
    switch (route.routeName) {
        case screenName.HomeStack:
            return <Image source={R.images.icons.ic_back} style={[styles.icon, { tintColor }]} />
        case screenName.LoginScreen:
            return <Image source={R.images.icons.ic_back} style={[styles.icon, { tintColor }]} />
        case screenName.RegisterScreen:
            return <Image source={R.images.icons.ic_back} style={[styles.icon, { tintColor }]} />
        case screenName.HomeStack:
            return <Image source={R.images.icons.ic_back} style={[styles.icon, { tintColor }]} />
        case screenName.HomeStack:
            return <Image source={R.images.icons.ic_back} style={[styles.icon, { tintColor }]} />
    }
}
export const CustomDrawerContentComponent = props => {


    return (
        <ScrollView>
            <SafeAreaView
                style={styles.container}
            >
                <DrawerNavigatorItems {...props}
                    activeTintColor={R.colors.white}
                    getLabel={getLabel(props)}
                    activeBackgroundColor={R.colors.drawerColor}
                    renderIcon={renderIcon} />
            </SafeAreaView>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    icon: { height: 17, width: 17, },
    txtlabel: {
        fontFamily: R.fonts.Black,
    },
    containerLabel: {
        paddingVertical: 15
    },
})