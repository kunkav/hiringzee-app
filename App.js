import React from 'react';
import { createAppContainer }  from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { MaterialIcons } from '@expo/vector-icons';


import Home_Activity from './src/screens/Home_Activity';
import Settings_Activity from './src/screens/Settings_Activity';
import Details_Activity from './src/screens/Details_Activity';
import Profile_Activity from './src/screens/Profile_Activity';


  const HomeTab = createStackNavigator(
    {
      Home: Home_Activity ,
      Details: Details_Activity ,
    },
    {
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#0091EA',
        },
        headerTintColor: '#fff',
        title: 'Home Tab',
       
      },
    }
  );

  const SettingsTab = createStackNavigator(
    {
      Settings: Settings_Activity,
      Details: Details_Activity,
      Profile: Profile_Activity
    },
    {
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#0091EA',          
        },
        headerTintColor: '#FFFFFF',
        title: 'Settings Tab'
      }
    }
  );


const MainApp = createBottomTabNavigator(
  {
    Home: HomeTab ,
    Settings: SettingsTab ,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === 'Home') {
          return (
            <MaterialIcons name="work" size={30}/>
          );
        } else {
          return (
            <MaterialIcons name="person" size={30} />
          );
        }
      },
    }),
    tabBarOptions: {
      activeTintColor: '#FF6F00',
      inactiveTintColor: '#263238',
    },
  }
);


export default createAppContainer(MainApp);
