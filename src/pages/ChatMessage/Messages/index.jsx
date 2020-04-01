import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as LoginActions from "../../../store/modules/Login/LoginActions";
import * as ChatActions from '../../../store/modules/Chat/ChatAction';
import { View, Text, TextInput, Image, KeyboardAvoidingView, Platform, Dimensions, TouchableOpacity, FlatList, SafeAreaView, Alert, Clipboard } from 'react-native';
import styles from '../../../themes/constants/styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/FontAwesome';
import sentCheck from '../../../assets/icons/png/sent.png';
import deliverredCheck from '../../../assets/icons/png/delivered.png';
import viewedCheck from '../../../assets/icons/png/viewed.png';
import firebase from 'firebase';
import { Ionicons } from '@expo/vector-icons';
import moment from 'moment';
import { Button, Paragraph, Menu, Divider, Provider } from 'react-native-paper';
import { Appbar } from 'react-native-paper';
class ChatScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            person: {
                name: props.route.params.name,
                phone: props.route.params.phone,
                avatar: props.route.params.avatar,
                id: props.route.params.id,
                messageId: props.route.params.lastmessageId,
                from: props.route.params.from
            },
            textMessage: '',
            messageList: [],
            refwidth: null,
            type: '',
            random: '',
            arr: [],
            arrayBadge: [],
            textAllmessage: true,
            online: false,
            visible: false
        }
    }
    componentDidMount() {
        const { login, navigation, route, loadRequestChat } = this.props;
        console.log(route.name)
        const parent = navigation.dangerouslyGetParent();
        parent.setOptions({
            tabBarVisible: false
        });
        try {
            firebase.database().ref('enterprises/' + login.result.idEnterprise + '/messages').child(login.result.phone).child(this.state.person.phone)
                .on('child_added', (value) => {
                    this.setState((prevState) => {
                        return {
                            messageList: [value.val(), ...prevState.messageList],
                            textAllmessage: false
                        }
                    })
                })
            firebase.database().ref('enterprises/' + login.result.idEnterprise + '/messages/')
                .on('child_added', (value) => {
                    loadRequestChat(value.val())
                })
        } catch (error) {
            this.setState({
                textAllmessage: true
            })
        }
        firebase.database().ref('enterprises/' + login.result.idEnterprise +
            '/users/' + this.state.person.id).child('status')
            .once('value', (value) => {
                this.setState({
                    online: value.val()
                })
            })
        if (route.name == 'Chat') {
            firebase.database().ref('enterprises/' + login.result.idEnterprise +
                '/users/' + login.result._id + '/friends').child(this.state.person.id)
                .update({
                    badge: 0
                })

            if (this.state.person.from != login.result.phone) {
                firebase.database().ref('enterprises/' + login.result.idEnterprise + '/messages/' + this.state.person.phone + '/' + login.result.phone + '/' + this.state.person.messageId).update({
                    delivered: 'viewed'
                });
                firebase.database().ref('enterprises/' + login.result.idEnterprise + '/messages/' + login.result.phone + '/' + this.state.person.phone + '/' + this.state.person.messageId).update({
                    delivered: 'viewed'
                });
                firebase.database().ref('enterprises/' + login.result.idEnterprise +
                    '/users/' + this.state.person.id + '/friends/' + login.result._id).update({
                        delivered: 'viewed'
                    });
                firebase.database().ref('enterprises/' + login.result.idEnterprise +
                    '/users/' + login.result._id + '/friends/' + this.state.person.id).update({
                        delivered: 'viewed'
                    });
            }
        }

    }
    componentWillUnmount() {
        const { navigation } = this.props;
        const parent = navigation.dangerouslyGetParent();
        parent.setOptions({
            tabBarVisible: true
        });
    }
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
        const { login, route } = this.props;
        const type = this.state.type;

        if (this.state.textMessage.length > 0) {
            let msgId = firebase.database().ref('enterprises/' + login.result.idEnterprise + '/messages').child(login.result.phone).child(this.state.person.phone).push().key;
            let updates = {};
            let message = {
                message: this.state.textMessage,
                time: firebase.database.ServerValue.TIMESTAMP,
                from: login.result.phone,
                type: type == 1 ? 'image' : 'text',
                id: msgId,
                delivered: 'sent'
            }

            updates['enterprises/' + login.result.idEnterprise + '/messages/' + this.state.person.phone + '/' + login.result.phone + '/' + msgId] = message;
            updates['enterprises/' + login.result.idEnterprise + '/messages/' + login.result.phone + '/' + this.state.person.phone + '/' + msgId] = message;
            firebase.database().ref().update(updates);
            this.setState({ textMessage: '' });
            const data = await firebase.database().ref('enterprises/' + login.result.idEnterprise +
                '/users/' + this.state.person.id + '/friends/').child(login.result._id).once('value');

            try {
                firebase.database().ref('enterprises/' + login.result.idEnterprise +
                    '/users/' + this.state.person.id + '/friends/' + login.result._id).update({
                        name: login.result.name,
                        phone: login.result.phone,
                        avatar: login.result.photoUrl,
                        lastmessage: message.message,
                        lastmessageId: message.id,
                        badge: data.val().badge + 1,
                        id: login.result._id,
                        time: firebase.database.ServerValue.TIMESTAMP,
                        delivered: message.delivered,
                        from: login.result.phone,
                    })
                firebase.database().ref('enterprises/' + login.result.idEnterprise +
                    '/users/' + login.result._id + '/friends/' + this.state.person.id).update({
                        name: this.state.person.name,
                        phone: this.state.person.phone,
                        avatar: this.state.person.avatar,
                        lastmessage: message.message,
                        lastmessageId: message.id,
                        id: this.state.person.id,
                        time: firebase.database.ServerValue.TIMESTAMP,
                        delivered: message.delivered,
                        from: login.result.phone,
                    })

            } catch (error) {
                firebase.database().ref('enterprises/' + login.result.idEnterprise +
                    '/users/' + this.state.person.id + '/friends/' + login.result._id).set({
                        name: login.result.name,
                        phone: login.result.phone,
                        avatar: login.result.photoUrl,
                        lastmessage: message.message,
                        lastmessageId: message.id,
                        badge: data.val() == null ? 1 : data.val().badge + 1,
                        id: login.result._id,
                        time: firebase.database.ServerValue.TIMESTAMP,
                        delivered: message.delivered,
                        from: login.result.phone,
                    })
                firebase.database().ref('enterprises/' + login.result.idEnterprise +
                    '/users/' + login.result._id + '/friends/' + this.state.person.id).update({
                        name: this.state.person.name,
                        phone: this.state.person.phone,
                        avatar: this.state.person.avatar,
                        lastmessage: message.message,
                        lastmessageId: message.id,
                        id: this.state.person.id,
                        time: firebase.database.ServerValue.TIMESTAMP,
                        delivered: message.delivered,
                        from: login.result.phone,
                    })
            }

        } else {
            console.log("cheguei aqui -2")
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
    _openMenu = (item) => this.setState({ visible: item });
    _closeMenu = () => this.setState({ visible: false });
    renderRow = ({ item }) => {
        const { login, chat } = this.props;

        return (
            <View style={{
                flexDirection: 'row',
                width: this.getwith(item.message),
                alignSelf: item.from === login.result.phone ? 'flex-end' : 'flex-start',
                backgroundColor: item.from === login.result.phone ? '#ced6e0' : '#ffffff',
                borderColor: item.from === login.result.phone ? '#ced6e0' : '#a4b0be',
                borderWidth: item === login.result.phone ? 0 : 1,
                borderRadius: 10,
                marginBottom: 10,
            }}>
                <Menu
                    visible={this.state.visible == item.id}
                    onDismiss={this._closeMenu}
                    anchor={
                        <TouchableOpacity
                            onLongPress={() => this._openMenu(item.id)}
                            style={{
                                color: '#2f3542',
                                padding: 10,
                                fontSize: 15,
                                flexDirection: "row",
                                justifyContent: 'center',
                                alignItems: 'center'

                            }}>
                            <Text>
                                {item.message}
                            </Text>
                            <Text style={{
                                color: '#57606f',
                                fontSize: 12,
                                paddingLeft: 10
                            }}>
                                {moment(item.time).format('HH:MM')}
                            </Text>
                            {item.delivered == 'sent' && <Image source={sentCheck} style={{
                                width: 14, height: 14
                            }} />}
                            {item.delivered == 'delivered' && <Image source={deliverredCheck} style={{
                                width: 14, height: 14
                            }} />}
                            {item.delivered == 'viewed' && <Image source={viewedCheck} style={{
                                width: 14, height: 14
                            }} />}
                        </TouchableOpacity>
                    }
                >
                    <Menu.Item onPress={() => { Clipboard.setString(item.message); this._closeMenu() }} title="Copiar" />
                    <Menu.Item onPress={() => { }} title="Deletar" />
                    <Divider />
                    <Menu.Item onPress={() => { }} title="Selecionar" />
                </Menu>

            </View>
        )
    }

    render() {
        let { height, width } = Dimensions.get('window');
        const { chat, navigation, route } = this.props;
        console.log(chat.result[this.state.person.phone]);
        return (
            <>
                <Appbar.Header style={{ backgroundColor: 'white', }} >
                    <Appbar.BackAction onPress={() => {
                        navigation.setOptions({
                            tabBarVisible: true
                        })
                        navigation.navigate('HomeMessage')
                    }} />
                    <Appbar.Content
                        title={route.params.name}
                    />
                    <Appbar.Action icon={({ size, color }) => (
                        <Image
                            source={{ uri: route.params.avatar }}
                            style={{ width: 25, height: 25 }}
                        />
                    )} />
                </Appbar.Header>
                <KeyboardAvoidingView
                    style={styles.container}
                    behavior='padding'
                >
                    <SafeAreaView>
                        <View>
                            {this.state.online != false && <Text>{this.state.online}</Text>}
                        </View>
                        <FlatList
                            inverted={this.state.textAllmessage ? false : true}
                            style={{ padding: 10, height: height * 0.08, paddingBottom: 40 }}
                            data={this.state.messageList}
                            renderItem={this.renderRow}
                            contentInset={{ top: 0, bottom: 30, left: 0, right: 0 }}
                            contentInsetAdjustmentBehavior="automatic"
                            keyExtractor={(item, index) => console.log(index.toString())}
                            ListEmptyComponent={() => (
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 150 }}>
                                    <Text style={{ textAlign: "center" }} >Voces ainda não possui mensagens</Text>
                                </View>
                            )}
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
                </KeyboardAvoidingView >
            </>
        )
    }
}

const mapStateToProps = state => ({
    login: state.login,
    chat: state.chat
});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({ ...LoginActions, ...ChatActions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatScreen);