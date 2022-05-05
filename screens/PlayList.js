import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity, ScrollView, Image, FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AuthScreen } from "./AuthScreen";
import { Avatar } from "react-native-elements";
import { useTranslation } from "react-i18next";
import i18n from '../languages/i18n';
import i18next from "i18next";




export const PlayList = ({ navigation }) => {

    const { t, i18n } = useTranslation()

    const [list] = useState([

        { key: 1, textTitle: t("Song"), textUnderTitile: t("Singer"), imagePlaylist: require('../images/R8jZ.gif') },
        { key: 2, textTitle: t("Song"), textUnderTitile: t("Singer"), imagePlaylist: require('../images/R8jZ.gif') },
        { key: 3, textTitle: t("Song"), textUnderTitile: t("Singer"), imagePlaylist: require('../images/R8jZ.gif') },
        { key: 4, textTitle: t("Song"), textUnderTitile: t("Singer"), imagePlaylist: require('../images/R8jZ.gif') },
        { key: 5, textTitle: t("Song"), textUnderTitile: t("Singer"), imagePlaylist: require('../images/R8jZ.gif') },
        { key: 6, textTitle: t("Song"), textUnderTitile: t("Singer"), imagePlaylist: require('../images/R8jZ.gif') },
        { key: 7, textTitle: t("Song"), textUnderTitile: t("Singer"), imagePlaylist: require('../images/R8jZ.gif') },
        { key: 8, textTitle: t("Song"), textUnderTitile: t("Singer"), imagePlaylist: require('../images/R8jZ.gif') },
    ]);

    return (
        <View style={styles.lineargradient}>

            <View style={styles.title}>
                <Avatar rounded source={require('../images/backIcon.png')} onPress={() => navigation.navigate("MediaScreen")} size={30}></Avatar>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FFCBDE' }}>{t("Playlist")} №n</Text>
                <Avatar rounded source={require('../images/homeIcon.png')} size={30} onPress={() => navigation.navigate("HomeScreen")}></Avatar>
            </View>

            <View style={styles.container}>
                <Avatar size={225} source={require('../images/emblem.png')}></Avatar>
                <View style={styles.toubchble}>
                    <TouchableOpacity>
                        <Text style={{ color: '#E1007A', fontSize: 16 }}>{t("Yandex.Music")}</Text>
                    </TouchableOpacity>
                </View>

            </View>
            <View style={styles.scrollView}>
                <ScrollView>
                    <View>
                        <FlatList
                            keyExtractor={(item) => item.key}
                            data={list}
                            renderItem={({ item }) => (
                                <View style={styles.playlistIcon}>
                                    <View style={{ marginLeft: 10, justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 23, fontWeight: 'bold', color: '#DC2A8A' }}>{item.key < 10 ? '0' + item.key : item.key}</Text>
                                    </View>
                                    <View style={{ marginLeft: 20, marginTop: 15 }}>
                                        <Avatar source={item.imagePlaylist} size='medium'></Avatar>
                                    </View>
                                    <View style={{ marginLeft: 20, marginTop: 15, justifyContent: 'space-between' }}>
                                        <TouchableOpacity onPress={() => navigation.navigate('PlayList')}>
                                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#DC2A8A' }}>{item.textTitle}</Text>
                                            <Text style={{ fontSize: 17, color: '#A09F9F' }}>{item.textUnderTitile}</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )}
                        ></FlatList>
                    </View>


                </ScrollView>
            </View>



        </View>
    );
}

const styles = StyleSheet.create({
    lineargradient: {
        width: '100%',
        height: '100%',
        backgroundColor: '#15022D'
    },
    title: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 15,
        marginLeft: 5,
        marginRight: 5,
        justifyContent: 'space-between',

    },
    scrollView: {
        flex: 5,
        marginTop: 10,
    },
    playlistIcon: {
        flexDirection: "row",
        flex: 1,

    },
    container: {
        flex: 5,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'

    },
    toubchble: {
        borderRadius: 60,
        marginTop: 10,
        alignContent: 'center',
        paddingHorizontal: 70,
        paddingVertical: 5,
        backgroundColor: '#FFB1CE'
    },
    containerNav: {
        flex: 2,
        flexDirection: 'column',
        alignContent: 'center'
    },
    icons: {
        flex: 1,
        marginLeft: '10%',
        marginRight: '10%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    iconsText: {
        flex: 1,
        marginLeft: '8%',
        marginRight: '10%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})