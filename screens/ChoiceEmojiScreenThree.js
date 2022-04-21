import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity, FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AuthScreen } from "./AuthScreen";
import { Avatar, normalize } from "react-native-elements";



export const ChoiceEmojiScreenThree = ({ navigation }) => {

    const e = require('emoji-dictionary')
    const [emoji] = useState([
        
        { key: '1', text: '\u{1F31C}' },
        { key: '2', text: '\u{1F31D}' },
        { key: '3', text: '\u{1F320}' },
        { key: '4', text: '\u{1F423}' },
        { key: '5', text: '\u{1F30B}' },
        { key: '6', text: '\u{1F30A}' },

    ]);




    return (
        <View style={styles.lineargradient}>
            <View style={{ flex: 1, alignItems: "flex-end",flexDirection:'row', alignContent: 'flex-end', justifyContent:'space-between', marginRight: '3%', marginLeft:'3%', marginTop: '5%' }}>
            <Avatar onPress={() => navigation.navigate('ChoiceEmojiScreenTwo')} source={require('../images/backIcon.png')} rounded size={35} />
                <Avatar onPress={() => navigation.navigate('HomeScreen')} source={require('../images/homeIcon.png')} rounded size={35} />
            </View>
            <View style={styles.textView}>
                <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#DC2A8A'}}>Выбирай</Text>
            </View>
            <View style={styles.emojiView}>
                <FlatList
                    numColumns={2}
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
                <View style={{flex: 2, alignItems:'center', justifyContent:"center"}}>
                    <TouchableOpacity onPress={() => navigation.navigate('GenerateListScreen')}>
                        <Text style={{fontSize: 40}}> Next </Text>
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