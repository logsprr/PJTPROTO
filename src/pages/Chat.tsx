import React, { Component } from 'react';
import { Text, View, TouchableOpacity, FlatList, Alert, ScrollView } from 'react-native';
import TouchableScale from 'react-native-touchable-scale';
import { SearchBar, ListItem } from 'react-native-elements';
import { Dispatch } from 'redux';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as UsersActions from "../store/modules/Users/UserActions";
import firebase from 'firebase';
import Story from '../components/Story';
class Chat extends Component {

    state = {
        users: [],
        arrayholder: [],
        new: [],
        id: null,
    }
    componentDidMount() {
        firebase.database().ref('users/' + '064992816487' + '/permission').once('value', snapshot => {

            if (snapshot.val() == true) {
                console.log("uhu");
            }
        })
        const login = false;
        var usersRef = firebase.database().ref('users/');
        var hopperRef = usersRef.child('064992816487');
        hopperRef.update({
            "status": "online"
        });
        firebase.database().ref('users/' + '064992816487' + '/logged').once('value', snapshot => {
            if (login === snapshot.val()) {
                Alert.alert("Usuário não logado");
                this.props.navigation.navigate('Login');
            }
        })
        this.getContact();
    }
    getContact = async () => {
        let dbRef = firebase.database().ref('users/' + '064992816487' + '/friends');
        this.setState({ loading: true });
        dbRef.on('child_added', async (val) => {
            console.log(val.val());
            this.addContact(val);
        })
        dbRef.on('child_changed', (val) => {
            console.log(val.val());
            console.log(this.state.users)
            let data = this.state.users.map((item) => {
                if (val.val().id == item.id) {
                    return {
                        'name': val.val().name,
                        'avatar': val.val().avatar,
                        'lastmessage': val.val().lastmessage,
                        'badge': val.val().badge,
                        'id': val.val().id,
                        'time': val.val().time
                    }
                } else {
                    return {
                        'name': item.name,
                        'avatar': item.avatar,
                        'lastmessage': item.lastmessage,
                        'badge': item.badge,
                        'id': item.id,
                        'time': item.time
                    }
                }
            })
            // data.splice(0, 0, val.val());
            this.setState({
                users: data
            })
            // /this.updateContact(val);
        })

    }
    addPit = async (item) => {
        let data = firebase.database().ref('users/' + '064992816487' + '/friends').on('child_added', async (val) => {
            this.setState((prevState) => {
                return {
                    new: [...prevState.new, val.val()]
                }
            })
            setTimeout(() => {
                console.log(this.state.new)
                let put = this.state.new.map((item) => {
                    console.log(item.id);
                    if (item.phone == '12345678900') {
                        firebase.database().ref('users/' + '064992816487/' + 'friends/' + item.id).update({
                            time: '79999999',
                            badge: 19
                        })
                    }
                })
            }, 4000)

        });

        // let msgId = await firebase.database().ref('users').child('064992816487').child('friends').push().key;
        // console.log(msgId)
        // await firebase.database().ref('users/' + '064992816487/' + 'friends/' + msgId).set({
        //     name: item.name, avatar: item.avatar, id: msgId, phone: item.phone, lastmessage: 'ola', badge: 0, time: 7000
        // });
    }
    addContact = async (val) => {
        let person = val.val();

        if (person.phone === '064992816487') {
            console.log('User')
        } else {
            this.setState((prevState) => {
                return {
                    users: [...prevState.users, person]
                }
            })

            this.setState({
                loading: false,
            })
            this.arrayholder = this.state.users;
            console.log(val.val())
        }
    }
    updateContact = async (val) => {
        let person = val.val();
        let index = 0;
        console.log(person + `${index = index + 1}`)
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }} >
                <FlatList
                    keyboardShouldPersistTaps="handled"
                    data={this.state.users.sort((a, b) => b.time - a.time)}
                    ListHeaderComponent={<Story />}
                    renderItem={({ item, index }) => (
                        <ListItem
                            rightTitle='online'
                            rightTitleStyle={{
                                marginTop: -20,
                                marginRight: -35
                            }}
                            bottomDivider
                            onPress={() => this.props.navigation.navigate('Chat', item)}
                            Component={TouchableScale}
                            friction={90} //
                            tension={100} //
                            activeScale={0.95}

                            leftAvatar={{ source: { uri: item.avatar, cache: 'default' }, size: 'medium' }}
                            title={`${item.name}`}
                            subtitle={item.lastmessage}
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
    users: state.users
});

const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators({ ...UsersActions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Chat);