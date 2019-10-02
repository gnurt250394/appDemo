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
                { id: 1, name: 'hihi' },
                { id: 2, name: 'hihi' },
                { id: 3, name: 'hihi' },
                { id: 4, name: 'hihi' },
            ],
            end: true,
        }
        this.length = this.state.data.length
        this.data = this.state.data.slice()
        this.color = ["red", "green", "blue", "orange"]
    }
    checkScroll({ layoutMeasurement, contentOffset, contentSize }) {
        console.log('contentSize: ', contentSize);
        console.log('layoutMeasurement: ', layoutMeasurement);
        console.log('contentOffset: ', contentOffset);
        // if (this.state.data.length >= this.length * 3)
        //     this.setState(prevState => ({
        //         data: prevState.data.slice(this.length * 2)
        //     }))

        // if (contentOffset.x <= this.props.offset) {
        //     this.setState(prevState => ({
        //         data: [...prevState.data, ...this.data],
        //     }), () => this.infListRef.scrollToIndex({ index: this.length, animated: false }))
        // }
        // if (layoutMeasurement.width + contentOffset.x >= contentSize.width) {
        //     this.setState(prevState => ({
        //         data: [...prevState.data, ...this.data],
        //         end: false
        //     }))
        // }
        // else {
        //     this.setState({
        //         end: true
        //     })
        // }

        if (parseInt(contentOffset.x + layoutMeasurement.width) == parseInt(contentSize.width)) {

            this.infListRef.scrollToOffset({ offset: 0, animated: false })
        }

    }
    getWrappableData = (data) => {
        return [...data, data[0]];
    }
    _renderItem = ({ item, index }) => {
        console.log(this.color[index])
        return (
            <View key={index} style={{ backgroundColor: this.color[index], flex: 1, width: width }}>
                <Text>{item.name}</Text>
            </View>
        )
    }
    _keyExtractor = (item, index) => `${index}`
    render() {
        return (
            <Container >
                    <Swiper>
                        {this.state.data.map((item, index) => {
                            return (
                                this._renderItem({ item, index })
                            )
                        })}
                    </Swiper>
            </Container>
        )
    }
}

export default HomeScreen
