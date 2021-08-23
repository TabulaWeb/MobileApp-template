import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FirstScreen from './FirstScreen';
import TwoScreen from './TwoScreen';
import ThreeScreen from './ThreeScreen';
import FourScreen from './FourScreen';

const FirstStack = createNativeStackNavigator();
const TwoStack = createNativeStackNavigator();
const ThreeStack = createNativeStackNavigator();
const FourStack = createNativeStackNavigator();

export const FirstStackScreen = ({navigation}) => (
  <FirstStack.Navigator screenOptions={{fontWeight: 'bold'}}>
    <FirstStack.Screen
      name="FirstScreen"
      component={FirstScreen}
      options={{headerShown: false}}
    />
  </FirstStack.Navigator>
);

export const TwoStackScreen = ({navigation}) => (
  <TwoStack.Navigator screenOptions={{fontWeight: 'bold'}}>
    <TwoStack.Screen
      name="TwoScreen"
      component={TwoScreen}
      options={{headerShown: false}}
    />
  </TwoStack.Navigator>
);

export const ThreeStackScreen = ({navigation}) => (
  <ThreeStack.Navigator screenOptions={{fontWeight: 'bold'}}>
    <ThreeStack.Screen
      name="ThreeScreen"
      component={ThreeScreen}
      options={{headerShown: false}}
    />
  </ThreeStack.Navigator>
);

export const FourStackScreen = ({navigation}) => (
  <FourStack.Navigator screenOptions={{fontWeight: 'bold'}}>
    <FourStack.Screen
      name="FourScreen"
      component={FourScreen}
      options={{headerShown: false}}
    />
  </FourStack.Navigator>
);
