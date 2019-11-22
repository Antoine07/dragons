import {
    ADD_DRAGON,
    ADD_KNIGTH,
    EMPTY_DATA,
    NEW_MESSAGE
} from '../constants/constants';

export const addDragon = (dragon) => {
    return {
        type: ADD_DRAGON, dragon
    }
};

export const addKnight = () => {
    return {
        type: ADD_KNIGTH
    }
};

export const emptyData = () => {
    return {
        type: EMPTY_DATA
    }
};

export const message = (message) => {
    return {
        type: NEW_MESSAGE, message
    }
};