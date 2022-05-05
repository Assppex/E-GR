import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { HomeScreen } from "./HomeScreen";
import { View, Text, StyleSheet, Button, TouchableOpacity, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { NavigationContainer } from "@react-navigation/native";
import { Avatar } from "react-native-elements";


export const AuthScreen = ({ navigation }) => {

    return (
        <View style={styles.lineargradient}>
            <View style={styleEmblem.emblem}>
                <Avatar size={200} source={require("../images/super_logo.png")}></Avatar>
                {/* <ImageBackground source={require('../images/emblem.png')}></ImageBackground> */}
            </View>
            <View style={styles.button}>
                <View source={require('../images/super_logo.png')} style={styles.toubchble}>
                    <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
                        <Text style={{ fontSize: 25, fontWeight: '600', color: '#E1007A' }}>Войти в аккаунт</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={{ margin: 20 }} onPress={() => navigation.navigate("HomeScreen")}>
                    <Text style={{ fontSize: 17, fontWeight: '600', color: '#FD99BED4', opacity: 0.83 }}>Нет аккаунта</Text>
                </TouchableOpacity>
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
        paddingVertical: 9,
        overflow: 'hidden',
        borderColor: '#E1007A',
        borderWidth: 2.5
    },
    lineargradient: {
        flex: 1,
        backgroundColor: '#15022D'
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
