import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity, Switch } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Avatar } from "react-native-elements";




export const GenerateListScreen = ({ navigation }) => {
    return (
        <LinearGradient colors={["#ed6ea0", "#ec8c69"]} style={styles.lineargradient}>
            <View style={styles.topView}>
                <Avatar onPress={() => navigation.navigate('ChoiceEmojiScreenThree')} source={require('../images/backIcon.png')} rounded size={35} />
                <Avatar onPress={() => navigation.navigate('HomeScreen')} source={require('../images/homeIcon.png')} rounded size={35} />
            </View>
            <View style={styles.text}>
                <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Плейлист {'\n'}сгенерирован</Text>
            </View>
            <View style={styles.image}>
                <Avatar source={require('../images/emblem.png')} size={250} />
            </View>
            <View style={styles.sortView}>
                <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Начать сортировку?</Text>
            </View>
            <View style={styles.buttons}>
                <LinearGradient colors={["#1DB954", '#1DB954']} style={styles.touchble}>
                    <TouchableOpacity onPress={() => navigation.navigate('TinderScreen')}>
                        <Text style={{ fontSize: 30, fontWeight: 'bold' }}>да</Text>
                    </TouchableOpacity>
                </LinearGradient>
                <LinearGradient colors={['#1DB954', '#1DB954']} style={styles.touchble}>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 30, fontWeight: 'bold' }}>нет</Text>
                    </TouchableOpacity>
                </LinearGradient>
            </View>
        </LinearGradient >
    );
}

const styles = StyleSheet.create({
    lineargradient: {
        width: '100%',
        height: '100%',
    },
    topView: {
        flex: 1,
        flexDirection: 'row',
        marginTop: '8%',
        marginLeft: '5%',
        marginRight: '5%',
        justifyContent: 'space-between'
    },
    text: {
        flex: 2,
        alignItems: 'center',
        alignContent: 'center',
    },
    image: {
        flex: 6,
        alignItems: 'center',
    },
    sortView: {
        flex: 1,
        alignItems: 'center',
        alignContent: 'center',
    },
    buttons: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: '15%',
        marginRight: '15%',
    },
    touchble: {
        alignContent: 'center',
        borderRadius: 50,
        paddingHorizontal: 30,
        paddingVertical: 10
    }

})