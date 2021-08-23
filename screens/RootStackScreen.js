import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SplashScreen from './SplashScreen';
import SingInScreen from './SignInScreen';
import SingUpScreen from './SignUpSceen';

const RootStack = createNativeStackNavigator();

const RootStackScreen = ({navigation}) => {
  <RootStack.Navigator headerMode="none">
    <RootStack.Screen name="SplashScreen" component={SplashScreen} />
    <RootStack.Screen name="SingInScreen" component={SingInScreen} />
    <RootStack.Screen name="SingUpScreen" component={SingUpScreen} />
  </RootStack.Navigator>;
};

export default RootStackScreen;
