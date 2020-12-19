import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View
} from 'react-native';
//import { Provider } from 'react-redux';

//import store from './store';
import Navigation from './navigation/Navigation';
import * as Font from 'expo-font';
import Splash from './screens/Splash'

export default class App extends Component {
  constructor(props) {
    super();
    this.state = {
      fontLoaded: false
    };
  }

  async componentDidMount() {
   await Font.loadAsync({
     'Roboto-Black': require('./assets/fonts/Roboto-Black.ttf'),
     'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
     'Roboto-Light': require('./assets/fonts/Roboto-Light.ttf'),
     'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
     'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
     'Roboto-Thin': require('./assets/fonts/Roboto-Thin.ttf')
   });

   this.setState({ fontLoaded: true });
  }

  render() {
    return (
      this.state.fontLoaded ? 
        (
          //<Provider store={store}>
            <Navigation/>
         // </Provider>
        ) : 
        (
          <Splash/>
        )
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
