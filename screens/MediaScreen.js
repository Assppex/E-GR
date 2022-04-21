import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity, ScrollView, FlatList, Image, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AuthScreen } from "./AuthScreen";
import { Avatar } from "react-native-elements";




export const MediaScreen = ({ navigation }) => {

    const [playlists] = useState([
        
            {key:1, textTitle: 'Плейлист №1', textUnderTitile: 'продолжительность', imagePlaylist: require('../images/R8jZ.gif')},
            {key:2, textTitle: 'Плейлист №2', textUnderTitile: 'продолжительность', imagePlaylist: require('../images/R8jZ.gif')},
            {key:3, textTitle: 'Плейлист №3', textUnderTitile: 'продолжительность', imagePlaylist: require('../images/R8jZ.gif')},
            {key:4, textTitle: 'Плейлист №4', textUnderTitile: 'продолжительность', imagePlaylist: require('../images/R8jZ.gif')},
            {key:5, textTitle: 'Плейлист №5', textUnderTitile: 'продолжительность', imagePlaylist: require('../images/R8jZ.gif')},
            {key:6, textTitle: 'Плейлист №6', textUnderTitile: 'продолжительность', imagePlaylist: require('../images/R8jZ.gif')},
            {key:7, textTitle: 'Плейлист №7', textUnderTitile: 'продолжительность', imagePlaylist: require('../images/R8jZ.gif')},
            {key:8, textTitle: 'Плейлист №8', textUnderTitile: 'продолжительность', imagePlaylist: require('../images/R8jZ.gif')},
    ]);

    return (
        <View style={styles.lineargradient}>
            
            <View style={styles.container}>
                <ScrollView>

                    <View style={{marginLeft: 10, marginTop: 20}}>  
                       <FlatList
                        keyExtractor = {(item) => item.key}
                        data={playlists}
                        renderItem = {({ item }) =>(
                            <View style={styles.playlistIcon}>
                                
                                    <View style={{marginTop: 15}}>
                                        <Avatar source={item.imagePlaylist} size='large'></Avatar>
                                    </View>
                                    <View style={{marginLeft: 20,marginTop:15, justifyContent:'space-between'}}>
                                        <TouchableOpacity onPress={() => navigation.navigate('PlayList')}>  
                                            <Text style={{fontSize: 20, fontWeight:'bold', color: '#DC2A8A'}}>{item.textTitle}</Text>
                                            <Text style={{fontSize: 17, color: '#A09F9F'}}>{item.textUnderTitile}</Text>
                                        </TouchableOpacity>
                                    </View>
                                
                                
                                    
                                
                            </View>
                        )}
                        >
                    </FlatList>
                    </View> 
                </ScrollView>    
                
            </View>
            <View style={styles.containerNav}>
                <View style={styles.icons}>
                    <Avatar source={require('../images/mediatekaIcon.png')} rounded size={40} onPress={() => navigation.navigate("MediaScreen")}>
                    </Avatar>
                    <Avatar source={require('../images/homeIcon.png')} rounded size={40} onPress={() => navigation.navigate("HomeScreen")} >
                    </Avatar>
                    <Avatar source={require('../images/settingsIcon.png')} rounded size={40} onPress={() => navigation.navigate("SettingsScreen")}>
                    </Avatar>
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
    container: {
        flex: 5,
        flexDirection: 'row',
        width: '100%',
        height: '100%',
    },
    toubchble: {
        borderRadius: 60,
        alignContent: 'center',
        paddingHorizontal: 25,
        paddingVertical: 5,
    },
    containerNav: {
        flex: 0.6,
        flexDirection: 'column',
        alignContent: 'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius:10,
        backgroundColor: '#5C0A72'
    },
    icons: {
        flex: 1,
        marginLeft: '10%',
        marginRight: '10%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center'
        
    },
    iconsText: {
        flex: 1,
        marginLeft: '8%',
        marginRight: '10%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    playlistIcon:{
        flexDirection: "row",
        flex:1
    },
    playlistTitle: {
        
    }
})