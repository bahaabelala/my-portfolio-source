import * as actionTypes from './actionTypes';

const scrollDown = () => {
    return {
        type: actionTypes.SCROLL_DOWN,
    };
}

const turnSection = selectedSection => {
    return {
        type: actionTypes.TURN_SECTION,
        selectedSection,
    };
}

export {
    scrollDown,
    turnSection,
};