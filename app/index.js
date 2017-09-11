import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class PedalParts extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Up and running!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
});
