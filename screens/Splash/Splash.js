import React, { Component } from 'react';
import { 
    View, 
    StyleSheet 
} from 'react-native';
import { styles as style } from './style';

export default class Splash extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <View
                style={styles.mainContainer}
            >

            </View>
        );
    }
}

const styles = StyleSheet.create(style);