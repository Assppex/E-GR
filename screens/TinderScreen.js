import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity, Switch } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Avatar } from "react-native-elements";
import { Icon } from "react-native-elements";




export const TinderScreen = ({ navigation }) => {
    return (
        <LinearGradient colors={["#ed6ea0", "#ec8c69"]} style={styles.lineargradient}>
            <View style={styles.topView}>
                <Icon name="arrow-back" size={45} onPress={() => navigation.navigate('ChoiceEmojiScreen')}></Icon>
                {/* <Avatar onPress={() => navigation.navigate('ChoiceEmojiScreen')} source={require('../images/backIcon.png')} rounded size={35} /> */}
                <Avatar onPress={() => navigation.navigate('HomeScreen')} source={require('../images/homeIcon.png')} rounded size={35} />
            </View>
            <View style={styles.text}>
                <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Свайпай</Text>
            </View>
            <View style={styles.image}>
                <Avatar source={require('../images/emblem.png')} size={250} />
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Песенка</Text>
                <Text style={{ fontSize: 20, fontWeight: 'normal' }}>автор</Text>
            </View>
            <View style={styles.musicControls}>
                <View>
                    <Avatar source={require('../images/TinderScreenBackMusicIcon.png')} rounded size={55} />
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Text>Назад</Text>
                    </View>

                </View>
                <View>
                    <Avatar source={require('../images/TinderScreenMusicPlay.png')} rounded size={55} />
                    <Text> </Text>
                </View>

                <View>
                    <Avatar source={require('../images/TinderScreenMusicRepeat.png')} rounded size={55} />
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Text>Повторить</Text>
                    </View>

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
    musicControls: {
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
    },
    back: {
        alignContent: 'center',
        borderRadius: 50,
        paddingHorizontal: 30,
        paddingVertical: 10
    },
    play: {
        alignContent: 'center',
        borderRadius: 50,
        paddingHorizontal: 30,
        paddingVertical: 10
    },
    againg: {
        alignContent: 'center',
        borderRadius: 50,
        paddingHorizontal: 30,
        paddingVertical: 10,
        image: require('../images/backIcon.png')
    }

})