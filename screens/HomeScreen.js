import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AuthScreen } from "./AuthScreen";
import { Avatar, normalize } from "react-native-elements";
import Svg, { Path } from "react-native-svg";
import i18n from '../languages/i18n';
import { useTranslation } from "react-i18next";

const lang = [
    { label: 'english', value: "en" },
    { label: 'russin', value: 'ru' }
];




export const HomeScreen = ({ navigation }) => {

    const { t, i18n } = useTranslation()

    return (
        <ImageBackground source={require('../images/backgroundHomeScreen.png')} style={styles.lineargradient}>
            <View style={styles.containerText}>
                <Text style={styles.text}>{t("WhatMoodToday")}</Text>
            </View>


            <View style={styles.container}>
                <View style={styles.toubchble}>

                    <TouchableOpacity onPress={() => navigation.navigate("ChoiceEmojiScreen")}>
                        <View style={{ position: 'absolute', top: '33%', left: '33%', }}>
                            <Text style={{ fontSize: 30, fontWeight: '600', color: '#FFCBDE' }}>{t("Start")}</Text>
                        </View>

                        <svg width="253" height="244" viewBox="0 0 253 244" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M201.59 102.771C201.59 132.127 190.576 200.042 140.229 185.69C111.264 185.69 55.2669 153.798 65.756 125.095C65.7561 108.086 40.0682 75.3884 51.5958 48.0226C58.0718 32.6492 95.9731 8.98652 132.886 25.6984C161.851 25.6984 217.848 55.0778 201.59 102.771Z" fill="url(#paint0_radial_172_41)" fill-opacity="0.72" />
                            <path d="M20.3749 139.746C26.6517 108.168 35.3924 72.9664 85.889 59.1928C110.973 44.1186 139.67 20.6369 167.357 36.847C184.095 46.6469 235.855 89.3584 239.017 119.057C240.794 135.741 234.833 170.779 184.095 156.079C163.695 173.501 29.2053 189.511 20.3749 139.746Z" fill="url(#paint1_linear_172_41)" fill-opacity="0.59" />
                            <path d="M130.159 21.0951C165.678 -1.88211 218.367 24.4746 213.735 78.9979C218.808 108.945 183.974 175.033 155.236 169.126C139.296 172.051 113.151 204.234 85.4849 197.023C69.9428 192.972 46.0109 149.132 55.2078 108.093C50.1347 78.1458 82.6144 12.4892 130.159 21.0951Z" fill="url(#paint2_radial_172_41)" fill-opacity="0.76" />
                            <defs>
                                <radialGradient id="paint0_radial_172_41" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(126.558 103.813) rotate(89.9878) scale(116.193 156.378)">
                                    <stop stop-color="#E1007A" />
                                    <stop offset="1" stop-color="#5C078F" stop-opacity="0" />
                                </radialGradient>
                                <linearGradient id="paint1_linear_172_41" x1="164.758" y1="190.971" x2="59.433" y2="-15.3804" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#7725A9" />
                                    <stop offset="1" stop-color="#7725A9" stop-opacity="0" />
                                </linearGradient>
                                <radialGradient id="paint2_radial_172_41" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(134.103 103.813) rotate(-10.3999) scale(85.0645 123.124)">
                                    <stop stop-color="#DC2A8A" />
                                    <stop offset="1" stop-color="#7725A9" />
                                </radialGradient>
                            </defs>
                        </svg>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.containerNav}>
                <View style={styles.icons}>
                    {/* <Avatar source={require('../images/MediatekaIconFigma.png')} rounded size={40} onPress={() => navigation.navigate("MediaScreen")}>
                    </Avatar> */}
                    <TouchableOpacity onPress={() => navigation.navigate("MediaScreen")}>
                        <Svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M15 20.5V33.1154L26.6667 26.8077L15 20.5Z" fill="#FFB1CE" />
                            <Path d="M36.6667 41H3.33333C2.44956 40.9991 1.60225 40.6666 0.977334 40.0753C0.352414 39.484 0.000926501 38.6823 0 37.8462V15.7692C0.000926501 14.933 0.352414 14.1314 0.977334 13.5401C1.60225 12.9488 2.44956 12.6163 3.33333 12.6154H36.6667C37.5504 12.6163 38.3977 12.9488 39.0227 13.5401C39.6476 14.1314 39.9991 14.933 40 15.7692V37.8462C39.9991 38.6823 39.6476 39.484 39.0227 40.0753C38.3977 40.6666 37.5504 40.9991 36.6667 41ZM3.33333 15.7692V37.8462H36.6667V15.7692H3.33333Z" fill="#FFB1CE" />
                            <Path d="M36.6667 6.30769H3.33333V9.46154H36.6667V6.30769Z" fill="#FFB1CE" />
                            <Path d="M33.3333 0H6.66667V3.15385H33.3333V0Z" fill="#FFB1CE" />
                        </Svg>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
                        <Svg width="51" height="44" viewBox="0 0 51 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M26.5001 1.34528C26.2102 1.12153 25.853 1 25.4852 1C25.1175 1 24.7603 1.12153 24.4703 1.34528L1 19.4467L3.02974 21.9856L5.9 19.7722V39.7692C5.90177 40.6255 6.2465 41.4463 6.85874 42.0518C7.47097 42.6573 8.30084 42.9983 9.16667 43H41.8333C42.6992 42.9984 43.5292 42.6575 44.1414 42.052C44.7537 41.4464 45.0984 40.6256 45.1 39.7692V19.7869L47.9703 22L50 19.4609L26.5001 1.34528ZM28.7667 39.7692H22.2333V26.8461H28.7667V39.7692ZM32.0333 39.7692V26.8461C32.0323 25.9896 31.6879 25.1684 31.0755 24.5627C30.463 23.957 29.6327 23.6163 28.7667 23.6153H22.2333C21.3672 23.6162 20.5368 23.9569 19.9244 24.5626C19.312 25.1683 18.9675 25.9895 18.9667 26.8461V39.7692H9.16667V17.2531L25.5 4.66926L41.8333 17.2701V39.7692H32.0333Z" fill="#FFB1CE" stroke="#E1007A" />
                        </Svg>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("SettingsScreen")}>
                        <Svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M37.9868 22.1432C37.9868 21.7672 37.9868 21.3911 37.9868 21C37.9868 20.6089 37.9868 20.2328 37.9868 19.8417L40.9532 17.3146C41.5 16.8453 41.8588 16.203 41.9662 15.501C42.0737 14.7991 41.9228 14.0828 41.5403 13.4787L37.8941 7.46167C37.6232 7.00478 37.2336 6.62528 36.7645 6.36125C36.2953 6.09723 35.7631 5.95796 35.2213 5.95742C34.8855 5.95491 34.5515 6.00572 34.2325 6.10784L30.4782 7.34133C29.83 6.92196 29.1539 6.54506 28.4542 6.21314L27.6663 2.42241C27.525 1.72986 27.1381 1.10775 26.5732 0.664987C26.0083 0.222227 25.3014 -0.012976 24.5763 0.000552711H17.3458C16.6207 -0.012976 15.9139 0.222227 15.349 0.664987C14.7841 1.10775 14.3971 1.72986 14.2558 2.42241L13.4679 6.21314C12.7633 6.54498 12.082 6.92187 11.4285 7.34133L7.75145 6.04767C7.429 5.96588 7.0951 5.9354 6.76266 5.95742C6.22079 5.95796 5.6886 6.09723 5.21947 6.36125C4.75034 6.62528 4.36076 7.00478 4.08983 7.46167L0.443668 13.4787C0.0830485 14.0819 -0.0509563 14.7884 0.0646049 15.4772C0.180166 16.166 0.538103 16.7943 1.07711 17.2544L3.99713 19.8568C3.99713 20.2328 3.99713 20.6089 3.99713 21C3.99713 21.3911 3.99713 21.7672 3.99713 22.1583L1.07711 24.6854C0.522877 25.1487 0.155151 25.7882 0.0391889 26.4905C-0.0767728 27.1927 0.0665308 27.9122 0.443668 28.5213L4.08983 34.5383C4.36076 34.9952 4.75034 35.3747 5.21947 35.6387C5.6886 35.9028 6.22079 36.042 6.76266 36.0426C7.09846 36.0451 7.43244 35.9943 7.75145 35.8922L11.5058 34.6587C12.1539 35.078 12.8301 35.4549 13.5297 35.7869L14.3176 39.5776C14.4589 40.2701 14.8459 40.8923 15.4108 41.335C15.9757 41.7778 16.6825 42.013 17.4076 41.9994H24.6999C25.425 42.013 26.1319 41.7778 26.6968 41.335C27.2617 40.8923 27.6486 40.2701 27.7899 39.5776L28.5778 35.7869C29.2825 35.455 29.9637 35.0781 30.6172 34.6587L34.3561 35.8922C34.6751 35.9943 35.0091 36.0451 35.3449 36.0426C35.8867 36.042 36.4189 35.9028 36.8881 35.6387C37.3572 35.3747 37.7468 34.9952 38.0177 34.5383L41.5403 28.5213C41.9009 27.9181 42.0349 27.2116 41.9193 26.5228C41.8038 25.834 41.4458 25.2057 40.9068 24.7456L37.9868 22.1432ZM35.2213 33.0341L29.922 31.2891C28.6815 32.3122 27.2637 33.1119 25.7351 33.6508L24.6381 39.0511H17.3458L16.2489 33.711C14.7323 33.1568 13.3222 32.3584 12.0774 31.3493L6.76266 33.0341L3.11649 27.017L7.31885 23.4068C7.03318 21.8497 7.03318 20.2556 7.31885 18.6985L3.11649 14.983L6.76266 8.96593L12.062 10.7109C13.3025 9.68781 14.7203 8.88809 16.2489 8.34919L17.3458 2.9489H24.6381L25.7351 8.28902C27.2516 8.84322 28.6617 9.64156 29.9065 10.6507L35.2213 8.96593L38.8674 14.983L34.6651 18.5932C34.9508 20.1503 34.9508 21.7444 34.6651 23.3015L38.8674 27.017L35.2213 33.0341Z" fill="#FFB1CE" />
                            <Path d="M20.992 30.0256C19.1586 30.0256 17.3663 29.4962 15.8419 28.5045C14.3175 27.5127 13.1293 26.1031 12.4277 24.4539C11.7261 22.8047 11.5425 20.99 11.9002 19.2392C12.2579 17.4884 13.1407 15.8802 14.4372 14.618C15.7336 13.3557 17.3853 12.4961 19.1835 12.1479C20.9817 11.7996 22.8456 11.9784 24.5394 12.6615C26.2333 13.3446 27.681 14.5014 28.6996 15.9857C29.7182 17.4699 30.2619 19.2149 30.2619 21C30.2743 22.1886 30.043 23.3677 29.5815 24.4682C29.12 25.5686 28.4377 26.5684 27.5744 27.4089C26.7111 28.2494 25.6843 28.9138 24.554 29.3631C23.4237 29.8124 22.2128 30.0376 20.992 30.0256ZM20.992 14.983C20.1752 14.9644 19.3631 15.1074 18.6047 15.4032C17.8463 15.6991 17.1574 16.1416 16.5797 16.7041C16.002 17.2665 15.5475 17.9373 15.2437 18.6756C14.9398 19.414 14.793 20.2048 14.812 21C14.793 21.7952 14.9398 22.586 15.2437 23.3244C15.5475 24.0627 16.002 24.7335 16.5797 25.2959C17.1574 25.8584 17.8463 26.3009 18.6047 26.5968C19.3631 26.8926 20.1752 27.0356 20.992 27.017C21.8087 27.0356 22.6209 26.8926 23.3793 26.5968C24.1376 26.3009 24.8265 25.8584 25.4042 25.2959C25.9819 24.7335 26.4364 24.0627 26.7403 23.3244C27.0441 22.586 27.1909 21.7952 27.1719 21C27.1909 20.2048 27.0441 19.414 26.7403 18.6756C26.4364 17.9373 25.9819 17.2665 25.4042 16.7041C24.8265 16.1416 24.1376 15.6991 23.3793 15.4032C22.6209 15.1074 21.8087 14.9644 20.992 14.983Z" fill="#FFB1CE" />
                        </Svg>
                    </TouchableOpacity>

                </View>
            </View>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    lineargradient: {
        width: '100%',
        height: '100%',
    },
    container: {
        flex: 2,
        flexDirection: 'row',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerText: {
        flex: 2,
        width: '100%',
        height: '100%',
        marginTop: '10%',
        marginLeft: '10%'
    },
    toubchble: {
        borderRadius: 40,
        alignContent: 'center',

    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#E1007A'
    },
    containerNav: {
        flex: 0.5,
        flexDirection: 'column',
        alignContent: 'center',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        backgroundColor: '#5C0A72',
        opacity: 0.55,
        height: 60
    },
    icons: {
        flex: 1,
        marginLeft: '10%',
        marginRight: '10%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    iconsText: {
        flex: 1,
        marginLeft: '8%',
        marginRight: '10%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})