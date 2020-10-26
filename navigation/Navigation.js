import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Splash from '../screens/Splash';
import Login from '../screens/Login';
import Register from '../screens/Register';

const StackNavigator = createStackNavigator();

export default class Navigation extends Component {
    constructor(props) {
        super(props);

        this.state =  {
            initialRouteName: null
        }
    }

    render() {
        return (
            <NavigationContainer>
                <StackNavigator.Navigator 
                    initialRouteName="Login"
                    screenOptions={{
                        headerShown: false
                    }}
                >
                    <StackNavigator.Screen 
                        name="Splash" 
                        component={Splash}
                    />
                    <StackNavigator.Screen 
                        name="Login" 
                        component={Login}
                    />
                    <StackNavigator.Screen 
                        name="Register"
                        component={Register}
                    />
                </StackNavigator.Navigator>
            </NavigationContainer>
        );
    }
}