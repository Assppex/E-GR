import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { View, Text, StyleSheet, Button, ImageBackground, TouchableOpacity, Switch, Linking } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Avatar } from "react-native-elements";



var playlists= [
	{category: "Максимум позитива", link: "https://music.yandex.ru/users/music-blog/playlists/2562"},
	{category: "Весело", link: "https://music.yandex.ru/users/ya.playlist/playlists/1262"},
	{category: "Легкая улыбка", link: "https://music.yandex.ru/users/music-blog/playlists/1551"},
	{category: "Депрессия ", link: "https://music.yandex.ru/users/music.partners/playlists/1896"},
	{category: "Уныние", link: "https://music.yandex.ru/users/music.partners/playlists/1716"},
	{category: "Легкий негатив", link: "https://music.yandex.ru/users/that-feeling/playlists/1005"},
	{category: "Вечеринка", link: "https://music.yandex.ru/users/music-blog/playlists/1382"},
	{category: "Ехать на машинке", link: "https://music.yandex.ru/users/music-blog-israel/playlists/1007"},
	{category: "Потрясти головой", link: "https://music.yandex.ru/users/music.partners/playlists/1188"},
	{category: "Витя АК", link: "https://music.yandex.ru/users/yamusic-bestsongs/playlists/168661"},
	{category: "Кальянный рэп", link: "https://music.yandex.ru/users/rubikovaanastasia/playlists/1002"},
	{category: "Реп улиц", link: "https://music.yandex.ru/users/ya.musicgenre/playlists/1084"},
	{category: "Шум деревьев", link: "https://music.yandex.ru/users/ya.musicgenre/playlists/1084"},
	{category: "Морской бриз", link: "https://music.yandex.ru/users/music-blog/playlists/2467"},
	{category: "У камина", link: "https://music.yandex.ru/users/vanillakidsmusic/playlists/1000"},
	{category: "Lofi", link: "https://music.yandex.ru/users/TheChilledCow/playlists/1000"},
	{category: "Нью-Эдж", link: "https://music.yandex.ru/users/ya.playlist/playlists/1280"},
	{category: "Блюз", link: "https://music.yandex.ru/users/music-blog/playlists/1891"},
	{category: "Буря внутри", link: "https://music.yandex.ru/users/music-blog/playlists/1891"},
	{category: "Мотивация ", link: "https://music.yandex.ru/users/music.partners/playlists/1056"},
	{category: "Металл", link: "https://music.yandex.ru/users/music-blog/playlists/2063"},
	{category: "Французский вайб", link: "https://music.yandex.ru/users/music-blog/playlists/1663"},
	{category: "Романтичная Италия", link: "https://music.yandex.ru/users/music-blog/playlists/2582"},
	{category: "Сваты", link: "https://music.yandex.ru/users/ya.musicgenre/playlists/1090"},
	{category: "Песни родительской молодости", link: "https://music.yandex.ru/users/music-blog/playlists/1209"},
	{category: "Под это флексил дед", link: "https://music.yandex.ru/users/spichusgames/playlists/1001"},
	{category: "Никто этого не помнит ", link: "https://music.yandex.ru/users/music.partners/playlists/1798"},
	{category: "Эмбиент", link: "https://music.yandex.ru/users/mcDebugger/playlists/1116"},
	{category: "Пост-панк", link: "https://music.yandex.ru/users/afishadaily/playlists/1001"},
	{category: "Вичуха", link: "https://music.yandex.ru/users/Nancypantyfancy74/playlists/1050"}
];




export const Test = ({ route, navigation }) => {
	var emojis = route.params.emojis;
	var link;

	for (var it of playlists) {
		if (it.category == emojis.result) {
			link = it.link;
		}
	}

	console.log(link);

    return (
        <ImageBackground source={require('../images/vibe.gif')} style={styles.lineargradient}>
			<View style={styles.text}>
				<Text style={{ fontSize: 50, fontWeight: 'bold' }}> Ваш плейлист {'\n'} {emojis.result} </Text>
			</View>
            <View style={styles.button}>
                <ImageBackground source={require('../images/emblem.png')} style={styles.toubchble}>
                    <TouchableOpacity onPress={() => Linking.openURL(link)}>
                        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Пойти нахуй</Text>
                    </TouchableOpacity>
                </ImageBackground>
                <ImageBackground source={require('../images/emblem.png')} style={styles.toubchble}>
                    <TouchableOpacity onPress={() => navigation.navigate("HomeScreen", {emojis: emojis})}>
                        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Главный экран блэт</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
		</ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center"
    },
    button: {
        flex: 1,
        alignItems: 'center',
    },
    toubchble: {
        borderRadius: 40,
        alignContent: 'center',
        paddingHorizontal: 40,
        paddingVertical: 9,
        overflow: 'hidden'
    },
    lineargradient: {
        flex: 1
    },
    text: {
        margin: 10,
        fontSize: 30,
        alignContent: 'center'
    },

})

const styleEmblem = StyleSheet.create({
    emblem: {
        flex: 3,
        alignItems: "center",
        justifyContent: 'center'
    }
})
