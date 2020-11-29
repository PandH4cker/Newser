import * as api from './api';
import * as actionTypes from './actionTypes';

const update = items => (
    {
        type: actionTypes.UPDATE,
        items,
    }
);

export const empty = () => (
    {
        type: actionTypes.EMPTY,
    }
);