//MainNavigator
import React, {Component} from 'react';
import {Text, View,Image} from 'react-native';
import {createStackNavigator,createBottomTabNavigator,createAppContainer} from 'react-navigation';

import HomeScreen from '../Home/Home'; 
import NewsScreen from '../News/News'; 
import CoinCenterScreen from '../CoinCenter/CoinCenter'; 
import ShopCarScreen from '../ShopCar/ShopCar'; 
import MineScreen from '../Mine/Mine'; 

const MainStack = createBottomTabNavigator({
    home:{
        screen:HomeScreen,
        navigationOptions:{
            tabBarLabel: "首页",
            tabBarIcon:({focused})=>{
                if(focused){
                  return(
                    <Image source={require('../../res/tab/home_s.png')} style={{
                      width:25,height:25
                    }}></Image>
                  )
                }else{
                  return(
                    <Image source={require('../../res/tab/home.png')} style={{
                      width:25,height:25
                    }}></Image>
                  )
                }
              }
        }
    },
    news:{
        screen:NewsScreen,
        navigationOptions:{
            tabBarLabel: "消息",
            tabBarIcon:({focused})=>{
                if(focused){
                  return(
                    <Image source={require('../../res/tab/chat_s.png')} style={{
                      width:25,height:25
                    }}></Image>
                  )
                }else{
                  return(
                    <Image source={require('../../res/tab/chat.png')} style={{
                      width:25,height:25
                    }}></Image>
                  )
                }
              }
        }
    },
    coincenter:{
        screen:CoinCenterScreen,
        navigationOptions:{
            tabBarLabel: "推币中心",
            tabBarIcon:({focused})=>{
                if(focused){
                  return(
                    <Image source={require('../../res/tab/makeCoin_s.png')} style={{
                      width:25,height:25
                    }}></Image>
                  )
                }else{
                  return(
                    <Image source={require('../../res/tab/makeCoin.png')} style={{
                      width:25,height:25
                    }}></Image>
                  )
                }
              }
        }
    },
    shopcar:{
        screen:ShopCarScreen,
        navigationOptions:{
            tabBarLabel: "购物车",
            tabBarIcon:({focused})=>{
                if(focused){
                  return(
                    <Image source={require('../../res/tab/shopCart_s.png')} style={{
                      width:25,height:25
                    }}></Image>
                  )
                }else{
                  return(
                    <Image source={require('../../res/tab/shopCart.png')} style={{
                      width:25,height:25
                    }}></Image>
                  )
                }
              }
        }
    },
    mine:{
        screen:MineScreen,
        navigationOptions:{
            tabBarLabel: "我的",
            tabBarIcon:({focused})=>{
                if(focused){
                  return(
                    <Image source={require('../../res/tab/person_s.png')} style={{
                      width:25,height:25
                    }}></Image>
                  )
                }else{
                  return(
                    <Image source={require('../../res/tab/person.png')} style={{
                      width:25,height:25
                    }}></Image>
                  )
                }
              }
        }
    }
    
},
{   
    tabBarOptions: {
        //当前选中的tab bar的文本颜色和图标颜色
        activeTintColor: '#E99896',
        //当前未选中的tab bar的文本颜色和图标颜色
        inactiveTintColor: '#ADADAE',
        //是否显示tab bar的图标，默认是false
        showIcon: true,
        //showLabel - 是否显示tab bar的文本，默认是true
        showLabel: true,
        //是否将文本转换为大小，默认是true
        upperCaseLabel: false,
        //material design中的波纹颜色(仅支持Android >= 5.0)
        pressColor: '#788493',
        //按下tab bar时的不透明度(仅支持iOS和Android < 5.0).
        pressOpacity: 0.8,
        //tab bar的样式
        style: {
            backgroundColor: '#fff',
            paddingBottom: 1,
            borderTopWidth: 0.2,
            paddingTop:1,
            borderTopColor: '#ccc',
        },
        //tab bar的文本样式
        labelStyle: {
            fontSize: 11,
            margin: 1
        },
        //tab 页指示符的样式 (tab页下面的一条线).
        indicatorStyle: {height: 0},
    },
     //tab bar的位置, 可选值： 'top' or 'bottom'
     tabBarPosition: 'bottom',
     //是否允许滑动切换tab页
     swipeEnabled: true,
     //是否在切换tab页时使用动画
     animationEnabled: false,
     //是否懒加载
     lazy: true,
     //返回按钮是否会导致tab切换到初始tab页？ 如果是，则设置为initialRoute，否则为none。 缺省为initialRoute。
     backBehavior: 'none',
    
}
);

export default createAppContainer(MainStack);
