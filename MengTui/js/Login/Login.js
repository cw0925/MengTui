/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,TouchableOpacity,Alert} from 'react-native';

import * as AdapterUtil from '../Util/AdapterUtil'
import ImageButton from '../Components/ImageButton'
import *as wechat from 'react-native-wechat'

export default class Login extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={()=>this.closeClick()}>
          <Image style={styles.close} source={require('../../res/login/shutdown.png')} />
        </TouchableOpacity>

        <Text style={styles.loginStyle}>选择登录方式</Text>

        <View style={styles.wxlogin}>
          <ImageButton 
            setBackgroundColor = '#5ABF38'
            buttonName = '微信登录'
            setWidth = {AdapterUtil.width}
            setHeight = {50}
            image = {require('../../res/login/weixin.png')}
            block = {()=>this.wxLoginClick()}
          />
        </View>

        <Text style={styles.agreement}>查看萌推用户协议</Text>

      </View>
    );
  }
  componentDidMount (){
    wechat.registerApp(AdapterUtil.wxAPPID);
  }
  closeClick(){
    this.props.navigation.goBack();
  }
  wxLoginClick(){
   let scope = 'snsapi_userinfo';
      let state = 'wechat_sdk_demo';
      //判断微信是否安装
      wechat.isWXAppInstalled().then((isInstalled) => {
      if (isInstalled) {
        //发送授权请求
        wechat.sendAuthRequest(scope, state)
          .then(responseCode => {
            //返回code码，通过code获取access_token
            this.getAccessToken(responseCode.code);
          })
          .catch(err => {
            Alert.alert('登录授权发生错误：', err.message, [
              {text: '确定'}
            ]);
          })
      } else {
        Platform.OS == 'ios' ?
          Alert.alert('没有安装微信', '是否安装微信？', [
            {text: '取消'},
            {text: '确定', onPress: () => this.installWechat()}
          ]) :
          Alert.alert('没有安装微信', '请先安装微信客户端在进行登录', [
            {text: '确定'}
          ])
      }
    })
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  close: {
    marginTop:AdapterUtil.statusBarHeight,
    marginLeft:20
  },
  loginStyle:{
    width:AdapterUtil.width,
    height:36,
    fontSize:16,
    marginTop:150,
    textAlign:'center',
    alignItems:'center',
    justifyContent:'center',
    textAlignVertical:'center',
    ...Platform.select({
            ios:{
                lineHeight:36,
            },
            android:{
            }
      }),
  },
  wxlogin:{
    width:AdapterUtil.width,
    marginTop:40,
    alignItems:'center',
    justifyContent:'center',
  },
  agreement:{
    width:AdapterUtil.width,
    height:36,
    fontSize:16,
    marginTop:AdapterUtil.height-AdapterUtil.statusBarHeight-340-AdapterUtil.safeAreaViewHeight,
    color:'#a2a2a2',
    textAlign:'center',
    alignItems:'center',
    justifyContent:'center',
    textAlignVertical:'center',
    ...Platform.select({
            ios:{
                lineHeight:36,
            },
            android:{
            }
      }),
  },
});
