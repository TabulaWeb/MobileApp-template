import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  FirstStackScreen,
  TwoStackScreen,
  ThreeStackScreen,
  FourStackScreen,
} from './screens/MainNaviation';

import RootStackScreen from './screens/RootStackScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* <RootStackScreen /> */}
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === 'Первый экран') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Второй экран') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Третий экран') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Четвертый экран') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen
          name="Первый экран"
          component={FirstStackScreen}
          options={{tabBarLabel: 'Первый экран'}}
        />
        <Tab.Screen
          name="Второй экран"
          component={TwoStackScreen}
          options={{tabBarLabel: 'Второй экран'}}
        />
        <Tab.Screen
          name="Третий экран"
          component={ThreeStackScreen}
          options={{tabBarLabel: 'Третий экран'}}
        />
        <Tab.Screen
          name="Четвертый экран"
          component={FourStackScreen}
          options={{tabBarLabel: 'Четвертый экран'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
