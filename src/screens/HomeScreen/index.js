import React, { Component } from 'react'
import { Text, View, TouchableOpacity, FlatList } from 'react-native'
import Home from 'components/HomeComponent/Home';
import NavigationServices from 'routes/NavigationServices';
import screenName from 'configs/screenName';
import HeaderDefault from 'components/HeaderDefault';
import Container from 'library/Container';
import utils, { width } from 'configs/utils';
import Swiper from 'react-native-swiper'
class HomeScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                { id: 1, name: 'hihi', label: 'green' },
                { id: 2, name: 'hihi', label: 'blue' },
                { id: 3, name: 'hihi', label: 'orange' },
                { id: 4, name: 'hihi', label: 'red' },
            ],
            end: true,
        }
        this.length = this.state.data.length
        this.data = this.state.data.slice()
        this.color = ["red", "green", "blue", "orange"]
    }
    currentIndex = 0
    currentIndex2 = 0
    _renderItem = ({ item, index }) => {

        return (
            <View key={index} style={{ backgroundColor: this.color[index], flex: 1, width: width }}>
                <Text>{item.name}</Text>

            </View>
        )
    }
    _keyExtractor = (item, index) => `${index}`
    onClick = () => {
       NavigationServices.navigate(screenName.RegisterScreen)

    }
    render() {
        return (
            <Container >
                {/* <Swiper
                    style={{ flex: 1 }}
                    showsPagination={false}
                    onIndexChanged={(index) => {
                        console.log('index: ', index);

                        this.currentIndex = index
                    }}
                    ref={ref => this.swiper = ref}
                >

                    {this.state.data.map((item, index) => {
                        return (
                            this._renderItem({ item, index })
                        )
                    })}
                </Swiper> */}
               <TouchableOpacity onPress={this.onClick}>
                   <Text>Click</Text>
               </TouchableOpacity>
                

            </Container>
        )
    }
}

export default HomeScreen
