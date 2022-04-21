import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity, Switch } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AuthScreen } from "./AuthScreen";
import { Avatar, Icon } from "react-native-elements";




export const SettingsScreen = ({ navigation }) => {

    const [isEnabled, setIsEnabled] = useState(true);
    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState)
    }

    return (
        <View style={styles.lineargradient}>
            <View style={styles.userAvatar}>
                <View>
                    <Avatar rounded size={65} source={require('../images/kittyIcon.png')}
                    ></Avatar>
                </View>
                <View style={{ marginLeft: '3%' }}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold' }}>username</Text>
                </View>
            </View>
            <View style={styles.language}>
                <View>
                    <Avatar rounded size={55} source={require('../images/languages.png')}
                    ></Avatar>
                </View>
                <View style={{ marginLeft: '3%' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Язык</Text>
                </View>
            </View>
            <View style={styles.language}>
                <View>
                    <Switch trackColor={{ false: '#cfd4cd', true: '#03fc07' }}
                        thumbColor={isEnabled ? '#cfd4cd' : '#03fc07'}
                        onValueChange={toggleSwitch}
                        value={!isEnabled}
                    />


                </View>
                <View style={{ marginLeft: '3%' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Темная тема</Text>
                </View>


            </View>


            <View style={styles.container}>
                <View style={styles.exitToubchble}>
                    <LinearGradient colors={['#d4fc79', '#96e6a1']} style={styles.toubchble}>
                        <TouchableOpacity onPress={() => navigation.navigate('AuthScreen')}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Выйти</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
            </View>
            <View style={styles.containerNav}>
                <View style={styles.icons}>
                    <Avatar source={require('../images/MediatekaIconFigma.png')} rounded size={40} onPress={() => navigation.navigate("MediaScreen")}>
                    </Avatar>
                    <Avatar source={require('../images/homeIcon.png')} rounded size={40} onPress={() => navigation.navigate("HomeScreen")} >
                    </Avatar>
                    <Avatar source={require('../images/settingsIcon.png')} rounded size={40} onPress={() => navigation.navigate("SettingsScreen")}>
                    </Avatar>
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
    container: {
        flex: 2,
        flexDirection: 'row',
        width: '100%',
        height: '100%',

    },
    exitToubchble: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    userAvatar: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        height: '100%',
        marginTop: '20%',
        marginLeft: '5%'
    },
    language: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        height: '100%',
        marginLeft: '5%'
    },
    toubchble: {
        borderRadius: 60,
        alignContent: 'center',
        paddingHorizontal: 85,
        paddingVertical: 5,
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    containerNav: {
        flex: 0.67,
        flexDirection: 'column',
        alignContent: 'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: '#5C0A72',
        height: 60
    },
    icons: {
        flex: 1,
        marginLeft: '10%',
        marginRight: '10%',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-between',
    },
    iconsText: {
        flex: 1,
        marginLeft: '8%',
        marginRight: '10%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    sourse: {
        uri: 'https://sun9-2.userapi.com/impf/MaYUV3rYxQoUB1OBKPpwnrl3LlcxD5MZKPn7tg/iLJznLSOSg8.jpg?size=735x705&quality=96&sign=39399bb61fb048ba34a6b4b6354f8baa&type=album'
    }
})