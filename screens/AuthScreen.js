import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { HomeScreen } from "./HomeScreen";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { NavigationContainer } from "@react-navigation/native";
import { Avatar } from "react-native-elements";


export const AuthScreen = ({ navigation }) => {
    return (
        <LinearGradient colors={["#ed6ea0", "#ec8c69"]} style={styles.lineargradient}>
            <View style={styleEmblem.emblem}>
                <Avatar rounded size={200} source={require("../images/emblem.png")}></Avatar>
                <Text style={styles.text}>emope.mus</Text>
            </View>
            <View style={styles.button}>
                <LinearGradient colors={["#b224ef", "#7579ff"]} style={styles.toubchble}>
                    <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
                        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Войти в аккаунт</Text>
                    </TouchableOpacity>
                </LinearGradient>
                <TouchableOpacity style={{ margin: 20 }} onPress={() => navigation.navigate("HomeScreen")}>
                    <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Нет аккаунта</Text>
                </TouchableOpacity>
            </View>


        </LinearGradient>
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
        borderRadius: 50,
        alignContent: 'center',
        paddingHorizontal: 40,
        paddingVertical: 9,
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
