import React, { Component } from 'react';
import { 
    View, 
    StyleSheet 
} from 'react-native';
import LottieView from 'lottie-react-native';
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
                <LottieView
                    source={require('../../assets/circles.json')}
                    autoPlay
                    loop={false}
                    speed={1.2}
                    onAnimationFinish={() => {
                        console.log('Animation Finished !');
                        this.props.navigation.replace('Login');
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create(style);