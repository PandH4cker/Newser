import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
    ScrollView
} from 'react-native';
import Inputs from '../../components/Inputs';
import Submit from '../../components/Submit/Submit';
import { styles as style } from './style';

export default class Login extends Component {
    constructor(props) {
        super();
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
                    />
                    <Inputs 
                        name="Password"
                        icon="lock"
                        pass={true}
                    />
                    <Submit
                        title="LOG IN" 
                        color="#0148a4"
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