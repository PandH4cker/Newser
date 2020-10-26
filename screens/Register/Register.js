import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image
} from 'react-native';
import { styles as style } from './style';

import Inputs from '../../components/Inputs';
import Submit from '../../components/Submit';
import CivilityDropDown from '../../components/CivilityDropDown/CivilityDropDown';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default class Register extends Component {
    constructor(props) {
        super();
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
                    />
                    <Inputs
                        name="Full Name"
                        icon="id-card"
                    />
                    <Inputs
                        name="Username"
                        icon="user"
                    />
                    <Inputs 
                        name="Phone"
                        icon="phone"
                    />
                    <Inputs
                        name="Email"
                        icon="envelope"
                    />
                    <Inputs
                        name="Password"
                        icon="lock"
                        pass={true}
                    />
                    <Inputs
                        name="Confirm Password"
                        icon="lock"
                        pass={true}
                    />
                    <Submit
                        color="#0251ce"
                        title="CREATE"
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