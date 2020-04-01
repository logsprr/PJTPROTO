import React, { Component } from 'react';
import { Text, View, TouchableOpacity, FlatList, Alert, ScrollView, Image, BackHandler } from 'react-native';
import TouchableScale from 'react-native-touchable-scale';
import { SearchBar, ListItem } from 'react-native-elements';
import { Dispatch } from 'redux';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as LoginActions from "../../store/modules/Login/LoginActions";
import * as ListChatActions from "../../store/modules/ListChat/ListChatAction";
import firebase from 'firebase';
import sentCheck from '../../assets/icons/png/sent.png';
import deliverredCheck from '../../assets/icons/png/delivered.png';
import viewedCheck from '../../assets/icons/png/viewed.png';
import Story from '../../components/Story';
import { showMessage, hideMessage } from "react-native-flash-message";
import FlashMessage from "react-native-flash-message";
import { Appbar } from 'react-native-paper';
class Chat extends Component {

    constructor(props) {
        super(props);

        this.state = {
            users: [],
            arrayholder: [],
            new: [],
            id: null,
            usersLogin: false
        }
    }

    componentDidMount() {

        this.getContact();
    }

    getContact = async () => {
        const { login, loadRequestChat } = this.props;
        let dbRef = firebase.database()
            .ref('enterprises/' + login.result.idEnterprise +
                '/users/' + login.result._id + '/friends')
            .limitToFirst(5)
            .orderByChild('time');
        dbRef.on('child_added', async (val) => {
            this.setState({ usersLogin: false })
            this.addContact(val);
        })

        dbRef.on('child_changed', (val) => {
            let data = this.state.users.map((item) => {
                if (val.val().id == item.id) {
                    console.log(val.val().from);
                    if (val.val().from != login.result.phone) {
                        console.log("opa opa")
                        firebase.database().ref('enterprises/' + login.result.idEnterprise + '/messages/' + val.val().phone + '/' + login.result.phone + '/' + val.val().lastmessageId).update({
                            delivered: 'delivered'
                        });
                        firebase.database().ref('enterprises/' + login.result.idEnterprise + '/messages/' + login.result.phone + '/' + val.val().phone + '/' + val.val().lastmessageId).update({
                            delivered: 'delivered'
                        });
                    }
                    return {
                        'name': val.val().name,
                        'avatar': val.val().avatar,
                        'lastmessage': val.val().lastmessage,
                        'lastmessageId': val.val().lastmessageId,
                        'badge': val.val().badge,
                        'id': val.val().id,
                        'time': val.val().time,
                        'phone': val.val().phone,
                        'delivered': 'delivered'
                    }
                } else {
                    return {
                        'name': item.name,
                        'avatar': item.avatar,
                        'lastmessage': item.lastmessage,
                        'lastmessageId': item.lastmessageId,
                        'badge': item.badge,
                        'id': item.id,
                        'time': item.time,
                        'phone': item.phone,
                        'delivered': item.delivered
                    }
                }
            })
            this.setState({
                users: data
            })
        })
    }
    addPit = async (item) => {
        // let data = firebase.database().ref('users/' + '064992816487' + '/friends').on('child_added', async (val) => {
        //     this.setState((prevState) => {
        //         return {
        //             new: [...prevState.new, val.val()]
        //         }
        //     })
        //     setTimeout(() => {
        //         console.log(this.state.new)
        //         let put = this.state.new.map((item) => {
        //             console.log(item.id);
        //             if (item.phone == '12345678900') {
        //                 firebase.database().ref('users/' + '064992816487/' + 'friends/' + item.id).update({
        //                     time: '79999999',
        //                     badge: 19
        //                 })
        //             }
        //         })
        //     }, 4000)

        // });

        // let msgId = await firebase.database().ref('users').child('064992816487').child('friends').push().key;
        // console.log(msgId)
        // await firebase.database().ref('users/' + '064992816487/' + 'friends/' + msgId).set({
        //     name: item.name, avatar: item.avatar, id: msgId, phone: item.phone, lastmessage: 'ola', badge: 0, time: 7000
        // });
    }
    addContact = async (val) => {
        const { loadRequestListChat } = this.props;
        let person = val.val();

        this.setState((prevState) => {
            return {
                users: [...prevState.users, person]
            }
        })

        this.setState({
            loading: false,
        })
        this.arrayholder = this.state.users;
        loadRequestListChat(this.state.users);
    }
    updateContact = async (val) => {
        let person = val.val();
        let index = 0;
    }
    render() {
        const { login, navigation } = this.props;
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }} >
                <Appbar.Header style={{ backgroundColor: 'white' }} >
                    <Appbar.Action icon="menu" onPress={() =>
                        navigation.openDrawer()
                    } />
                    <Appbar.Content
                        title="Mensagens"
                    />
                    <Appbar.Action icon="account-plus" onPress={() => navigation.navigate('Contacts')} />
                </Appbar.Header>
                <FlatList
                    keyboardShouldPersistTaps="handled"
                    data={this.props.listChat.result.sort((a, b) => b.time - a.time)}
                    ListEmptyComponent={() => (
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 150 }}>
                            <Text style={{ textAlign: "center" }} >{login.result.name + ' você ainda não \npossui nenhuma conversa'}</Text>
                        </View>
                    )}
                    ListHeaderComponent={<Story />}
                    renderItem={({ item, index }) => (
                        <ListItem
                            bottomDivider
                            onPress={() => this.props.navigation.navigate('Chat', item)}
                            Component={TouchableScale}
                            friction={90} //
                            tension={100} //
                            activeScale={0.95}

                            leftAvatar={{ source: { uri: item.avatar, cache: 'default' }, size: 'medium' }}
                            title={`${item.name}`}
                            subtitle={
                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: "center"

                                }}>
                                    <Text style={{ marginRight: 8 }}
                                    >{item.lastmessage}</Text>
                                    {item.delivered == 'sent' && <Image source={sentCheck} style={{
                                        width: 14, height: 14
                                    }} />}
                                    {item.delivered == 'delivered' && <Image source={deliverredCheck} style={{
                                        width: 14, height: 14
                                    }} />}
                                    {item.delivered == 'viewed' && <Image source={viewedCheck} style={{
                                        width: 14, height: 14
                                    }} />}

                                </View>
                            }
                            badge={{ value: item.badge, textStyle: { color: 'white' }, badgeStyle: { marginTop: 20, marginRight: 10, width: 20, height: 20, backgroundColor: item.badge == null || item.badge == 0 ? 'white' : '#7f8c8d' } }}
                        />
                    )}
                    keyExtractor={item => item.id}
                    ListFooterComponent={() => (
                        <View />
                    )}
                />
                <View style={{
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                }}>
                    <TouchableScale
                        onPress={() => {
                            /* HERE WE GONE SHOW OUR FIRST MESSAGE */
                            showMessage({
                                message: "Simple message",
                                type: "info",
                                duration: 9000
                            });
                        }}
                        friction={90} //
                        tension={100} //
                        activeScale={0.95}
                        style={{
                            backgroundColor: '#BFBFBF',
                            width: 100,
                            height: 40,
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: 10,
                            borderRadius: 25
                        }}>
                        <Text>Arquivadas</Text>
                    </TouchableScale>
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    login: state.login,
    listChat: state.listChat
});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({ ...LoginActions, ...ListChatActions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Chat);