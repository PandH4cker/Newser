import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Splash from '../screens/Splash';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Home from '../screens/Home/Home';
//import store from '../store';

const StackNavigator = createStackNavigator();
const routeStack = [
    'Home',
    'Login',
    'Register',
    'Splash'
]

export default class Navigation extends Component {
    constructor(props) {
        super(props);

        this.state =  {
            initialRouteName: null
        }
    }

   /* componentDidMount() {
        const unsubscribe = store.subscribe(() => {
            if (store.getState().services.persist.isHydrated) {
                unsubscribe();
                this.autologin();
            }
        });
    } */

   /* autologin() {
        sessionStorage.refreshToken().then(() => {
            this.setState({ initialRouteName: routeStack[0] });
        }).catch(() => {
            this.setState({ initialRouteName: routeStack[1] });
        })
    } */

    render() {
        return (
            <NavigationContainer>
                <StackNavigator.Navigator
                    initialRouteName="Login"
                   // initialRouteName={this.state.initialRouteName}
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
                    <StackNavigator.Screen
                        name="Home"
                        component={Home}
                    />
                </StackNavigator.Navigator>
            </NavigationContainer>
        );
    }
}