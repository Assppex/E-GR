import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity, FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AuthScreen } from "./AuthScreen";
import { Avatar, normalize } from "react-native-elements";



export const ChoiceEmojiScreenThree = ({ route, navigation }) => {

	var emojis = route.params.emojis;
	emojis.CalculateScreen3();

	var screen3_emojis = [];
	for (var i = 0; i < emojis.screen3.length; i++) {
		screen3_emojis.push({key: i, text: emojis.screen3[i].code});
	}

	console.log(emojis);

    const [emoji] = useState(screen3_emojis);




    return (
        <LinearGradient colors={["#ed6ea0", "#ec8c69"]} style={styles.lineargradient}>
            <View style={{ flex: 1, alignItems: "flex-end",flexDirection:'row', alignContent: 'flex-end', justifyContent:'space-between', marginRight: '3%', marginLeft:'3%', marginTop: '5%' }}>
            <Avatar onPress={() => navigation.navigate('ChoiceEmojiScreenTwo')} source={require('../images/backIcon.png')} rounded size={35} />
                <Avatar onPress={() => navigation.navigate('HomeScreen')} source={require('../images/homeIcon.png')} rounded size={35} />
            </View>
            <View style={styles.textView}>
                <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Выбирай</Text>
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
                               <Text style={{fontSize: 45}}>{item.text}</Text> 
                            </TouchableOpacity>
                            
                        </View>
                    )}
                >

                </FlatList>
                <View style={{flex: 2, alignItems:'center', justifyContent:"center"}}>
                    <TouchableOpacity onPress={() => navigation.navigate('GenerateListScreen', {emojis: emojis})}>
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
