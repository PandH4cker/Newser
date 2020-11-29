import React, { Component } from 'react';
import { 
    View,
    StyleSheet,
    ImageBackground,
    Text
} from 'react-native';
//import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';
import Swiper from 'react-native-swiper';

import { styles as style } from './style';
import NewsAPI from 'newsapi';
import * as data from '../../data2.json';

const newsAPI = new NewsAPI(process.env.API_KEY);

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: this.props.route.params.user,
            token: this.props.route.params.token,
            fetchedArticles: [...data.articles.filter(item => item.urlToImage !== null)],
            //gestureName: 'none',
            //currentArticles: 0
        };

        //this._onSwipeLeft = this._onSwipeLeft.bind(this);
    }

   /* _onSwipeRight(gestureState) {
        if (this.state.currentArticles - 1 >= 0)
            this.setState({ currentArticles: this.state.currentArticles - 1})
    }

    _onSwipeLeft(gestureState) {
        if (this.state.currentArticles + 1 < this.state.fetchedArticles.length)
            this.setState({ currentArticles: this.state.currentArticles + 1})
    }*/

    /*_onSwipe(gestureName, gestureState) {
        const { SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT } = swipeDirections;
        this.setState({ gestureName: gestureName });
        switch (gestureName) {
            case SWIPE_RIGHT:
                console.log("Swiped Right in switch()")
                break;
        }
    }*/

    render() {
        console.log(this.state.user)
        console.log("User Token: " + this.state.token)
        const { fetchedArticles, currentArticles } = this.state;
        /*const config = {
            velocityThreshold: 0.3,
            directionalOffsetThreshold: 80
        };*/
        console.log(this.state.currentArticles)
        const items = [];
        for (const [index, value] of fetchedArticles.entries())
            items.push(
                <View
                    key={index}
                    style={styles.container}
                >
                    <ImageBackground
                        resizeMode='stretch'
                        style={styles.image}
                        source={{
                            uri: value.urlToImage
                        }}
                    />
                </View>
            );
        return (
            <Swiper
                showsPagination={false}
                loop={false}
                style={styles.gestureContainer}
            >
                {items}
            </Swiper>
            /*<GestureRecognizer
                onSwipeLeft={state => this._onSwipeLeft(state)}
                onSwipeRight={state => this._onSwipeRight(state)}
                config={config}
                style={styles.gestureContainer}
            >
                <View
                    style={styles.container}
                >
                        <ImageBackground
                            resizeMode='contain'
                            style={styles.image}
                            source={{
                                uri: fetchedArticles[currentArticles].urlToImage
                            }}
                        />
                </View>
            </GestureRecognizer>*/
        );
    }
}

const styles = StyleSheet.create(style);