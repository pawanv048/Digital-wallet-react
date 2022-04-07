/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import { SignUp } from './Screens';
import Tabs from './navigation/tab';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparant"
  }
  
}

const Stack = createNativeStackNavigator();

const App = () => {
  return (
      <NavigationContainer theme={theme}>
          <Stack.Navigator
              screenOptions={{
                  headerShown: false
              }}
              initialRouteName={'SignUp'}
          >
              <Stack.Screen name="SignUp" component={SignUp} />

              {/* Tabs */}
              <Stack.Screen name="Home" component={Tabs} />

              {/* <Stack.Screen name="Scan" component={Scan} /> */}
          </Stack.Navigator>
      </NavigationContainer>
  )
}
export default App;
