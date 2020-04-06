import * as React from 'react';
import { View } from 'react-native';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as LoginActions from "../../store/modules/Login/LoginActions";
import {
    DrawerItem,
    DrawerContentScrollView,
} from '@react-navigation/drawer';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch,
} from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Component } from 'react';
import styles from './styles';
class DrawerContent extends Component {

    state = {
        loading: ''
    }

    render() {
        const { login } = this.props;
        console.log(login);
        console.log(this.props);
        return (
            <DrawerContentScrollView>
                <View
                    style={styles.drawerContent}
                >
                    <View style={styles.userInfoSection}>
                        <Avatar.Image
                            source={{
                                uri:
                                    login.result.photoUrl,
                            }}
                            size={50}
                        />
                        <Title style={styles.title}>{login.result.name}</Title>
                        {/* <Caption style={styles.caption}>@trensik</Caption> */}
                        {/* <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>
                                    202
                  </Paragraph>
                                <Caption style={styles.caption}>Following</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>
                                    159
                  </Paragraph>
                                <Caption style={styles.caption}>Followers</Caption>
                            </View>
                        </View> */}
                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <MaterialCommunityIcons
                                    name="account-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Perfil"
                            onPress={() => this.props.navigation.navigate('Profile')}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <MaterialCommunityIcons name="tune" color={color} size={size} />
                            )}
                            label="Configurações"
                            onPress={() => { }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <MaterialCommunityIcons
                                    name="bookmark-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Salvos"
                            onPress={() => { }}
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
        );
    }
}


const mapStateToProps = state => ({
    login: state.login
});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({ ...LoginActions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DrawerContent);