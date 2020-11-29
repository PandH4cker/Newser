import store from '../../store';

import * as api from './api';
import * as selectors from './selectors';
import * as actionCreators from './actions';
import { initialState } from './reducer';

const SESSION_TIMEOUT_THRESHOLD = 300;

let sessionTimeout = null;

const setSessionTimeout = duration => {
    clearTimeout(sessionTimeout);
    sessionTimeout = setTimeout(
        refreshToken,
        (duration - SESSION_TIMEOUT_THRESHOLD) * 1000
    );
};

const clearSession = () => {
    clearTimeout(sessionTimeout);
    store.dispatch(actionCreators.update(initialState));
};

const onRequestSuccess = response => {
    const tokens = response.tokens.reduce((prev, item) => ({
        ...prev,
        [item.type]: item,
    }), {});
    store.dispatch(actionCreators.update({ tokens, user: response.user }));
    setSessionTimeout(tokens.access.expiresIn);
};

const onRequestFailed = exception => {
    clearSession();
    throw exception;
};

export const refreshToken = () => {
    const session = selectors.get();

    if (!session.tokens.refresh.value || !session.user.id) return Promise.reject();

    return api.refresh(session.tokens.refresh, session.user)
              .then(onRequestSuccess)
              .catch(onRequestFailed);
};

export const authenticate = (username, password) => api.authenticate(username, password)
                                                       .then(onRequestSuccess)
                                                       .catch(onRequestFailed);

export const revoke = () => clearSession();