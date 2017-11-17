import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Button from 'react-native-button';
import PinchZoomView from 'react-native-pinch-zoom-view';
import style from './MapScreenStyleSheet'

class MapScreen extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <PinchZoomView style={style.container} >
                <Image
                    style={style.imageStyle}
                    source={require('../../Images/FloorMap.png')}
                    resizeMode="contain"
              />
              <Button
              onPress={() =>
                navigate('Feedback')}
                containerStyle={style.buttonContainer}
                style={style.buttonStyle}>
                Feedback
            </Button>
          </PinchZoomView>
        )
    }
}

export default MapScreen;
