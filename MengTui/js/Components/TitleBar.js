"use strict";

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
   Text,
   View,
   Image,
   StatusBar,
   TouchableOpacity,
   StyleSheet,
} from 'react-native'; 

// import Images from '../../res/nav'
import {width, unitWidth, titleHeight, statusBarHeight} from '../Util/AdapterUtil'

export default class TitleBar extends Component {
   static propTypes = {
       title: PropTypes.string.isRequired,
       navigation: PropTypes.object.isRequired,
       hideLeftArrow: PropTypes.bool,
       pressLeft: PropTypes.func,
       pressRight: PropTypes.func,
       left: PropTypes.string,
       backgroundColor: PropTypes.string,
       titleColor: PropTypes.string,
       right: PropTypes.oneOfType([
           PropTypes.string,
           PropTypes.object,
       ]),
       rightImage: Image.propTypes.source,
       LifeImage: Image.propTypes.source,
       statusBarBgColor: PropTypes.string,
       barStyle: PropTypes.string, 
   }

   static defaultProps = { 
       title: "",
       hideLeftArrow: false,
       pressRight: () => {
       },
   }

   back() {
       if (this.props.pressLeft) {
           this.props.pressLeft()
           return
       }
       this.props.navigation.goBack(); 
   }

   render() {
       const {backgroundColor, titleColor} = this.props
       return (
           <View style={[TitleStyle.titleBar, backgroundColor ? {backgroundColor: backgroundColor} : null]}> 
                   <StatusBar
                       backgroundColor={this.props.statusBarBgColor || "transparent"}
                       barStyle={this.props.barStyle || 'light-content'}
                       translucent={true}/> 
                <View style={TitleStyle.statusBar}/>

               <View style={TitleStyle.titleBarContent}>
                   {this.props.hideLeftArrow ? (
                       <View style={TitleStyle.left}/>
                   ) : (
                       <TouchableOpacity activeOpacity={1} onPress={this.back.bind(this)}
                                         style={TitleStyle.left}>
                           <Image style={TitleStyle.titleLeftImage}
                                  source={this.props.LifeImage||require('../../res/nav/arrow_left_white.png')}/>
                           <Text style={TitleStyle.leftText}>{this.props.left}</Text>
                       </TouchableOpacity>
                   )}
                   <View style={TitleStyle.middle}>
                       <Text numberOfLines={1}
                             style={[TitleStyle.middleTitle, titleColor ? {color: titleColor} : null]}>{this.props.title}</Text>
                   </View>
                   {this.renderRight()}
               </View>
           </View>
       );
   }

   renderRight() {
       if (!this.props.right && !this.props.rightImage) {
           return <View style={TitleStyle.right}/>
       }
       return (
           <TouchableOpacity activeOpacity={1} style={TitleStyle.right}
                             onPress={() => {
                                 this.props.pressRight()
                             }}>
               {typeof this.props.right == 'object' ? (this.props.right) : (
                   <Text style={TitleStyle.rightText}>{this.props.right}</Text>
               )}
               {this.props.rightImage ? (
                   <Image style={TitleStyle.rightImage} source={this.props.rightImage}/>
               ) : (null)}
           </TouchableOpacity>
       )
   }
}

const TitleStyle = StyleSheet.create({

   titleBar: {
       width: width,
       height: titleHeight,
       backgroundColor: 'white',
   },
   titleBarContent: {
       flexDirection: 'row',   
       height: titleHeight,
       alignItems: 'center',   
       width: width,
       justifyContent: 'space-between',
       height: titleHeight - statusBarHeight,
   },
   titleBarSearchContent: {
       flexDirection: 'row',   
       height: titleHeight,
       alignItems: 'center',   
       width: width,
       height: titleHeight - statusBarHeight,
   },

   searchLeftIcon: {
       width: unitWidth * 30,
       height: unitWidth * 38,
       resizeMode: 'stretch',
       marginLeft: unitWidth * 24,
       marginRight: unitWidth * 15
   },
   searchLeftText: {
       width:unitWidth*140,
       fontSize: unitWidth * 30,
       color: "#ffffff",
   },

   searchBlock: {
       flexDirection: 'row',
       width: unitWidth * 500,
       height: unitWidth * 60,
       borderRadius: unitWidth * 30,
       backgroundColor: "white", 
       alignItems: 'center',
       paddingLeft: unitWidth * 30,
       paddingRight: unitWidth * 30
   },

   searchIcon: {
       width: unitWidth * 40,
       height: unitWidth * 40,
       resizeMode: 'stretch',
       marginRight: unitWidth * 30
   },

   searchBarInput: {
       width: unitWidth * 350,
       height: unitWidth * 60,
       fontSize: unitWidth * 30,
       backgroundColor: 'transparent',
       alignItems: 'center',
       margin: 0,
       padding: 0
   },


   left: {
       width: unitWidth * 180,
       height: titleHeight,
       flexDirection: 'row',
       justifyContent: 'flex-start',
       alignItems: 'center',
       paddingLeft: unitWidth * 10, 
   },
   middle: {
       width: width - unitWidth * 360,
       height: titleHeight,
       justifyContent: 'center',
       alignItems: 'center',
   },
   middleTitle: {
       fontSize: unitWidth * 30,
       color: "black",
       alignItems: 'center',
       justifyContent: 'center'
   },

   right: {
       width: unitWidth * 180,
       height: titleHeight,
       flexDirection: 'row',
       justifyContent: 'flex-end',
       alignItems: 'center',
       paddingRight: unitWidth * 30, 
   },

   leftText: {
       fontSize: unitWidth * 30,
       color: "white",
       alignItems: 'center',
       justifyContent: 'center'
   },

   rightText: {
       fontSize: unitWidth * 30,
       color: "black",
       alignItems: 'center',
       justifyContent: 'center'
   },
   rightImage: {
       width: unitWidth * 60,
       height: unitWidth * 60,
       resizeMode: 'contain',
       marginLeft: unitWidth * 5
   },

   titleLeftImage: {
       width: unitWidth * 50,
       height: unitWidth * 35,
       marginRight: unitWidth * 5,
       resizeMode: 'contain'
   },

   homeTitleIcon: {
       width: unitWidth * 213,
       height: unitWidth * 52,
       resizeMode: 'stretch'
   },
   titleRightImage: {
       width: unitWidth * 65,
       height: unitWidth * 65,
       resizeMode: 'contain'
   },
statusBar:{
       width: width,
       height: statusBarHeight, 
       backgroundColor:'transparent'
     }
})