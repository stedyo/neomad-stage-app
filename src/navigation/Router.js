import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeTabNavigator from './HomeTabNavigator';

// screens
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ExploreScreen from '../screens/ExploreScreen/ExploreScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';

const Stack = createStackNavigator();

const Router = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'HomeTab'}
          component={HomeTabNavigator}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name={'Home'}
          component={HomeScreen}
          options={{
            title: 'Welcome Home',
          }}
        />
        <Stack.Screen
          name={'Explore'}
          component={ExploreScreen}
          options={{
            title: 'Explore',
          }}
        />
        <Stack.Screen
          name={'Profile'}
          component={ProfileScreen}
          options={{
            title: 'Profile',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
