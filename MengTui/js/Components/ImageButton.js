 import React, { Component } from 'react';
 import PropTypes from 'prop-types';
 import {
   Text,
    View,
    TouchableOpacity,
    Image
 } from 'react-native';
class ImageButton extends React.Component{
    static defaultProps = {
      defaultColor:'#f44e14',
      buttonName:'Button',
   }
   static propTypes = {
      setBackgroundColor : PropTypes.string,
      buttonName : PropTypes.string,
      block : PropTypes.func,      
      setWidth : PropTypes.number,
      setHeight : PropTypes.number,
      image : PropTypes.number
    }
    render() {
      return(
        <TouchableOpacity onPress={()=>this.props.block()} >
          <View style={{
          	flexDirection : 'row',
          	justifyContent : 'center',
            alignItems : 'center',
            marginLeft:40,
            marginRight:40,
         	backgroundColor : (this.props.setBackgroundColor) ? this.props.setBackgroundColor : this.props.defaultColor,
            width : (this.props.setWidth!==0) ? this.props.setWidth - 80: 60 ,
            height : (this.props.setHeight!==0) ? this.props.setHeight : 20,}}>
         	
          	<Image style={{width:25,height:25}} source={this.props.image} />
            <Text style={{color:'#FFFFFF',fontSize:16,marginLeft:5}}>{this.props.buttonName}</Text>
          </View>
        </TouchableOpacity>
      );
    }
  }
module.exports = ImageButton;