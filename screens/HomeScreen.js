import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AuthScreen } from "./AuthScreen";
import { Avatar, normalize } from "react-native-elements";


export const HomeScreen = ({ navigation }) => {
    return (
        <ImageBackground source={require('../images/R8jZ.gif')} style={styles.lineargradient}>
            <View style={styles.containerText}>
                <Text style={styles.text}>Какое у тебя {"\n"}сегодня настроение?</Text>
            </View>


            <View style={styles.container}>
                <LinearGradient colors={['#4481eb', '#04befe']} style={styles.toubchble}>
                    <TouchableOpacity onPress={() => navigation.navigate("ChoiceEmojiScreen")}>
                        <Text style={{ fontSize: 40, fontWeight: 'bold' }}>Начать</Text>
                    </TouchableOpacity>
                </LinearGradient>
            </View>
            <View style={styles.containerNav}>
                <View style={styles.icons}>
                    <Avatar source={require('../images/MediatekaIconFigma.png')} rounded size={40} onPress={() => navigation.navigate("MediaScreen")}>
                    </Avatar>
                    <Avatar source={require('../images/homeIcon.png')} rounded size={40} onPress={() => navigation.navigate("HomeScreen")}>
                    </Avatar>
                    <Avatar source={require('../images/settingsIcon.png')} rounded size={40} onPress={() => navigation.navigate("SettingsScreen")}>
                    </Avatar>
                </View>
            </View>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    lineargradient: {
        width: '100%',
        height: '100%',
    },
    container: {
        flex: 2,
        flexDirection: 'row',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerText: {
        flex: 2,
        width: '100%',
        height: '100%',
        marginTop: '10%',
        marginLeft: '15%'
    },
    toubchble: {
        borderRadius: 60,
        alignContent: 'center',
        paddingHorizontal: 25,
        paddingVertical: 5,
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    containerNav: {
        flex: 0.5,
        flexDirection: 'column',
        alignContent: 'center',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        backgroundColor: 'black',
        height: 60
    },
    icons: {
        flex: 1,
        marginLeft: '10%',
        marginRight: '10%',
        flexDirection: 'row',
        alignItems: 'center',
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