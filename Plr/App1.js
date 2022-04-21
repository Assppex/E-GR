import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import Header from './Header.js';
import Albumart from './Albumart.js';
import TrackDet from './TrackDet.js';
var playlists= [
  {category: "Легкая улбыкае", value: 0}, 
  {category: "Депрессия", value: 0}, 
  {category: "Уныние", value: 0}, 
  {category: "Легкий негатив", value: 0}, 
  {category: "Вечеринка", value: 0}, 
  {category: "Ехать на машинке", value: 0}, 
  {category: "Потрясти головой", value: 0}, 
  {category: "Кальянный рэп", value: 0}, 
  {category: "Витя АК", value: 0},
  {category: "Шум деревьев", value: 0}, 
  {category: "Морской бриз", value: 0}, 
  {category: "У камина", value: 0}, 
  {category: "Lofi", value: 0},
  {category: "Нью-Эдж", value: 0}, 
  {category: "Буря внутри", value: 0}, 
  {category: "Мотивация", value: 0}, 
  {category: "Металл", value: 0},
  {category: "Французский вайб", value: 0},
  {category: "Романтичная Италия", value: 0},
  {category: "Сваты", value: 0},
  {category: "Песни родительской молодости", value: 0},
  {category: "Под это флексил дед", value: 0},
  {category: "Никто этого не помнит", value: 0},
  {category: "Эмбиент", value: 0},
  {category: "Пост-панк", value: 0},
  {category: "Вичуха", value: 0},
]
class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header message="соси жопу тварь ебаная тут мог быть ваш слайдер"/>
        <Albumart url="https://avatars.yandex.net/get-music-content/6201394/4512dd92.a.22216018-1/400x400"/>
        <TrackDet title="Stressed Out" artist="Twenty One Pilots"/>
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