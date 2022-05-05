import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity, ScrollView, FlatList, Image, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AuthScreen } from "./AuthScreen";
import { Avatar } from "react-native-elements";
import Svg, { Path } from "react-native-svg";
import { useTranslation } from "react-i18next";
import i18n from '../languages/i18n';
import i18next from "i18next";




export const MediaScreen = ({ navigation }) => {

    const { t, i18n } = useTranslation()

    const [playlists] = useState([

        { key: 1, textTitle: t("Playlist") + " №1", textUnderTitile: t("Duration"), imagePlaylist: require('../images/R8jZ.gif') },
        { key: 2, textTitle: t("Playlist") + '№2', textUnderTitile: t("Duration"), imagePlaylist: require('../images/R8jZ.gif') },
        { key: 3, textTitle: t("Playlist") + '№3', textUnderTitile: t("Duration"), imagePlaylist: require('../images/R8jZ.gif') },
        { key: 4, textTitle: t("Playlist") + '№4', textUnderTitile: t("Duration"), imagePlaylist: require('../images/R8jZ.gif') },
        { key: 5, textTitle: t("Playlist") + '№5', textUnderTitile: t("Duration"), imagePlaylist: require('../images/R8jZ.gif') },
        { key: 6, textTitle: t("Playlist") + '№6', textUnderTitile: t("Duration"), imagePlaylist: require('../images/R8jZ.gif') },
        { key: 7, textTitle: t("Playlist") + '№7', textUnderTitile: t("Duration"), imagePlaylist: require('../images/R8jZ.gif') },
        { key: 8, textTitle: t("Playlist") + '№8', textUnderTitile: t("Duration"), imagePlaylist: require('../images/R8jZ.gif') },
    ]);

    return (
        <View style={styles.lineargradient}>

            <View style={styles.container}>
                <ScrollView>

                    <View style={{ marginLeft: 10, marginTop: 20 }}>
                        <FlatList
                            keyExtractor={(item) => item.key}
                            data={playlists}
                            renderItem={({ item }) => (
                                <View style={styles.playlistIcon}>

                                    <View style={{ marginTop: 15 }}>
                                        <Avatar source={item.imagePlaylist} size='large'></Avatar>
                                    </View>
                                    <View style={{ marginLeft: 20, marginTop: 15, justifyContent: 'space-between' }}>
                                        <TouchableOpacity onPress={() => navigation.navigate('PlayList')}>
                                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#DC2A8A' }}>{item.textTitle}</Text>
                                            <Text style={{ fontSize: 17, color: '#A09F9F' }}>{item.textUnderTitile}</Text>
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
                    <TouchableOpacity onPress={() => navigation.navigate('MediaScreen')}>
                        <svg width="42" height="43" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 21.5V34.1154L27.6667 27.8077L16 21.5Z" fill="#FFB1CE" />
                            <path d="M37.6667 42H4.33333C3.44956 41.9991 2.60225 41.6666 1.97733 41.0753C1.35241 40.484 1.00093 39.6823 1 38.8462V16.7692C1.00093 15.933 1.35241 15.1314 1.97733 14.5401C2.60225 13.9488 3.44956 13.6163 4.33333 13.6154H37.6667C38.5504 13.6163 39.3977 13.9488 40.0227 14.5401C40.6476 15.1314 40.9991 15.933 41 16.7692V38.8462C40.9991 39.6823 40.6476 40.484 40.0227 41.0753C39.3977 41.6666 38.5504 41.9991 37.6667 42ZM4.33333 16.7692V38.8462H37.6667V16.7692H4.33333Z" fill="#FFB1CE" />
                            <path d="M37.6667 7.30769H4.33333V10.4615H37.6667V7.30769Z" fill="#FFB1CE" />
                            <path d="M34.3333 1H7.66667V4.15385H34.3333V1Z" fill="#FFB1CE" />
                            <path d="M16 21.5V34.1154L27.6667 27.8077L16 21.5Z" stroke="#E1007A" />
                            <path d="M37.6667 42H4.33333C3.44956 41.9991 2.60225 41.6666 1.97733 41.0753C1.35241 40.484 1.00093 39.6823 1 38.8462V16.7692C1.00093 15.933 1.35241 15.1314 1.97733 14.5401C2.60225 13.9488 3.44956 13.6163 4.33333 13.6154H37.6667C38.5504 13.6163 39.3977 13.9488 40.0227 14.5401C40.6476 15.1314 40.9991 15.933 41 16.7692V38.8462C40.9991 39.6823 40.6476 40.484 40.0227 41.0753C39.3977 41.6666 38.5504 41.9991 37.6667 42ZM4.33333 16.7692V38.8462H37.6667V16.7692H4.33333Z" stroke="#E1007A" />
                            <path d="M37.6667 7.30769H4.33333V10.4615H37.6667V7.30769Z" stroke="#E1007A" />
                            <path d="M34.3333 1H7.66667V4.15385H34.3333V1Z" stroke="#E1007A" />
                        </svg>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
                        <svg width="49" height="42" viewBox="0 0 49 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25.5001 0.345279C25.2102 0.121527 24.853 0 24.4852 0C24.1175 0 23.7603 0.121527 23.4703 0.345279L0 18.4467L2.02974 20.9856L4.9 18.7722V38.7692C4.90177 39.6255 5.2465 40.4463 5.85874 41.0518C6.47097 41.6573 7.30084 41.9983 8.16667 42H40.8333C41.6992 41.9984 42.5292 41.6575 43.1414 41.052C43.7537 40.4464 44.0984 39.6256 44.1 38.7692V18.7869L46.9703 21L49 18.4609L25.5001 0.345279ZM27.7667 38.7692H21.2333V25.8461H27.7667V38.7692ZM31.0333 38.7692V25.8461C31.0323 24.9896 30.6879 24.1684 30.0755 23.5627C29.463 22.957 28.6327 22.6163 27.7667 22.6153H21.2333C20.3672 22.6162 19.5368 22.9569 18.9244 23.5626C18.312 24.1683 17.9675 24.9895 17.9667 25.8461V38.7692H8.16667V16.2531L24.5 3.66926L40.8333 16.2701V38.7692H31.0333Z" fill="#FFB1CE" />
                        </svg>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('SettingsScreen')}>
                        <Svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M37.9868 22.1432C37.9868 21.7672 37.9868 21.3911 37.9868 21C37.9868 20.6089 37.9868 20.2328 37.9868 19.8417L40.9532 17.3146C41.5 16.8453 41.8588 16.203 41.9662 15.501C42.0737 14.7991 41.9228 14.0828 41.5403 13.4787L37.8941 7.46167C37.6232 7.00478 37.2336 6.62528 36.7645 6.36125C36.2953 6.09723 35.7631 5.95796 35.2213 5.95742C34.8855 5.95491 34.5515 6.00572 34.2325 6.10784L30.4782 7.34133C29.83 6.92196 29.1539 6.54506 28.4542 6.21314L27.6663 2.42241C27.525 1.72986 27.1381 1.10775 26.5732 0.664987C26.0083 0.222227 25.3014 -0.012976 24.5763 0.000552711H17.3458C16.6207 -0.012976 15.9139 0.222227 15.349 0.664987C14.7841 1.10775 14.3971 1.72986 14.2558 2.42241L13.4679 6.21314C12.7633 6.54498 12.082 6.92187 11.4285 7.34133L7.75145 6.04767C7.429 5.96588 7.0951 5.9354 6.76266 5.95742C6.22079 5.95796 5.6886 6.09723 5.21947 6.36125C4.75034 6.62528 4.36076 7.00478 4.08983 7.46167L0.443668 13.4787C0.0830485 14.0819 -0.0509563 14.7884 0.0646049 15.4772C0.180166 16.166 0.538103 16.7943 1.07711 17.2544L3.99713 19.8568C3.99713 20.2328 3.99713 20.6089 3.99713 21C3.99713 21.3911 3.99713 21.7672 3.99713 22.1583L1.07711 24.6854C0.522877 25.1487 0.155151 25.7882 0.0391889 26.4905C-0.0767728 27.1927 0.0665308 27.9122 0.443668 28.5213L4.08983 34.5383C4.36076 34.9952 4.75034 35.3747 5.21947 35.6387C5.6886 35.9028 6.22079 36.042 6.76266 36.0426C7.09846 36.0451 7.43244 35.9943 7.75145 35.8922L11.5058 34.6587C12.1539 35.078 12.8301 35.4549 13.5297 35.7869L14.3176 39.5776C14.4589 40.2701 14.8459 40.8923 15.4108 41.335C15.9757 41.7778 16.6825 42.013 17.4076 41.9994H24.6999C25.425 42.013 26.1319 41.7778 26.6968 41.335C27.2617 40.8923 27.6486 40.2701 27.7899 39.5776L28.5778 35.7869C29.2825 35.455 29.9637 35.0781 30.6172 34.6587L34.3561 35.8922C34.6751 35.9943 35.0091 36.0451 35.3449 36.0426C35.8867 36.042 36.4189 35.9028 36.8881 35.6387C37.3572 35.3747 37.7468 34.9952 38.0177 34.5383L41.5403 28.5213C41.9009 27.9181 42.0349 27.2116 41.9193 26.5228C41.8038 25.834 41.4458 25.2057 40.9068 24.7456L37.9868 22.1432ZM35.2213 33.0341L29.922 31.2891C28.6815 32.3122 27.2637 33.1119 25.7351 33.6508L24.6381 39.0511H17.3458L16.2489 33.711C14.7323 33.1568 13.3222 32.3584 12.0774 31.3493L6.76266 33.0341L3.11649 27.017L7.31885 23.4068C7.03318 21.8497 7.03318 20.2556 7.31885 18.6985L3.11649 14.983L6.76266 8.96593L12.062 10.7109C13.3025 9.68781 14.7203 8.88809 16.2489 8.34919L17.3458 2.9489H24.6381L25.7351 8.28902C27.2516 8.84322 28.6617 9.64156 29.9065 10.6507L35.2213 8.96593L38.8674 14.983L34.6651 18.5932C34.9508 20.1503 34.9508 21.7444 34.6651 23.3015L38.8674 27.017L35.2213 33.0341Z" fill="#FFB1CE" />
                            <Path d="M20.992 30.0256C19.1586 30.0256 17.3663 29.4962 15.8419 28.5045C14.3175 27.5127 13.1293 26.1031 12.4277 24.4539C11.7261 22.8047 11.5425 20.99 11.9002 19.2392C12.2579 17.4884 13.1407 15.8802 14.4372 14.618C15.7336 13.3557 17.3853 12.4961 19.1835 12.1479C20.9817 11.7996 22.8456 11.9784 24.5394 12.6615C26.2333 13.3446 27.681 14.5014 28.6996 15.9857C29.7182 17.4699 30.2619 19.2149 30.2619 21C30.2743 22.1886 30.043 23.3677 29.5815 24.4682C29.12 25.5686 28.4377 26.5684 27.5744 27.4089C26.7111 28.2494 25.6843 28.9138 24.554 29.3631C23.4237 29.8124 22.2128 30.0376 20.992 30.0256ZM20.992 14.983C20.1752 14.9644 19.3631 15.1074 18.6047 15.4032C17.8463 15.6991 17.1574 16.1416 16.5797 16.7041C16.002 17.2665 15.5475 17.9373 15.2437 18.6756C14.9398 19.414 14.793 20.2048 14.812 21C14.793 21.7952 14.9398 22.586 15.2437 23.3244C15.5475 24.0627 16.002 24.7335 16.5797 25.2959C17.1574 25.8584 17.8463 26.3009 18.6047 26.5968C19.3631 26.8926 20.1752 27.0356 20.992 27.017C21.8087 27.0356 22.6209 26.8926 23.3793 26.5968C24.1376 26.3009 24.8265 25.8584 25.4042 25.2959C25.9819 24.7335 26.4364 24.0627 26.7403 23.3244C27.0441 22.586 27.1909 21.7952 27.1719 21C27.1909 20.2048 27.0441 19.414 26.7403 18.6756C26.4364 17.9373 25.9819 17.2665 25.4042 16.7041C24.8265 16.1416 24.1376 15.6991 23.3793 15.4032C22.6209 15.1074 21.8087 14.9644 20.992 14.983Z" fill="#FFB1CE" />
                        </Svg>
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
        borderTopRightRadius: 10,
        backgroundColor: '#5C0A72'
    },
    icons: {
        flex: 1,
        marginLeft: '10%',
        marginRight: '10%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'

    },
    iconsText: {
        flex: 1,
        marginLeft: '8%',
        marginRight: '10%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    playlistIcon: {
        flexDirection: "row",
        flex: 1
    },
    playlistTitle: {

    }
})