import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import ButtonBase from 'components/ButtonBase'
import NavigationServices from 'routes/NavigationServices'
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation'
import R from 'res/R';

const prototype = {
    onPressLeft: PropTypes.func,
    iconLeft: PropTypes.number,
    valueLeft: PropTypes.string,
    onPressRight: PropTypes.func,
    valueRight: PropTypes.string,
    iconRight: PropTypes.number
}
class HeaderDefault extends Component {
    render() {
        const { onPressLeft, onPressRight, navigation, valueRight, iconRight, valueLeft, iconLeft } = this.props
        return (
            <View style={styles.containerHeader}>
                {navigation.isFirstRouteInParent() ?
                    <View />
                    :
                    <ButtonBase onPress={onPressLeft} icon={iconLeft ? iconLeft : R.images.icons.ic_back} value={valueLeft} />
                }
                <Text style={styles.txtNameHeader}>{navigation.state.routeName}</Text>
                {onPressRight ?
                    <ButtonBase value={valueRight} icon={iconRight} onPress={onPressRight} />
                    :
                    <View />
                }

            </View>
        )
    }
}
HeaderDefault.defaultProps = {
    onPressLeft: () => NavigationServices.pop(),
}
HeaderDefault.prototype.props = prototype
export default withNavigation(HeaderDefault)


const styles = StyleSheet.create({
    containerHeader: {
        // backgroundColor: R.colors.defaultColor,
        height: 55,
        alignItems: 'center',
        flexDirection: 'row',
        elevation: 5,
        justifyContent: 'space-between',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 3 }
    },
    txtNameHeader: {
        fontFamily: R.fonts.Bold,
        fontSize: 16,
        flex: 1,
        paddingHorizontal: 15
    },
})
