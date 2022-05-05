import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity, FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AuthScreen } from "./AuthScreen";
import { Avatar, normalize } from "react-native-elements";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import i18n from '../languages/i18n';
import { Emojis } from "../scripts/EmojiClass"


var emojis = new Emojis();
global.emojis=emojis;

var base_emojis = [];
for (var i = 0; i < emojis.base.length; i++) {
	base_emojis.push({key: i, text: emojis.base[i].code, pressed: false});
}

    const { t, i18n } = useTranslation()

export const ChoiceEmojiScreen = ({ navigation }) => {

    const [emoji] = useState(base_emojis);

    return (
        <View style={styles.lineargradient}>
            <View style={{ flex: 1, alignItems: "flex-end", alignContent: 'flex-end', marginRight: '3%', marginTop: '5%' }}>
                <Avatar source={require('../images/homeIcon.png')} onPress={() => navigation.navigate('HomeScreen')} rounded size={30}></Avatar>
            </View>
            <View style={styles.textView}>
                <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#DC2A8A' }}>{t("Choose")}</Text>
            </View>
            <View style={styles.emojiView}>
                <FlatList
                    numColumns={4}
                    keyExtractor={(item) => item.key}
                    data={emoji}
                    renderItem={({ item }) => (
                        <View style={styles.oneemoji}>
                            {/* <Avatar onPress={() => navigation.navigate('GenerateListScreen')} rounded size={60} source={require('e../images/emblem.png')} /> */}
                            <TouchableOpacity onPress={() => {item.pressed ? emojis.RemoveFromSum(item.key) : emojis.AddToSum(item.key); item.pressed = !item.pressed}}>
                               <Text style={{fontSize: 45}}>{item.text}</Text> 
                            </TouchableOpacity>
                        </View>
                    )}
                >

                </FlatList>
                <View style={{ flex: 3, alignItems: 'center', justifyContent: "flex-start" }}>
					<TouchableOpacity onPress={() => navigation.navigate('ChoiceEmojiScreenTwo', {emojis: emojis})}>
                        <Text style={{ fontSize: 70, color: '#DC2A8A' }}> {'>'} </Text>
                    </TouchableOpacity>
                </View>
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
    textView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    emojiView: {
        flex: 10,
        alignItems: 'center',
    },
    oneemoji: {
        margin: 10,
    }
})
