import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity, Switch } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Avatar } from "react-native-elements";




export const GenerateListScreen = ({ navigation }) => {
    return (
        <View style={styles.lineargradient}>
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
                <View style={styles.touchble}>
                    <TouchableOpacity onPress={() => navigation.navigate('TinderScreen')}>
                        <Text style={{ fontSize: 30, fontWeight: '500', color: '#DC2A8A'}}>Да </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.touchble}>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 30, fontWeight: '500', color: '#DC2A8A' }}>Нет</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    lineargradient: {
        width: '100%',
        height: '100%',
        backgroundColor: '#15022D'
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
        borderRadius: 5,
        paddingHorizontal: 30,
        paddingVertical: 10,
        backgroundColor: '#15022D',
        borderColor: '#DC2A8A',
        borderWidth: 3
    }

})