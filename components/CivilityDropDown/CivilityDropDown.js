import React, { Component } from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import DropDownPicker from 'react-native-dropdown-picker';
import { styles as style } from './style';

export default class CivilityDropDown extends Component {
    constructor(props) {
        super();
        this.state = {
            isFocused: false,
            civility: null
        }
    }

    _onOpen() {
        this.setState({ isFocused: true });
    }

    _onClose() {
        this.setState({ isFocused: false });
    }

    render() {
        const items = [
            {
                label: 'Mister',
                value: 'M.',
                icon: () => <Icon
                                name="male"
                                size={22}
                                color="#0779ef"
                            />
            },
            {
                label: 'Miss',
                value: 'Mme.',
                icon: () => <Icon
                                name="female"
                                size={22}
                                color="#0779ef"
                            />
            }
        ];
        return (
            <View
                style={[styles.mainContainer, { borderColor: this.state.isFocused ? '#0779ef' : '#eee'}]}
            >
                <DropDownPicker
                    controller={instance => this._controller = instance}
                    items={items}
                    defaultValue={this.state.civility}
                    placeholder={this.props.placeholder}
                    containerStyle={styles.dropDownContainer}
                    style={styles.innerPickerStyle}
                    itemStyle={styles.itemStyle}
                    dropDownStyle={[styles.dropDownStyle, { borderColor: this.state.isFocused ? '#0779ef' : '#eee'}]}
                    labelStyle={styles.labelStyle}
                    selectedLabelStyle={styles.selectedLabelStyle}
                    placeholderStyle={styles.placeholderStyle}
                    onChangeItem={item => this.setState({ civility: item.value })}
                    onOpen={() => this._onOpen()}
                    onClose={() => this._onClose()}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create(style);