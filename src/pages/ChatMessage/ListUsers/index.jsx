import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as LoginActions from "../../../store/modules/Login/LoginActions";
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { SearchBar, ListItem } from 'react-native-elements';
import { Appbar } from 'react-native-paper';
import firebase from 'firebase';
class Contacts extends Component {
    state = {
        value: null,
        loading: false,
        users: []
    }
    componentDidMount() {
        this.getContact();
    }
    getContact = async () => {
        const { login } = this.props;
        let dbRef = firebase.database()
            .ref('enterprises/' + login.result.idEnterprise +
                '/users')
            .limitToFirst(5)
            .orderByChild('name');
        dbRef.on('child_added', async (val) => {
            this.setState({ usersLogin: false })
            this.addContact(val);

        })
        dbRef.on('child_changed', (val) => {
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
            this.setState({
                users: data
            })
        })
    }
    addContact = async (val) => {
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

    }
    renderHeader = () => {
        return (
            <SearchBar
                placeholder="Pesquisar ..."
                lightTheme
                round
                platform={Platform.OS}
                containerStyle={{ backgroundColor: 'white' }}
                // onChangeText={text => this.searchFilterFunction(text)}
                autoCorrect={false}
                value={this.state.value}
                autoFocus={false}
            />
        );
    };
    render() {
        const { navigation, route } = this.props;
        if (this.state.loading) {
            return (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <ActivityIndicator />
                </View>
            );
        }
        return (
            <View style={{ flex: 1 }} >
                <Appbar.Header style={{ backgroundColor: 'white' }} >
                    <Appbar.BackAction onPress={() => {
                        navigation.setOptions({
                            tabBarVisible: true
                        })
                        navigation.navigate('HomeMessage')
                    }} />
                    <Appbar.Content
                        title='Contatos'
                    />
                </Appbar.Header>
                <FlatList
                    keyboardShouldPersistTaps="handled"
                    data={this.state.users}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('ChatContactSend', item)}>
                            <ListItem
                                leftAvatar={{ source: { uri: item.avatar } }}
                                title={`${item.name}`}
                            />
                        </TouchableOpacity>
                    )}
                    keyExtractor={item => item.name}
                    ItemSeparatorComponent={this.renderSeparator}
                    ListHeaderComponent={this.renderHeader}

                />
            </View>

        );
    }
}

const mapStateToProps = state => ({
    login: state.login
});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({ ...LoginActions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);