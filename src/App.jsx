import React, { Component } from 'react';
import { View } from 'react-native';
import AppNavigator from './routes/AppNavigator';
import { connect } from 'react-redux';
class AppHome extends Component {
    render() {
        return (
            <AppNavigator />
        )
    }
}

const mapStateToProps = state => ({
    login: state.login,
});
export default connect(mapStateToProps, null)(AppHome);