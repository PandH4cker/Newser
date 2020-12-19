import RestClient from 'react-native-rest-client';

export default class NewsApi extends RestClient {
    constructor() {
        super('http://newsapi.org', {
            headers: {
                Authorization: `Bearer ${process.env.API_KEY}`
            }
        });
    }

    getTopHeadlines()
}