/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity} from 'react-native';

export default class Mine extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={()=>this.loginClick()}> 
          <Text style={styles.welcome}>登陆!</Text>
        </TouchableOpacity>
      </View>
    );
  }
  loginClick(){
    const {navigate} = this.props.navigation;
    navigate('login')
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome:{

  }
});
