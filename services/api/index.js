import fetchival from 'fetchival';
import _ from 'lodash';
//import * as sessionSelectors from '../session/selectors';
import apiConfig from './config';

export const fetchApi = (endPoint, payload = {}, method = 'get', headers = {}) => {
    //const accessToken = sessionSelectors.get().tokens.access.value;
    const accessToken = null;
    console.log("Fetching:")
    console.log(endPoint);
    console.log(payload);
    console.log(headers);
    return fetchival(`${apiConfig.url}${endPoint}`, {
            headers: _.pickBy({
                        ...(accessToken ? {
                            Authorization: `Bearer ${accessToken}`,
                        } : {}),
                        ...headers,
            }, item => !_.isEmpty(item)),
    })[method.toLowerCase()](payload)
    .catch(e => {
        if (e.response && e.response.json) {
            e.response.json().then(json => {
                if (json) alert("Account already exists.");
                else throw e;
            });
        } else throw e;
    });
};