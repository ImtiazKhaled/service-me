import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class Sevicer extends Component {
  render() {
    return (
      <View>
        <Text> Servicer Info </Text>
        <Button title="close Modal" onPress={() => {
          console.log('button Clicked')
          this.props.closeModal()
        }} />
      </View>
    );
  }
}