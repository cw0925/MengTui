/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import Root from './js/Root'
import Tabbar from './js/Tabbar/Tabbar'

export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Root/>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
});
