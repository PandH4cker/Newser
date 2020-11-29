import { fetchApi } from "../api";
import apiConfig from "../api/config";

const endPoints = {
    authenticate: '/users/signin',
    refresh: '/users/refresh-token',
    welcome: '/users/welcome'
};

export const authenticate = (username, password) => fetchApi(endPoints.authenticate, {
    username: username,
    password: password
}, 'post');
export const refresh = token => fetchApi(endPoints.refresh, {}, 'get', {
    'x-access-token': token
});
export const welcome = () => fetchApi(endPoints.welcome);