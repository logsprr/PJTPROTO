import { StyleSheet } from 'react-native'

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

export default styles;