import React from 'react';
import { View, Text, TextInput, Image, KeyboardAvoidingView, Platform, Dimensions, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import styles from '../../themes/constants/styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/FontAwesome';
import firebase from 'firebase';
import { Ionicons } from '@expo/vector-icons';
import moment from 'moment';
class ChatScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            person: {
                name: props.route.params.name,
                phone: props.route.params.phone,
                avatar: props.route.params.avatar,
                id: props.route.params.id
            },
            textMessage: '',
            messageList: [],
            refwidth: null,
            type: '',
            random: '',
            arr: [],
            arrayBadge: [],
        }
    }
    componentDidMount() {
        const parent = this.props.navigation.dangerouslyGetParent();
        parent.setOptions({
            tabBarVisible: false
        });
        var usersRef = firebase.database().ref('users/');
        var hopperRef = usersRef.child('064992816487');

        hopperRef.update({
            "status": "online"
        });
        firebase.database().ref('messages').child('064992816487').child(this.state.person.phone)
            .on('child_added', (value) => {
                this.setState((prevState) => {
                    return {
                        messageList: [value.val(), ...prevState.messageList]
                    }
                })
            })
    }

    // componentWillUnmount() {
    //     var usersRef = firebase.database().ref('users/');
    //     var hopperRef = usersRef.child('064992816487');
    //     hopperRef.update({
    //         "status": "offline"
    //     });
    //     const _id = this.state.person.id * -1;
    //     console.log(_id);
    //     firebase.database().ref('users/' + '064992816487' + '/friends/' + _id + '/badge').once('value', snapshot => {
    //         if (snapshot.val() == null) {
    //             console.log(snapshot.val())
    //         }
    //         else {
    //             const val = 0;
    //             firebase.database().ref('users/' + '064992816487' + '/friends/' + _id).update({
    //                 badge: val
    //             })
    //             console.log(val);
    //         }
    //     })
    // }
    convertTime = (time) => {
        let d = new Date(time);

        let c = new Date();

        let result = (d.getHours() < 10 ? '0' : '') + d.getHours() + ':';
        result += (d.getMinutes() < 10 ? '0' : '') + d.getMinutes();
        if (c.getDay() !== d.getDay()) {
            result = d.getDay() + ' ' + d.getMonth() + ' ' + result;
        }

        return result;
    }
    handleChange = key => val => {
        this.setState({ [key]: val })
    }
    sendMessage = async () => {
        const type = this.state.type;
        if (this.state.textMessage.length > 0) {
            let msgId = firebase.database().ref('messages').child('064992816487').child(this.state.person.phone).push().key;
            let updates = {};
            let message = {
                message: this.state.textMessage,
                time: firebase.database.ServerValue.TIMESTAMP,
                from: '064992816487',
                type: type == 1 ? 'image' : 'text',
                id: this.state.person.id
            }
            const id = this.state.person.id * (-1);
            updates['messages/' + this.state.person.phone + '/' + '064992816487' + '/' + msgId] = message;
            updates['messages/' + '064992816487' + '/' + this.state.person.phone + '/' + msgId] = message;
            firebase.database().ref().update(updates);
            this.setState({ textMessage: '' });
            firebase.database().ref('users/' + this.state.person.phone + '/friends').on('child_added', async (val) => {
                console.log("aqui")
                this.setState((prevState) => {
                    return {
                        new: [...prevState.arrayBadge, val.val()]
                    }
                })
                setTimeout(() => {
                    console.log(this.state.arrayBadge)
                    let put = this.state.arrayBadge.map((item) => {
                        console.log(item.id);
                        if (item.phone == this.state.person.phone) {
                            console.log('aqui aqui')
                            firebase.database().ref('users/' + '064992816487/' + 'friends/' + item.id).update({
                                time: firebase.database.ServerValue.TIMESTAMP,
                                badge: 19
                            })
                        } else {
                            console.log('deu erro');
                        }
                    })
                }, 1000)
            });

        }
    }
    getwith = ({ item }) => {
        if (item > 5) {
            this.setState.refwidth('20%');
        }
        else if (item > 10) {
            this.setState.refwidth('40%');
        }
        else if (item > 20) {
            this.setState.refwidth('60%');
        }
        else if (item > 30) {
            this.setState.refwidth('80%');
        }
        else if (item > 40) {
            this.setState.refwidth('90%');
        }
    }

    renderPhoto = () => {
        const rand = this.state.random;
        this.setState({
            textMessage: rand,
        })
        this.setState({
            type: 1,
        })
        this.sendMessage();

    }

    renderRow = ({ item }) => {
        return (
            <View style={{
                flexDirection: 'row',
                width: this.getwith(item.message),
                alignSelf: item.from === '064992816487' ? 'flex-end' : 'flex-start',
                backgroundColor: item.from === '064992816487' ? '#ced6e0' : '#ffffff',
                borderColor: item.from === '064992816487' ? '#ced6e0' : '#a4b0be',
                borderWidth: item === '064992816487' ? 0 : 1,
                borderRadius: 10,
                marginBottom: 10,
            }}>
                {item.type == 'text' ? <Text style={{
                    color: '#2f3542',
                    padding: 10,
                    fontSize: 15,

                }}>
                    {item.message} <Text style={{
                        color: item.from === '064992816487' ? '#ced6e0' : '#ffffff',
                    }}>
                        .....
                    </Text>
                    <Text style={{
                        color: '#57606f',
                        paddingRight: -20,
                        fontSize: 12,
                    }}>
                        {moment(item.time).format('HH:MM')}
                    </Text>
                </Text> : <View style={{
                    width: 320,
                    height: 320,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                        <Image
                            source={{ uri: item.message }}
                            style={{
                                width: 300,
                                height: 300,
                                alignContent: 'center',
                                justifyContent: 'center',
                                paddingTop: 10,
                                paddingRight: 10,
                            }}
                        />
                    </View>}


            </View>
        )
    }
    render() {
        let { height, width } = Dimensions.get('window');
        return (
            <KeyboardAvoidingView
                style={styles.container}
                behavior='position' keyboardVerticalOffset={80}
                enabled={Platform.OS === 'ios'}
            >
                <SafeAreaView>
                    <FlatList
                        inverted
                        style={{ padding: 10, height: height * 0.08, paddingBottom: 40 }}
                        data={this.state.messageList}
                        renderItem={this.renderRow}
                        contentInset={{ top: 0, bottom: 30, left: 0, right: 0 }}
                        contentInsetAdjustmentBehavior="automatic"
                        keyExtractor={(item, index) => index.toString()}
                    />
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity
                            onPress={this.sendImage}
                            style={{
                                paddingLeft: -20,
                                paddingTop: 25,
                                paddingBottom: 20,

                            }}
                        >
                            <Icon2 name="pluscircle" size={28} />
                        </TouchableOpacity>
                        <TextInput
                            style={[styles.input2, { marginLeft: 5, borderRadius: 15 }]}
                            value={this.state.textMessage}
                            placeholder="Digite aqui"
                            placeholderTextColor="#000"
                            onChangeText={this.handleChange('textMessage')}
                        />
                        <TouchableOpacity onPress={this.sendMessage}
                            style={{
                                paddingLeft: 10,
                                paddingTop: 25,
                                paddingBottom: 20,

                            }}
                        >
                            <Icon name="md-send" size={28} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                paddingLeft: 10,
                                paddingTop: 25,
                                paddingBottom: 20,

                            }}
                        >
                            <Icon3 name="microphone" size={28} />
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </KeyboardAvoidingView>
        )
    }
}


export default ChatScreen;