import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { HomeScreen } from "./HomeScreen";
import { View, Text, StyleSheet, Button, TouchableOpacity, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { NavigationContainer } from "@react-navigation/native";
import { Avatar } from "react-native-elements";


export const AuthScreen = ({ navigation }) => {
    const e = require('emoji-dictionary')
    return (
        <ImageBackground source={require('../images/vibe.gif')} style={styles.lineargradient}>
            <View style={styleEmblem.emblem}>
                <Avatar rounded size={200} source={require("../images/vibe.gif")}></Avatar>
                {/* <ImageBackground source={require('../images/emblem.png')}></ImageBackground> */}
                <Text style={styles.text}>emope.mus</Text>
            </View>
            <View style={styles.button}>
                <ImageBackground source={require('../images/emblem.png')} style={styles.toubchble}>
                    <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
                        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Войти в аккаунт</Text>
                    </TouchableOpacity>
                </ImageBackground>
                <TouchableOpacity style={{ margin: 20 }} onPress={() => navigation.navigate("HomeScreen")}>
                    <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Нет аккаунта</Text>
                </TouchableOpacity>
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
        fontSize: 30
    },

})

const styleEmblem = StyleSheet.create({
    emblem: {
        flex: 3,
        alignItems: "center",
        justifyContent: 'center'
    }
})
