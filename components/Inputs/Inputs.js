import React, { Component } from 'react';
import { 
    View, 
    StyleSheet, 
    ScrollView,
    Keyboard
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { styles as style } from './style';

export default class Inputs extends Component {
    constructor(props) {
        super();
        this.state = {
            isFocused: false
        };

        this._onFocusChange = this._onFocusChange.bind(this);
    }

    componentDidMount() {
        Keyboard.addListener('keyboardDidHide', this._forceLoseFocus());
    }

    _forceLoseFocus() {
        this._input.blur();
    }

    _onFocusChange() {
        this.setState({ isFocused: true });
    }

    _onBlur() {
        this.setState({ isFocused: false });
    }

    render() {
        return (
            <View
                style={[styles.mainContainer, { borderColor: this.state.isFocused ? '#0779ef' : '#eee'}]}
            >
                <Input
                    onChangeText={this.props.onChangeText}
                    ref={(component) => this._input = component}
                    onFocus={() => this._onFocusChange()}
                    onBlur={() => this._onBlur()}
                    placeholder={this.props.name}
                    inputContainerStyle={styles.inputContainer}
                    inputStyle={styles.inputText}
                    secureTextEntry={this.props.pass}
                    leftIcon={
                        <Icon
                            name={this.props.icon}
                            size={22}
                            color={this.state.isFocused ? '#0779e4' : 'grey'}
                        />
                    }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create(style);