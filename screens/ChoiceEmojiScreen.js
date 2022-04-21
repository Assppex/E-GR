import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity, FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AuthScreen } from "./AuthScreen";
import { Avatar, normalize } from "react-native-elements";



export const ChoiceEmojiScreen = ({ navigation }) => {

    const e = require('emoji-dictionary')
    const [emoji] = useState([
        { key: '1', text: '\u{1F30B}' },
        { key: '2', text: '\u{1F30A}' },
        { key: '3', text: '\u{1F31C}' },
        { key: '4', text: '\u{1F31D}' },
        { key: '5', text: '\u{1F320}' },
        { key: '6', text: '\u{1F423}' },
        { key: '7', text: '\u{1F30B}' },
        { key: '8', text: '\u{1F30B}' },
        { key: '9', text: '\u{1F9AF}' },
        { key: '10', text: '\u{1F30B}' },
        { key: '11', text: '\u{1F30B}' },
        { key: '12', text: '\u{1F30B}' },
        { key: '13', text: '\u{1F30B}' },
        { key: '14', text: '\u{1F30B}' },
        { key: '15', text: '\u{1F30B}' },
        { key: '16', text: '\u{1F30B}' },
        { key: '17', text: '\u{1F30B}' },
        { key: '18', text: '\u{1F30B}' },
        { key: '19', text: '\u{1F30B}' },
        { key: '20', text: '\u{1F30B}' },

    ]);




    return (
        <View style={styles.lineargradient}>
            <View style={{ flex: 1, alignItems: "flex-end", alignContent: 'flex-end', marginRight: '3%', marginTop: '5%' }}>
                <Avatar source={require('../images/homeIcon.png')} onPress={() => navigation.navigate('HomeScreen')} rounded size={30}></Avatar>
            </View>
            <View style={styles.textView}>
                <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#DC2A8A' }}>Выбирай</Text>
            </View>
            <View style={styles.emojiView}>
                <FlatList
                    numColumns={4}
                    keyExtractor={(item) => item.key}
                    data={emoji}
                    renderItem={({ item }) => (
                        <View style={styles.oneemoji}>
                            {/* <Avatar onPress={() => navigation.navigate('GenerateListScreen')} rounded size={60} source={require('e../images/emblem.png')} /> */}
                            <TouchableOpacity>
                               <Text style={{fontSize: 45}}>{item.text}</Text> 
                            </TouchableOpacity>
                            
                        </View>
                    )}
                >

                </FlatList>
                <View style={{flex: 3, alignItems:'center', justifyContent:"flex-start"}}>
                    <TouchableOpacity onPress={() => navigation.navigate('ChoiceEmojiScreenTwo')}>
                        <Text style={{fontSize: 70, color: '#DC2A8A'}}> {'>'} </Text>
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