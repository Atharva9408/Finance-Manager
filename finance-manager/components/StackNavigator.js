import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import EMICalculator from '../screens/EMICalculator';
import GSTCalculator from '../screens/GSTCalculator';
import ExpenseCalculator from '../screens/ExpenseCalculator';
import HomeScreen from '../screens/HomeScreen';
import CurrencyConverter from '../screens/CurrencyConverter';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Home Screen" component={HomeScreen} />
      <Stack.Screen name="EMI Calculator" component={EMICalculator} />
      <Stack.Screen name="Expense Calculator" component={ExpenseCalculator} />
      <Stack.Screen name="GST Calculator" component={GSTCalculator} />
      <Stack.Screen name="Currency Converter" component={CurrencyConverter} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
