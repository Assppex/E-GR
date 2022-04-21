import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import { AppRegistry } from 'react-native';
import App1 from 'C:/Users/Артем/E-GR/Plr/App1.js';
import {name as  appName} from 'C:/Users/Артем/E-GR/app.json'
export const TinderScreen=({})=>{
return(<View style={styles.container}><App1/></View>
);
}
const styles = {
  container: {
    flex: 1,
    backgroundColor: 'rgb(4,4,4)',
  },
}