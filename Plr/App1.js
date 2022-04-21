import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import Header from './Header.js';
import Albumart from './Albumart.js';
import TrackDet from './TrackDet.js';
class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header message="Playing from Charts"/>
        <Albumart url="http://36.media.tumblr.com/14e9a12cd4dca7a3c3c4fe178b607d27/tumblr_nlott6SmIh1ta3rfmo1_1280.jpg"/>
        <TrackDet title="Stressed Out"
          artist="Twenty One Pilots"/>
      </View>
    );
  }
}
export default App;

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'rgb(4,4,4)',
  },
}