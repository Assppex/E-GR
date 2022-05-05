import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity, FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AuthScreen } from "./AuthScreen";
import { Avatar, normalize } from "react-native-elements";
import { useTranslation } from "react-i18next";
import Svg, { Path } from "react-native-svg";
import i18next from "i18next";
import i18n from '../languages/i18n';


export const ChoiceEmojiScreenThree = ({ route, navigation }) => {

    var emojis = route.params.emojis;
    emojis.CalculateScreen3();

    var screen3_emojis = [];
    for (var i = 0; i < emojis.screen3.length; i++) {
        screen3_emojis.push({ key: i, text: emojis.screen3[i].code });
    }

    console.log(emojis);

    const [emoji] = useState(screen3_emojis);

    const { t, i18n } = useTranslation()


    return (
        <View style={styles.lineargradient}>
            <View style={{ flex: 1, alignItems: "flex-end", flexDirection: 'row', alignContent: 'flex-end', justifyContent: 'space-between', marginRight: '3%', marginLeft: '3%', marginTop: '5%' }}>
                <TouchableOpacity />
                <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
                    <svg width="42" height="36" viewBox="0 0 42 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.8572 0.295953C21.6087 0.104166 21.3025 0 20.9873 0C20.6721 0 20.3659 0.104166 20.1174 0.295953L0 15.8114L1.73978 17.9876L4.2 16.0904V33.2308C4.20152 33.9647 4.497 34.6682 5.02178 35.1873C5.54655 35.7063 6.25786 35.9985 7 36H35C35.7422 35.9986 36.4536 35.7065 36.9784 35.1874C37.5032 34.6684 37.7986 33.9648 37.8 33.2308V16.103L40.2602 18L42 15.8236L21.8572 0.295953ZM23.8 33.2308H18.2V22.1538H23.8V33.2308ZM26.6 33.2308V22.1538C26.5991 21.4196 26.3039 20.7158 25.779 20.1966C25.254 19.6775 24.5423 19.3854 23.8 19.3846H18.2C17.4576 19.3853 16.7459 19.6773 16.2209 20.1965C15.696 20.7157 15.4007 21.4196 15.4 22.1538V33.2308H7V13.9313L21 3.14508L35 13.9458V33.2308H26.6Z" fill="#FFB1CE" />
                    </svg>
                </TouchableOpacity>

            </View>
            <View style={styles.textView}>
                <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#DC2A8A' }}>{t("Choose")}</Text>
            </View>
            <View style={styles.emojiView}>
                <FlatList
                    numColumns={2}
                    keyExtractor={(item) => item.key}
                    data={emoji}
                    renderItem={({ item }) => (
                        <View style={styles.oneemoji}>
                            {/* <Avatar onPress={() => navigation.navigate('GenerateListScreen')} rounded size={60} source={require('e../images/emblem.png')} /> */}
                            <TouchableOpacity onPress={() => {
                                if (!item.pressed) {
                                    emojis.selected_on_screen3.push(emojis.screen3[item.key]);
                                    item.pressed = false;
                                }
                                else {
                                    for (var i = 0; i < emojis.selected_on_screen3.length; i++) {
                                        if (emojis.selected_on_screen3[i] == emojis.screen3[item.key]) {
                                            emojis.selected_on_screen3.splice(i, 1);
                                        }
                                    }
                                    item.pressed = true;
                                }
                            }}>
                                <Text style={{ fontSize: 45 }}>{item.text}</Text>
                            </TouchableOpacity>

                        </View>
                    )}
                >

                </FlatList>
                <View style={{ flex: 2, alignItems: 'center', justifyContent: "center" }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Test', { emojis: emojis })}>
                        <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="55" height="55" fill="#15022D" />
                            <path d="M37.8125 27.5L20.625 44.6875L18.2188 42.2813L33 27.5L18.2188 12.7188L20.625 10.3125L37.8125 27.5Z" fill="#E1007A" />
                        </svg>

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
        flex: 4,
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
