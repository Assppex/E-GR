import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity, FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AuthScreen } from "./AuthScreen";
import { Avatar, normalize } from "react-native-elements";
import { Emojis } from "../scripts/EmojiClass"


var emojis = new Emojis();
global.emojis=emojis;

var base_emojis = [];
for (var i = 0; i < emojis.base.length; i++) {
	base_emojis.push({key: i, text: emojis.base[i].code, pressed: false});
}


export const ChoiceEmojiScreen = ({ navigation }) => {

    const [emoji] = useState(base_emojis);

    return (
        <LinearGradient colors={["#ed6ea0", "#ec8c69"]} style={styles.lineargradient}>
            <View style={{ flex: 1, alignItems: "flex-end", alignContent: 'flex-end', marginRight: '3%', marginTop: '5%' }}>
                <Avatar source={require('../images/homeIcon.png')} onPress={() => navigation.navigate('HomeScreen')} rounded size={30}></Avatar>
            </View>
            <View style={styles.textView}>
                <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Выбирай</Text>
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
                <View style={{flex: 3, alignItems:'center', justifyContent:"flex-start"}}>
                    <TouchableOpacity onPress={() => navigation.navigate('ChoiceEmojiScreenTwo', {emojis: emojis})}>
                        <Text style={{fontSize: 40}}> Next </Text>
                    </TouchableOpacity>
                    
                </View>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    lineargradient: {
        width: '100%',
        height: '100%',
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
