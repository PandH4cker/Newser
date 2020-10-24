import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
    ScrollView
} from 'react-native';
import Inputs from '../../components/Inputs';
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
                    style={style.container}
                >
                    <Image 
                        source={require('../../assets/login.png')}
                        resizeMode='center'
                        style={style.image} />
                    <Text
                        style={style.textTitle}
                    >
                        Welcome back
                    </Text>
                    <Text
                        style={styles.textBody}
                    >
                        Log in to your existant account
                    </Text>
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
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create(style);