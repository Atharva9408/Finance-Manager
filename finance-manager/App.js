import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import StackNavigator from './components/StackNavigator';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
     <StackNavigator/>
    </NavigationContainer>
  );
}


