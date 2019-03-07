"use strict"

import {Dimensions, StatusBar, Platform, PixelRatio} from 'react-native'

//UI设计图的宽度
const designWidth = 750
//UI设计图的高度
const designHeight = 1334

//手机屏幕的宽度
export const width = Dimensions.get('window').width;
//手机屏幕的高度
export const height = Dimensions.get('window').height;
//计算手机屏幕宽度对应设计图宽度的单位宽度
export const unitWidth = width / designWidth
//计算手机屏幕高度对应设计图高度的单位高度
export const unitHeight = height / designHeight

export const statusBarHeight = getStatusBarHeight();
export const safeAreaViewHeight = isIphoneXSeries() ? 34 : 0
//标题栏的高度
export const titleHeight = unitWidth * 80 + statusBarHeight;

//字体缩放比例，一般情况下不用考虑。
// 当应用中的字体需要根据手机设置中字体大小改变的话需要用到缩放比例
export const fontscale = PixelRatio.getFontScale()

export const wxAPPID = 'wxbab73739a1ea4394'

export const themeColor = '#f4f4f4'

//iphoneX 序列机型的屏幕高宽
//XSM SCREEN_HEIGHTL = 896.000000,SCREEN_WIDTHL = 414.000000  2.1642512077
//XS  SCREEN_HEIGHTL = 812.000000,SCREEN_WIDTHL = 375.000000  2.1653333333
//XR  SCREEN_HEIGHTL = 896.000000,SCREEN_WIDTHL = 414.000000  2.1642512077
//X   SCREEN_HEIGHTL = 812.000000,SCREEN_WIDTHL = 375.000000  2.1653333333

//目前iPhone X序列手机的适配算法：高宽比先转换为字符串，截取前三位，转换为number类型 再乘以100
// export const isIphoneXSeries = (Platform.OS === 'ios' && (Number(((height/width)+"").substr(0,4)) * 100) === 216);

// export const scale = (Number(((height/width)+"").substr(0,4)) * 100);
/**
 * 判断是否为iphoneX
 * @returns {boolean}
 */
export function isIphoneX() {
    const X_WIDTH = 375;
    const X_HEIGHT = 812;
    return Platform.OS == 'ios' && (height == X_HEIGHT && width == X_WIDTH)
}
/**
 * 判断是否为iphoneX系列
 * @returns {boolean}
 */
export function isIphoneXSeries() {
    return Platform.OS == 'ios' && (Number(((height/width)+"").substr(0,4)) * 100) === 216
}

//状态栏的高度
export function getStatusBarHeight() {
    if (Platform.OS == 'android') return StatusBar.currentHeight;
    if (isIphoneXSeries()) {
        return 44
    }
    return 20
}