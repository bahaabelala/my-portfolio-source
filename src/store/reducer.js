import * as actionTypes from './actions/actionTypes';

import htmlLogo from '../assets/logos/skills/stocklogos-template-01.png';
import cssLogo from '../assets/logos/skills/css3_logo.png';
import jsLogo from '../assets/logos/skills/js_logo.png';
import reactLogo from '../assets/logos/skills/react-1-logo.png';
import gitLogo from '../assets/logos/skills/Git-Icon-1788C.png';
import wordLogo from '../assets/logos/skills/word_logo.png';
import storeImage from '../assets/images/projects/store.png';
import calcImage from '../assets/images/projects/calculator.png';
import ticImage from '../assets/images/projects/tic.jpg';
import albumImage from '../assets/images/projects/album.jpg';
import profastImage from '../assets/images/projects/profast.png';

const initialState = {
    downClicked: false,
    navSections: {
      'aboutMe': false,
      'skills': false,
      'work': false,
      'contactMe': false,
    },
    skills: {
        main: [
            { name: 'HTML5', image: htmlLogo },
            { name: 'CSS3', image: cssLogo },
            { name: 'JS', image: jsLogo },
            { name: 'ReactJS', image: reactLogo },
            { name: 'Git', image: gitLogo },
        ],
        additional: [
            { name: 'Word', image: wordLogo },
        ]
    },
    projects: {
        main: [
            {
                name: 'eCommerce',
                image: storeImage,
                details: '',
                link: 'https://bahaabelala.github.io/online-store/'
            },
            {
                name: 'Calculator',
                image: calcImage,
                details: '',
                link: 'https://bahaabelala.github.io/calculator/'
            },
            {
                name: 'Tic Tac Toe',
                image: ticImage,
                details: '',
                link: 'https://bahaabelala.github.io/tic-tac-toe/'
            },
            {
                name: 'Album Example',
                image: albumImage,
                details: '',
                link: 'https://bahaabelala.github.io/album-example/'
            },
            {
                name: 'ProFast',
                image: profastImage,
                details: '',
                link: 'http://profast.vercel.app/'
            },
        ],
        additional: [],
    }
};

// > Intro Scroll Down
const scrollDown = (state, action) => {
    return {
        ...state,
        downClicked: true,
        navSections: {
            ...state.navSections,
            'aboutMe': true,
        }
    }
}

// > Turn section
const turnSection = (state, action) => {
    const sections = {
        ...state.navSections
    }
    Object.keys(sections).forEach(sec => sections[sec] = false);

    // ^ Setting the state of the selected section to be shown
    sections[action.selectedSection] = true;

    // ^ Returning the new state
    return {
        ...state,
        navSections: {
            ...sections
        },
    };
}

// > ##### REDUCER #####
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SCROLL_DOWN: return scrollDown(state, action);
        case actionTypes.TURN_SECTION: return turnSection(state, action);
        default: return state;
    }
}

export default reducer;