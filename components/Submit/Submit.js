import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';
import { Button } from 'react-native-elements';
import { styles as style } from './style';

export default class Submit extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity
                style={[styles.mainContainer, { backgroundColor: this.props.color }]}
                onPress={this.props.onPress}
            >
                <Text
                    style={styles.submitText}
                    >{this.props.title}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create(style);