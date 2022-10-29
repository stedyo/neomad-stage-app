import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, View} from 'react-native';
import {ROUTES, COLORS} from '../constants';
import {Home, People, Lodging, Explore, Account} from '../screens';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
      })}>
      <Tab.Screen
        name={ROUTES.HOME}
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.tabView}>
              <Icon
                name="spinner"
                size={25}
                color={
                  focused ? COLORS.activeTabButton : COLORS.inactiveTabButton
                }
                style={styles.tabIcon}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name={ROUTES.PEOPLE}
        component={People}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.tabView}>
              <Icon
                name="people-arrows"
                size={25}
                color={
                  focused ? COLORS.activeTabButton : COLORS.inactiveTabButton
                }
                style={styles.tabIcon}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.LODGING}
        component={Lodging}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.tabView}>
              <Icon
                name="bed"
                size={25}
                color={
                  focused ? COLORS.activeTabButton : COLORS.inactiveTabButton
                }
                style={styles.tabIcon}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.EXPLORE}
        component={Explore}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.tabView}>
              <Icon
                name="passport"
                size={25}
                color={
                  focused ? COLORS.activeTabButton : COLORS.inactiveTabButton
                }
                style={styles.tabIcon}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.ACCOUNT}
        component={Account}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.tabView}>
              <Icon
                name="user-astronaut"
                size={25}
                color={
                  focused ? COLORS.activeTabButton : COLORS.inactiveTabButton
                }
                style={styles.tabIcon}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    position: 'absolute',
    elevation: 0,
    backgroundColor: '#ffffff',
    borderTopColor: '#bebebe',
    borderTopWidth: 0.5,
    height: 80,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    flex: 1,
    justifyContent: 'space-between',
  },
  tabIconText: {
    marginTop: 3,
    fontSize: 10,
    fontWeight: 'bold',
  },
  tabView: {
    position: 'absolute',
    top: '30%',
  },
});

export default HomeTabNavigator;
