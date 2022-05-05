import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import App1 from '../Plr/App1.js';
export const TinderScreen = ({ }) => {
  return (<View style={styles.container}><App1 /></View>
  );
}
const styles = {
  container: {
    flex: 1,
    backgroundColor: 'rgb(4,4,4)',
  },
}
