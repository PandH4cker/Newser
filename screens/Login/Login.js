import React, { Component } from 'react';
import dismissKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard';
import {
    View,
    StyleSheet,
    Text,
    Image,
    ScrollView
} from 'react-native';

//import * as session from '../../services/session';
//import * as api from '../../services/api';
import * as api from '../../services/session/api';
import Inputs from '../../components/Inputs';
import Submit from '../../components/Submit/Submit';
import { styles as style } from './style';

export default class Login extends Component {
    constructor(props) {
        super();

        this.state = {
            isLoading: false,
            error: null,
            credentials: {
                username: null,
                password: null
            }
        };

        this._onPressLogin = this._onPressLogin.bind(this);
        this._onChangeUsername = this._onChangeUsername.bind(this);
        this._onChangePassword = this._onChangePassword.bind(this);
    }

    _onPressLogin() {
        this.setState({
            isLoading: true,
            error: '',
        });
        dismissKeyboard();

       if (this.state.credentials.username && this.state.credentials.password) {
           api.authenticate(this.state.credentials.username, this.state.credentials.password)
              .then(response => this.props.navigation.navigate('Home', {
                  user: response.user,
                  token: response.token
              }));
       }
    }

    _onChangeUsername(username) {
        this.setState(prevState => ({
            credentials: {
                ...prevState.credentials,
                username: username
            }
        }));
    }

    _onChangePassword(password) {
        this.setState(prevState => ({
            credentials: {
                ...prevState.credentials,
                password: password
            }
        }));
    }

    render() {
        return (
            <ScrollView
                style={styles.mainContainer}
            >
                <View
                    style={styles.container}
                >
                    <Image 
                        source={require('../../assets/login.png')}
                        resizeMode='center'
                        style={styles.image} />
                    <Text
                        style={styles.textTitle}
                        >Welcome back</Text>
                    <Text
                        style={styles.textBody}
                        >Log in to your existant account</Text>
                    <View
                        style={styles.inputGroup}
                    />
                    <Inputs 
                        name="Username"
                        icon="user"
                        onChangeText={this._onChangeUsername}
                    />
                    <Inputs 
                        name="Password"
                        icon="lock"
                        pass={true}
                        onChangeText={this._onChangePassword}
                    />
                    <Submit
                        title="LOG IN" 
                        color="#0148a4"
                        onPress={() => this._onPressLogin()}
                    />
                    <View
                        style={styles.dontHaveAccountContainer}
                    >
                        <Text 
                            style={styles.textBody}
                            >Don't Have an account?</Text>
                        <Text 
                            style={[styles.textBody, { color: 'blue' }]} 
                            onPress={() => this.props.navigation.navigate('Register')}
                            > Sign Up</Text>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create(style);