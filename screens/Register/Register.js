import React, { Component } from 'react';
import dismissKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard';
import {
    View,
    StyleSheet,
    Text,
    Image
} from 'react-native';
import { styles as style } from './style';
import _ from 'lodash';

import * as api from '../../data/users/api';
import * as utils from '../../utils';
import Inputs from '../../components/Inputs';
import Submit from '../../components/Submit';
import CivilityDropDown from '../../components/CivilityDropDown/CivilityDropDown';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default class Register extends Component {
    constructor(props) {
        super();

        this.state = {
            isLoading: false,
            error: null,
            account: {
                civility: null,
                firstname: null,
                lastname: null,
                username: null,
                phone: null,
                email: null,
                password: null,
                confirmPassword: null
            }
        }

        this._onPressRegister = this._onPressRegister.bind(this);
        this._onChangeCivility = this._onChangeCivility.bind(this);
        this._onChangeFullName = this._onChangeFullName.bind(this);
        this._onChangeUsername = this._onChangeUsername.bind(this);
        this._onChangePhone = this._onChangePhone.bind(this);
        this._onChangeEmail = this._onChangeEmail.bind(this);
        this._onChangePassword = this._onChangePassword.bind(this);
        this._onChangeConfirmPassword = this._onChangeConfirmPassword.bind(this);
    }

    _onPressRegister() {
        this.setState({
            isLoading: true,
            error: '',
        });
        dismissKeyboard();

        if (!utils.isPropertiesUnset(this.state.account))
            if(this.state.account.password === this.state.account.confirmPassword)
                api.signup(this.state.account)
                   .then(response => {
                       if (!_.isEmpty(response))
                        this.props.navigation.navigate('Home', {
                            user: response.user,
                            token: response.token
                        });
                   });
    }

    _onChangeCivility(civility) {
        this.setState(prevState => ({
            account: {
                ...prevState.account,
                civility: civility
            }
        }));
    }

    _onChangeFullName(fullname) {
        fullname = fullname.trim();
        if(fullname.split(' ').length > 1) {
            let firstname = fullname.split(' ')[0];
            let lastname = fullname.split(' ')[1];
            this.setState(prevState => ({
                account: {
                    ...prevState.account,
                    firstname: firstname,
                    lastname: lastname
                }
            }));
        }
    }

    _onChangeUsername(username) {
        this.setState(prevState => ({
            account: {
                ...prevState.account,
                username: username
            }
        }));
    }

    _onChangePhone(phone) {
        this.setState(prevState => ({
            account: {
                ...prevState.account,
                phone: phone
            }
        }));
    }

    _onChangeEmail(email) {
        this.setState(prevState => ({
            account: {
                ...prevState.account,
                email: email
            }
        }));
    }

    _onChangePassword(password) {
        this.setState(prevState => ({
            account: {
                ...prevState.account,
                password: password
            }
        }));
    }

    _onChangeConfirmPassword(confirmPassword) {
        this.setState(prevState => ({
            account: {
                ...prevState.account,
                confirmPassword: confirmPassword
            }
        }));
    }

    render() {
        return (
            <KeyboardAwareScrollView
                style={styles.mainContainer}
            >
                <View
                    style={styles.container}
                >
                    <Image
                        source={require('../../assets/signup.png')}
                        resizeMode="center"
                        style={styles.image}
                    />
                    <Text
                        style={styles.textTitle}
                        >Let's Get Started</Text>
                    <Text
                        style={styles.textBody}
                        >Create an account to get all features</Text>
                    <CivilityDropDown
                        placeholder="Choose your civility"
                        onChangeItem={this._onChangeCivility}
                    />
                    <Inputs
                        name="Full Name"
                        icon="id-card"
                        onChangeText={this._onChangeFullName}
                    />
                    <Inputs
                        name="Username"
                        icon="user"
                        onChangeText={this._onChangeUsername}
                    />
                    <Inputs 
                        name="Phone"
                        icon="phone"
                        onChangeText={this._onChangePhone}
                    />
                    <Inputs
                        name="Email"
                        icon="envelope"
                        onChangeText={this._onChangeEmail}
                    />
                    <Inputs
                        name="Password"
                        icon="lock"
                        pass={true}
                        onChangeText={this._onChangePassword}
                    />
                    <Inputs
                        name="Confirm Password"
                        icon="lock"
                        pass={true}
                        onChangeText={this._onChangeConfirmPassword}
                    />
                    <Submit
                        color="#0251ce"
                        title="REGISTER NOW"
                        onPress={() => this._onPressRegister()}
                    />
                    <View 
                        style={styles.alreadyHaveAccount}
                    >
                        <Text 
                            style={styles.textBody}
                            >Already have an account?</Text>
                        <Text 
                            style={[styles.textBody, { color: 'blue' }]}
                            onPress={() => this.props.navigation.navigate('Login')}
                            > Login here</Text>
                    </View>
                </View>
            </KeyboardAwareScrollView>
        );
    }
}

const styles = StyleSheet.create(style);