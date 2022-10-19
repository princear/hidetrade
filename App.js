import 'react-native-gesture-handler'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import StackNavigator from './navigation/Navigator';
//import DrawerTabScreens from './navigation/Navigator';


export default function App() {
  return (
     <NavigationContainer>
       {/* <DrawerTabScreens/> */}
      <StackNavigator/>
      
     </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
