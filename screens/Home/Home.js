import React, { Component } from 'react';
import { 
    View,
    StyleSheet,
    ImageBackground,
    Text,
    TouchableOpacity
} from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import Swiper from 'react-native-swiper';

import { styles as style } from './style';
import NewsAPI from 'newsapi';

const newsAPI = new NewsAPI(process.env.API_KEY);

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: this.props.route.params.user,
            token: this.props.route.params.token,
            fetchedArticles: [],
        };

        this._handlePressArticle = this._handlePressArticle.bind(this);
    }


    componentDidMount() {
        newsAPI.v2.topHeadlines({
            country: 'fr',
            language: 'fr'
        }).then(response => {
            this.setState({ fetchedArticles: response.articles })
        })
    }

    async _handlePressArticle(url) {
        await WebBrowser.openBrowserAsync(url);
    }

    render() {
        const { fetchedArticles } = this.state;
        const items = [];
        for (const [index, article] of fetchedArticles.entries())
            items.push(
                <View
                    key={index}
                    style={styles.container}
                >
                    <ImageBackground
                        resizeMode='cover'
                        blurRadius={10}
                        style={styles.backgroundImage}
                        source={{
                            uri: article.urlToImage
                        }}
                    >
                        <TouchableOpacity
                            style={styles.innerImage}
                            onPress={() => this._handlePressArticle(article.url)}
                        >
                            <ImageBackground
                                resizeMode='contain'
                                style={styles.innerImage}
                                source={{
                                    uri: article.urlToImage
                                }}
                            >
                                <View
                                    style={styles.underImageView}
                                >
                                    <Text
                                        style={styles.textStyle}
                                    >{article.title}</Text>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>
                    </ImageBackground>
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
        );
    }
}

const styles = StyleSheet.create(style);