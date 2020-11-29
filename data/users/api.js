import { fetchApi } from '../../services/api';

const endPoints = {
    signup: '/users/signup',
}

export const signup = payload => fetchApi(endPoints.signup, payload, 'post');