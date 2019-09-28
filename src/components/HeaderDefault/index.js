import React, { Component } from 'react'
import { Text, View ,TouchableOpacity} from 'react-native'
import ButtonBase from 'components/ButtonBase'

export class HeaderDefault extends Component {
    render() {
        return (
            <View>
            <ButtonBase onPress={()=>{}} />
                <Text> textInComponent </Text>
            </View>
        )
    }
}

export default HeaderDefault
