import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { AuthScreen } from './screens/AuthScreen';
import { HomeScreen } from './screens/HomeScreen';
import { SettingsScreen } from './screens/SettingsScreen';
import { MediaScreen } from './screens/MediaScreen';
import { PlayList } from './screens/PlayList';
import { ChoiceEmojiScreen } from './screens/ChoiceEmojiScreen';
import { GenerateListScreen } from './screens/GenerateListScreen';
import { TinderScreen } from './screens/TinderScreen';
import { ChoiceEmojiScreenTwo } from './screens/ChoiceEmojiScreenTwo';
import { ChoiceEmojiScreenThree } from './screens/ChoiceEmojiScreenThree';
import { Test } from './screens/Test'
import React from 'react';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='AuthScreen' component={AuthScreen}></Stack.Screen>
        <Stack.Screen name='HomeScreen' component={HomeScreen}></Stack.Screen>
        <Stack.Screen name='SettingsScreen' component={SettingsScreen}></Stack.Screen>
        <Stack.Screen name='MediaScreen' component={MediaScreen}></Stack.Screen>
        <Stack.Screen name='PlayList' component={PlayList}></Stack.Screen>
        <Stack.Screen name='ChoiceEmojiScreen' component={ChoiceEmojiScreen}></Stack.Screen>
        <Stack.Screen name='GenerateListScreen' component={GenerateListScreen}></Stack.Screen>
        <Stack.Screen name='TinderScreen' component={TinderScreen}></Stack.Screen>
        <Stack.Screen name='ChoiceEmojiScreenTwo' component={ChoiceEmojiScreenTwo}></Stack.Screen>
        <Stack.Screen name='ChoiceEmojiScreenThree' component={ChoiceEmojiScreenThree}></Stack.Screen>
	  <Stack.Screen name='Test' component={Test}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>

  );
}
