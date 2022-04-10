import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity, ScrollView, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AuthScreen } from "./AuthScreen";
import { Avatar } from "react-native-elements";





export const PlayList = ({ navigation }) => {

    return (
        <LinearGradient colors={["#ed6ea0", "#ec8c69"]} style={styles.lineargradient}>

            <View style={styles.title}>
                <Avatar rounded source={require('../images/backIcon.png')} onPress={() => navigation.navigate("MediaScreen")} size={30}></Avatar>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Плэйлист №n</Text>
                <Avatar rounded source={require('../images/homeIcon.png')} size={30} onPress={() => navigation.navigate("HomeScreen")}></Avatar>
            </View>

            <View style={styles.container}>
                <Avatar size={225} source={require('../images/emblem.png')}></Avatar>
                <View style={styles.toubchble}>
                    <TouchableOpacity>
                        <Text>Ссылка на плэйлист</Text>
                    </TouchableOpacity>
                </View>

            </View>
            <View style={styles.scrollView}>
                <ScrollView>
                    <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Песенки песенки песенки Песенки песенки песенкиПесенки песенки песенкиПесенки песенки песенкиПесенки песенки песенкиПесенки песенки песенкиПесенки песенки песенкиПесенки песенки песенки
                        Песенки песенки песенки Песенки песенки песенкиПесенки песенки песенкиПесенки песенки песенкиПесенки песенки песенкиПесенки песенки песенкиПесенки песенки песенкиПесенки песенки песенки
                        Песенки песенки песенки Песенки песенки песенкиПесенки песенки песенкиПесенки песенки песенкиПесенки песенки песенкиПесенки песенки песенкиПесенки песенки песенкиПесенки песенки песенки
                        Песенки песенки песенки Песенки песенки песенкиПесенки песенки песенкиПесенки песенки песенкиПесенки песенки песенкиПесенки песенки песенкиПесенки песенки песенкиПесенки песенки песенки
                        Песенки песенки песенки Песенки песенки песенкиПесенки песенки песенкиПесенки песенки песенкиПесенки песенки песенкиПесенки песенки песенкиПесенки песенки песенкиПесенки песенки песенки
                        Песенки песенки песенки Песенки песенки песенкиПесенки песенки песенкиПесенки песенки песенкиПесенки песенки песенкиПесенки песенки песенкиПесенки песенки песенкиПесенки песенки песенки
                        Песенки песенки песенки Песенки песенки песенкиПесенки песенки песенкиПесенки песенки песенкиПесенки песенки песенкиПесенки песенки песенкиПесенки песенки песенкиПесенки песенки песенки
                        Песенки песенки песенки Песенки песенки песенкиПесенки песенки песенкиПесенки песенки песенкиПесенки песенки песенкиПесенки песенки песенкиПесенки песенки песенкиПесенки песенки песенки
                        Песенки песенки песенки Песенки песенки песенкиПесенки песенки песенкиПесенки песенки песенкиПесенки песенки песенкиПесенки песенки песенкиПесенки песенки песенкиПесенки песенки песенки
                        Песенки песенки песенки Песенки песенки песенкиПесенки песенки песенкиПесенки песенки песенкиПесенки песенки песенкиПесенки песенки песенкиПесенки песенки песенкиПесенки песенки песенки
                        Песенки песенки песенки Песенки песенки песенкиПесенки песенки песенкиПесенки песенки песенкиПесенки песенки песенкиПесенки песенки песенкиПесенки песенки песенкиПесенки песенки песенки
                        Песенки песенки песенки Песенки песенки песенкиПесенки песенки песенкиПесенки песенки песенкиПесенки песенки песенкиПесенки песенки песенкиПесенки песенки песенкиПесенки песенки песенки
                        Песенки песенки песенки Песенки песенки песенкиПесенки песенки песенкиПесенки песенки песенкиПесенки песенки песенкиПесенки песенки песенкиПесенки песенки песенкиПесенки песенки песенки
                        Песенки песенки песенки Песенки песенки песенкиПесенки песенки песенкиПесенки песенки песенкиПесенки песенки песенкиПесенки песенки песенкиПесенки песенки песенкиПесенки песенки песенки
                        Песенки песенки песенки Песенки песенки песенкиПесенки песенки песенкиПесенки песенки песенкиПесенки песенки песенкиПесенки песенки песенкиПесенки песенки песенкиПесенки песенки песенки
                        Песенки песенки песенки Песенки песенки песенкиПесенки песенки песенкиПесенки песенки песенкиПесенки песенки песенкиПесенки песенки песенкиПесенки песенки песенкиПесенки песенки песенки
                    </Text>

                </ScrollView>
            </View>

            <View style={styles.containerNav}>
                <View style={styles.icons}>
                    <Avatar source={require('../images/mediatekaIcon.png')} rounded size={60} onPress={() => navigation.navigate("MediaScreen")}>
                    </Avatar>
                    <Avatar source={require('../images/homeIcon.png')} rounded size={60} onPress={() => navigation.navigate("HomeScreen")} >
                    </Avatar>
                    <Avatar source={require('../images/settingsIcon.png')} rounded size={60} onPress={() => navigation.navigate("SettingsScreen")}>
                    </Avatar>
                </View>
                <View style={styles.iconsText}>
                    <Text style={{ fontSize: '15dp', fontWeight: 'bold' }}>Медиатека</Text>
                    <Text style={{ fontSize: '15dp', fontWeight: 'bold' }}>Главная</Text>
                    <Text style={{ fontSize: '15dp', fontWeight: 'bold' }}>Настроки</Text>
                </View>
            </View>

        </LinearGradient >
    );
}

const styles = StyleSheet.create({
    lineargradient: {
        width: '100%',
        height: '100%',
    },
    title: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 15,
        marginLeft: 5,
        marginRight: 5,
        justifyContent: 'space-between',
        alignContent: 'center'
    },
    scrollView: {
        flex: 5,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center'
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
        marginTop: 5,
        alignContent: 'center',
        paddingHorizontal: 25,
        paddingVertical: 5,
        backgroundColor: '#1DB954'
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