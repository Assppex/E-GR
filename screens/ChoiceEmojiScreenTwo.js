import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react"
import { View, Text, StyleSheet, Button, TouchableOpacity, FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AuthScreen } from "./AuthScreen";
import { Avatar, normalize } from "react-native-elements";


export const ChoiceEmojiScreenTwo = ({ route, navigation }) => {

	var emojis = route.params.emojis;
	emojis.CalculateScreen2();
	console.log(emojis);
	emojis.ClearSum();

	var screen2_emojis = [];
	for (var i = 0; i < emojis.screen2.length; i++) {
		screen2_emojis.push({key: i, text: emojis.screen2[i].code});
	}


    const [emoji] = useState(screen2_emojis);


    return (
        <LinearGradient colors={["#ed6ea0", "#ec8c69"]} style={styles.lineargradient}>
            <View style={{ flex: 1, alignItems: "flex-end",flexDirection:'row', alignContent: 'flex-end', justifyContent:'space-between', marginRight: '3%', marginLeft:'3%', marginTop: '5%' }}>
		<Avatar onPress={() => {
			emojis.ClearSum();
			emojis.screen2.splice(0, emojis.screen2.length);
			navigation.navigate('ChoiceEmojiScreen');
			}
		}
			source={require('../images/backIcon.png')} rounded size={35} />
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
                            <TouchableOpacity onPress={() => {item.pressed ? emojis.RemoveFromSum(item.key) : emojis.AddToSum(item.key); item.pressed = !item.pressed}}>
                               <Text style={{fontSize: 45}}>{item.text}</Text> 
                            </TouchableOpacity>
                            
                        </View>
                    )}
                >

                </FlatList>
                <View style={{flex: 2, alignItems:'center', justifyContent:"center"}}>
                    <TouchableOpacity onPress={() => navigation.navigate('ChoiceEmojiScreenThree', {emojis: emojis})}>
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
