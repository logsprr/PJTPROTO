/* import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },

    beforeProfileImage: {
        height: 270,
        justifyContent: 'center'
    },

    cover: {
        width: 'auto',
        height: '100%',
    },

    onProfileImage: {
        position: 'absolute',
        top: 190,
        width: '100%',
        alignItems: 'center'
    },

    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 100,
        borderColor: '#FFF',
        borderWidth: 3
    },

    afterProfileImage: {
        marginTop: 80,
        width: '100%',
        height: 'auto',
        alignItems: 'center',
        paddingHorizontal: 10
    },

    name: {
        fontSize: 21
    },

    job: {
        marginTop: 10,
        fontSize: 15,
        color: 'rgba(0, 0, 0, 0.65)'
    },

    actions: {
        marginTop: 25,
        flexDirection: 'row',

        
    },

    actionsButton: {
        justifyContent: 'space-around',
        backgroundColor: "#FFF",
        alignItems: 'center',
        paddingVertical: 7,
        marginHorizontal: 10,
        borderRadius: 50,
        
        width: 60,
        height: 60,

        shadowOpacity: 0.16,
        shadowRadius: 3 ,
        shadowOffset: {
            height: 4
        }

    },

    actionsIcon: {
        width: 35,
        height: 35
    },

    actionsText: {
        fontSize: 7
    },

    socialMidias: {
        width: '100%',
        marginTop: 20,
        paddingHorizontal: 10
    },

    socialMidiasView: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0, 0, 0, 0.1)',
        paddingVertical: 10,
        alignItems: "center"
    },

    socialMidiasIcon: {
        width: 24,
        height: 24,
        
    },

    socialMidiasText: {
        marginLeft: 10,
        fontSize: 19
    }


})

export default styles; */

import {StyleSheet} from 'react-native'
import {ThemeUtils, Color} from "../../utils";
import Constants  from 'expo-constants'

const HEADER_IMAGE_HEIGHT = ThemeUtils.relativeHeight(30);
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    /*header style*/
    headerLeftIcon: {
        position: 'absolute',
        left: ThemeUtils.relativeWidth(2),
        color: "#000"
    },
    headerRightIcon: {
        position: 'absolute',
        right: ThemeUtils.relativeWidth(2),
    },
    headerStyle: {
        height: ThemeUtils.APPBAR_HEIGHT,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 200,
        marginTop: Constants.statusBarHeight,
        //shadowColor: '#000',
        shadowOffset: { width: -100, height: 0 },
        shadowOpacity: 0.4,
        shadowRadius: 10,  
        elevation: 5
    },
    headerTitle: {
        textAlign: 'center',
        justifyContent: 'center',
        color: "#000",
        fontSize: ThemeUtils.fontNormal
    },
    /*Top Image Style*/
    headerImageStyle: {
        height: HEADER_IMAGE_HEIGHT,
        width: '100%',
        top: 0,
        alignSelf: 'center',
        position: 'absolute',
    },
    /*profile image style*/
    profileImage: {
        position: 'absolute',
        zIndex: 200,
        marginTop: Constants.statusBarHeight
    },
    /*profile title style*/
    profileTitle: {
        position: 'absolute',
        zIndex: 100,
        textAlign: 'center',
        color: Color.BLACK,
        top: ThemeUtils.relativeHeight(35),
        left: 0,
        right: 0,
        fontSize: ThemeUtils.fontXLarge
    },
    /*song count text style*/
    songCountStyle: {
        position: 'absolute',
        textAlign: 'center',
        fontWeight: '400',
        top: ThemeUtils.relativeHeight(40),
        left: 0,
        right: 0,
        fontSize: ThemeUtils.fontNormal,
    },
    artistCardContainerStyle: {
        backgroundColor: Color.CARD_BG_COLOR,
        elevation: 5,
        shadowRadius: 3,
        shadowOffset: {
            width: 3,
            height: 3
        },
        padding: 15,
        marginVertical: ThemeUtils.relativeWidth(1),
        marginHorizontal: ThemeUtils.relativeWidth(2),
        flexDirection: 'row',
        alignItems: 'center'
    },
    artistImage: {
        height: ThemeUtils.relativeWidth(15),
        width: ThemeUtils.relativeWidth(15),
        borderRadius: ThemeUtils.relativeWidth(7.5)
    },
    songTitleStyle: {
        fontSize: ThemeUtils.fontNormal,
        color: Color.BLACK
    },
    cardTextContainer: {
        flex: 1,
        margin: ThemeUtils.relativeWidth(3)
    },

    actions: {
        marginTop: 25,
        flexDirection: 'row',
        width: "100%",
        justifyContent: "center"
        
    },

    actionsButton: {
        justifyContent: 'space-around',
        backgroundColor: "#FFF",
        alignItems: 'center',
        paddingVertical: 7,
        marginHorizontal: 10,
        borderRadius: 50,
        
        width: 60,
        height: 60,

        shadowOpacity: 0.16,
        shadowRadius: 3 ,
        shadowOffset: {
            height: 4
        }

    },

    actionsIcon: {
        width: 35,
        height: 35
    },

    actionsText: {
        fontSize: 7
    },

    socialMidias: {
        width: '100%',
        marginTop: 20,
        paddingHorizontal: 10
    },

    socialMidiasView: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0, 0, 0, 0.1)',
        paddingVertical: 10,
        alignItems: "center"
    },

    socialMidiasIcon: {
        width: 24,
        height: 24,
        
    },

    socialMidiasText: {
        marginLeft: 10,
        fontSize: 19
    }

})

export default styles