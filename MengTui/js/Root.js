import {createAppContainer,createStackNavigator,StackViewTransitionConfigs} from 'react-navigation';

import Tabbar from './Tabbar/Tabbar'
import Login from './Login/Login'
import Chat from './News/Chat'

// 数组中的路由，可以自定义动画效果，这里我只改了登录
const IOS_MODAL_ROUTES = ['login'];

const dynamicModalTransition = (transitionProps, prevTransitionProps) => {
  const isModal = IOS_MODAL_ROUTES.some(
    screenName =>
      screenName === transitionProps.scene.route.routeName ||
      (prevTransitionProps && screenName === prevTransitionProps.scene.route.routeName)
  )
  return StackViewTransitionConfigs.defaultTransitionConfig(
    transitionProps,
    prevTransitionProps,
    isModal
  );
};

const navigator = createStackNavigator({
    tabbar:{
        screen:Tabbar,
        navigationOptions: {
        	header: null, 
    	}
    },
    login:{
    	screen: Login,
    	navigationOptions: {
        	header: null, 
    	}
    },
    chat:{
      screen:Chat,
      navigationOptions: {
          header: null, 
      }
    }
},{
	initialRouteName: 'tabbar', 
  transitionConfig: dynamicModalTransition
});

export default createAppContainer(navigator);