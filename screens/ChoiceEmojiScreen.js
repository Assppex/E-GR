import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity, FlatLis, FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AuthScreen } from "./AuthScreen";
import { Avatar, normalize } from "react-native-elements";
import {readEmojis, readTextFile} from "../scripts/EmojiClass.js"

console.log("here");
var file = require('../matvey.tsv');
console.log(file);
var emojis = readEmojis(file);
console.log(emojis);

export const ChoiceEmojiScreen = ({ navigation }) => {

    const [emoji] = useState([
        { key: '1', text: '1' },
        { key: '2', text: '2' },
        { key: '3', text: '3' },
        { key: '4', text: '4' },
        { key: '5', text: '5' },
        { key: '6', text: '6' },
        { key: '7', text: '7' },
        { key: '8', text: '8' },
        { key: '9', text: '9' },
        { key: '10', text: '10' },
        { key: '11', text: '11' },
        { key: '12', text: '12' },
        { key: '13', text: '13' },
        { key: '14', text: '14' },
        { key: '15', text: '15' },
        { key: '16', text: '16' },
        { key: '17', text: '17' },
        { key: '18', text: '18' },
        { key: '19', text: '19' },
        { key: '20', text: '20' },

    ]);




    return (
        <LinearGradient colors={["#ed6ea0", "#ec8c69"]} style={styles.lineargradient}>
            <View style={{ flex: 1, alignItems: "flex-end", alignContent: 'flex-end', marginRight: '3%', marginTop: '5%' }}>
                <Avatar source={require('../images/homeIcon.png')} onPress={() => navigation.navigate('HomeScreen')} rounded size={30}></Avatar>
            </View>
            <View style={styles.textView}>
                <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Выбирай</Text>
            </View>
            <View style={styles.emojiView}>
                <FlatList
                    numColumns={4}
                    keyExtractor={(item) => item.key}
                    data={emoji}
                    renderItem={({ item }) => (
                        <View style={styles.oneemoji}>
                            <Avatar onPress={() => navigation.navigate('GenerateListScreen')} rounded size={60} source={require('../images/emblem.png')} />
                        </View>
                    )}
                >

                </FlatList>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    lineargradient: {
        width: '100%',
        height: '100%',
    },
    textView: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    emojiView: {
        flex: 10,
        alignItems: 'center',
    },
    oneemoji: {
        margin: 10
    }
})