import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { View, Text, StyleSheet, Button, ImageBackground, TouchableOpacity, Switch, Linking, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Avatar } from "react-native-elements";
import i18n from '../languages/i18n';
import { useTranslation } from "react-i18next";








export const Test = ({ route, navigation }) => {

    const { t, i18n } = useTranslation()
    var playlists = [
        { category: "Максимум позитива", link: "https://music.yandex.ru/users/music-blog/playlists/2562", uri: 'https://avatars.yandex.net/get-music-user-playlist/28719/103372440.2562.85437/200x200?1621945585437' },
        { category: "Весело", link: "https://music.yandex.ru/users/ya.playlist/playlists/1262", uri: 'https://avatars.yandex.net/get-music-user-playlist/27701/105590476.1262.75786/200x200?1555679775786' },
        { category: "Легкая улыбка", link: "https://music.yandex.ru/users/music-blog/playlists/1551", uri: 'https://avatars.yandex.net/get-music-user-playlist/70586/103372440.1551.38494ru/200x200?1588086439195' },
        { category: "Депрессия ", link: "https://music.yandex.ru/users/music.partners/playlists/1896", uri: 'https://avatars.yandex.net/get-music-user-playlist/34120/139954184.1896.95772/200x200?1536591295772' },
        { category: "Уныние", link: "https://music.yandex.ru/users/music.partners/playlists/1716", uri: 'https://avatars.yandex.net/get-music-user-playlist/71140/139954184.1716.5412/200x200?1536605105412' },
        { category: "Легкий негатив", link: "https://music.yandex.ru/users/that-feeling/playlists/1005", uri: 'https://avatars.yandex.net/get-music-user-playlist/27701/461852655.1005.52202/200x200?1536591852202' },
        { category: "Вечеринка", link: "https://music.yandex.ru/users/music-blog/playlists/1382", uri: 'https://avatars.yandex.net/get-music-user-playlist/27701/103372440.1382.72105ru/200x200?1622547272695' },
        { category: "Ехать на машинке", link: "https://music.yandex.ru/users/music-blog-israel/playlists/1007", uri: 'https://avatars.yandex.net/get-music-user-playlist/69910/1162242209.1007.19620/200x200?1598959819620' },
        { category: "Потрясти головой", link: "https://music.yandex.ru/users/music.partners/playlists/1188", uri: 'https://avatars.yandex.net/get-music-user-playlist/27701/139954184.1188.72745/200x200?1535643972745' },
        { category: "Витя АК", link: "https://music.yandex.ru/users/yamusic-bestsongs/playlists/168661", uri: 'https://avatars.yandex.net/get-music-content/192707/5c921751.p.168661/200x200' },
        { category: "Кальянный рэп", link: "https://music.yandex.ru/users/rubikovaanastasia/playlists/1002", uri: 'https://avatars.yandex.net/get-music-user-playlist/27701/879390005.1002.91354/200x200?1619776530680' },
        { category: "Реп улиц", link: "https://music.yandex.ru/users/ya.musicgenre/playlists/1084", uri: 'https://avatars.yandex.net/get-music-user-playlist/51766/553947738.1084.4071.ru/200x200?1542023004071' },
        { category: "Шум деревьев", link: "https://music.yandex.ru/users/ya.musicgenre/playlists/1084", uri: '' },
        { category: "Морской бриз", link: "https://music.yandex.ru/users/music-blog/playlists/2467", uri: 'https://avatars.yandex.net/get-music-user-playlist/28719/103372440.2467.23328/200x200?1618598223328' },
        { category: "У камина", link: "https://music.yandex.ru/users/vanillakidsmusic/playlists/1000", uri: 'https://avatars.yandex.net/get-music-user-playlist/59900/469638983.1000.37577/200x200?1619617437577' },
        { category: "Lofi", link: "https://music.yandex.ru/users/TheChilledCow/playlists/1000", uri: 'https://avatars.yandex.net/get-music-user-playlist/71140/1034563997.1000.86597/200x200?1617267585858' },
        { category: "Нью-Эдж", link: "https://music.yandex.ru/users/ya.playlist/playlists/1280", uri: 'https://avatars.yandex.net/get-music-user-playlist/30088/105590476.1280.52635/200x200?1551690452635' },
        { category: "Блюз", link: "https://music.yandex.ru/users/music-blog/playlists/1891", uri: 'https://avatars.yandex.net/get-music-user-playlist/70586/103372440.1891.15964/200x200?1630449315964' },
        { category: "Буря внутри", link: "https://music.yandex.ru/users/music-blog/playlists/1891", uri: '' },
        { category: "Мотивация ", link: "https://music.yandex.ru/users/music.partners/playlists/1056", uri: 'https://avatars.yandex.net/get-music-user-playlist/71140/139954184.1056.78386/200x200?1625829278386' },
        { category: "Металл", link: "https://music.yandex.ru/users/music-blog/playlists/2063", uri: 'https://avatars.yandex.net/get-music-user-playlist/30088/103372440.2063.12520ru/200x200?1638361713449' },
        { category: "Французский вайб", link: 'https://music.yandex.ru/users/music-blog/playlists/1663', uri: "https://avatars.yandex.net/get-music-user-playlist/28719/103372440.1663.3551/200x200?1644249203551" },
        { category: "Романтичная Италия", link: "https://music.yandex.ru/users/music-blog/playlists/2582", uri: 'https://avatars.yandex.net/get-music-user-playlist/71140/103372440.2582.30841/200x200?1624453860504' },
        { category: "Сваты", link: "https://music.yandex.ru/users/ya.musicgenre/playlists/1090", uri: 'https://avatars.yandex.net/get-music-user-playlist/71140/553947738.1090.59822.ru/200x200?1548335259822' },
        { category: "Песни родительской молодости", link: "https://music.yandex.ru/users/music-blog/playlists/1209", uri: 'https://avatars.yandex.net/get-music-user-playlist/51766/103372440.1209.65271ru/200x200?1632305065974' },
        { category: "Под это флексил дед", link: "https://music.yandex.ru/users/spichusgames/playlists/1001", uri: 'https://avatars.yandex.net/get-music-content/41288/5f44ec1f.a.90535-1/100x100' },
        { category: "Никто этого не помнит ", link: "https://music.yandex.ru/users/music.partners/playlists/1798", uri: 'https://avatars.yandex.net/get-music-user-playlist/30088/139954184.1798.89906/200x200?1560421989906' },
        { category: "Эмбиент", link: "https://music.yandex.ru/users/mcDebugger/playlists/1116", uri: 'https://avatars.yandex.net/get-music-content/118603/0157551d.a.4911954-1/100x100' },
        { category: "Пост-панк", link: "https://music.yandex.ru/users/afishadaily/playlists/1001", uri: 'https://avatars.yandex.net/get-music-user-playlist/51766/1512337590.1001.29772/200x200?1637239647460' },
        { category: "Вичуха", link: "https://music.yandex.ru/users/Nancypantyfancy74/playlists/1050", uri: 'https://avatars.yandex.net/get-music-content/5280749/1f445ba2.a.17172073-2/100x100' }
    ];

    var emojis = route.params.emojis;
    emojis.CalculateResult();
    console.log(emojis);
    var link;
    var uri;


    for (var it of playlists) {
        if (it.category == emojis.result) {
            link = it.link;
            uri = it.uri;
        }
    }

    console.log(playlists);

    return (
        <View source={require('../images/vibe.gif')} style={styles.lineargradient}>
            <View style={{ alignItems: "flex-end", alignContent: 'flex-end', marginRight: '3%', marginTop: '5%' }}>
                <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
                    <svg width="42" height="36" viewBox="0 0 42 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.8572 0.295953C21.6087 0.104166 21.3025 0 20.9873 0C20.6721 0 20.3659 0.104166 20.1174 0.295953L0 15.8114L1.73978 17.9876L4.2 16.0904V33.2308C4.20152 33.9647 4.497 34.6682 5.02178 35.1873C5.54655 35.7063 6.25786 35.9985 7 36H35C35.7422 35.9986 36.4536 35.7065 36.9784 35.1874C37.5032 34.6684 37.7986 33.9648 37.8 33.2308V16.103L40.2602 18L42 15.8236L21.8572 0.295953ZM23.8 33.2308H18.2V22.1538H23.8V33.2308ZM26.6 33.2308V22.1538C26.5991 21.4196 26.3039 20.7158 25.779 20.1966C25.254 19.6775 24.5423 19.3854 23.8 19.3846H18.2C17.4576 19.3853 16.7459 19.6773 16.2209 20.1965C15.696 20.7157 15.4007 21.4196 15.4 22.1538V33.2308H7V13.9313L21 3.14508L35 13.9458V33.2308H26.6Z" fill="#FFB1CE" />
                    </svg>
                </TouchableOpacity>
            </View>
            <View style={styles.text}>
                <Text style={{ fontSize: 32, fontWeight: '600', color: '#FFB1CE', }}> {t(emojis.result)} </Text>
            </View>
            <View style={{ alignItems: 'center' }}>
                <Avatar source={uri} size={250} ></Avatar>
            </View>
            <View style={styles.button}>
                <View style={styles.toubchble}>
                    <TouchableOpacity onPress={() => Linking.openURL(link)}>
                        <Text style={{ fontSize: 20, fontWeight: '600', color: '#E1007A' }}>{t("Yandex.Music")}</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
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
        paddingVertical: 5,
        overflow: 'hidden',
        backgroundColor: "#FFB1CE",
        marginTop: 10
    },
    lineargradient: {
        flex: 1,
        backgroundColor: '#15022D'
    },
    text: {
        margin: 10,
        fontSize: 30,
        alignItems: 'center'
    },

})

const styleEmblem = StyleSheet.create({
    emblem: {
        flex: 3,
        alignItems: "center",
        justifyContent: 'center'
    }
})
