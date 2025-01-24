import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './pages/Home';
import EmailLogin from './pages/EmailLogin';
import NumberLogin from './pages/NumberLogin';
import SignUp from './pages/SignUp';
import Dashboard from './pages/dashboard/Dashboard'

const Stack = createStackNavigator();

export default function Index() {
  return (
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                headerShown: false, // Hides the top navigation bar for all screens
            }}
        >
      
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="EmailLogin" component={EmailLogin} />
        <Stack.Screen name="NumberLogin" component={NumberLogin} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name='Dashbaord' component={Dashboard} />
      </Stack.Navigator>
    
  );
}
