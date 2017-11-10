
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import * as Animatable from 'react-native-animatable'

const AnimationExample = () => {
  return (
      <Animatable.View
        style={styles.wrapper}
        animation="fadeInUp"
        duration={2000}
        delay={500}
      >
        <Image style={styles.image} source={require('./images/cat.png')}></Image>
      </Animatable.View>
  )
}

export default AnimationExample

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    left: 0,
    top: 100,
  },
  image: {
    width: 500,
    height: 300,
  },
});
