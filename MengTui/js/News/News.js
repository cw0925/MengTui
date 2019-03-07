/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,FlatList,Image,Alert,TouchableOpacity} from 'react-native';

import TitleBar from '../Components/TitleBar'
import * as AdapterUtil from '../Util/AdapterUtil'

export default class News extends Component<Props> {
  render() {
    const {navigation} = this.props;
    const CITY_NAMES = [{'title':'萌推官方客服'}, {'title':'系统通知'}]
    return (
      <View style={styles.container}>
        <TitleBar title={"聊天"}  hideLeftArrow={true} navigation={navigation}/>

        <FlatList
                    data={CITY_NAMES}
                    renderItem={(data) => this._renderItem(data)} 
                    keyExtractor = {this._extraUniqueKey}
                    ListHeaderComponent={this._header}
                    ItemSeparatorComponent={this._separator}
                />
      </View>
    );
  }
  _extraUniqueKey(item ,index){ 
    return "index"+index+item; 
  }
  _header = () => {
    return <View style={styles.header}>
      <Text>通知被关闭，无法接收消息提醒</Text>
      <View style={styles.right_header}>
        <Text style={styles.text_header}>前往开启+30推币</Text>
        <View style={styles.line_header}></View>
        <Image style={styles.icon_header} source={require('../../res/login/shutdown.png')} />
      </View>
    </View>;
  }
  _separator = () => {
        return <View style={{height:1,backgroundColor:AdapterUtil.themeColor}}/>;
  }
  _itemClick(item,index) {
    const {navigate} = this.props.navigation;
    navigate('chat')
  }
  _renderItem({item,index}){
        return (
          <TouchableOpacity
        activeOpacity={0.5}
        onPress={this._itemClick.bind(this,item,index)}>
            <View style={styles.item}>
                <View style={styles.icon_view}>
                  <Image style={styles.icon} source={require('../../res/news/user.png')} />
                </View>
                <View style={styles.content}>
                  <Text style={styles.content_text}>
                    {item.title}
                  </Text>
                  <Text style={styles.des_text}>
                    菜单
                  </Text>
                </View>
                <View style={styles.date}>
                  <Text style={styles.date_text}>
                    下午1:16
                </Text>
                </View>
            </View>
          </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AdapterUtil.themeColor,
  },
  header:{
    height:50,
    alignItems: 'center',
    flexDirection:'row',
    justifyContent: 'space-around',
  },
  line_header:{
    width:1,
    height:20,
    margin:10,
    backgroundColor:'#cbcbcb'
  },
  right_header:{
    flexDirection:'row',
    alignItems: 'center',
  },
  icon_header:{
    width:20,
    height:20
  },
  text_header:{
    color:'#e28e8b'
  },
  item: {
        backgroundColor: 'white',
        height: 80,
        flexDirection:'row',
    },
    icon_view:{
      marginLeft:10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    icon:{
      width:60,
      height:60,
    },
    content:{
      marginTop:20,
      marginLeft:10
    },
    date:{
      flex:1,
      marginTop:25,
      marginRight:20,
      justifyContent: 'flex-start',
    },
    text: {
        color: 'white',
        fontSize: 20,
    },
    content_text:{
      fontSize: 20,
    },
    des_text:{
      marginTop:10,
      fontSize: 15,
    },
    date_text:{
      textAlign:'right',
    }
});
