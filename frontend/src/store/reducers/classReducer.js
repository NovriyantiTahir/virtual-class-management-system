// Action types
const ADD_CLASS = 'ADD_CLASS';
const REMOVE_CLASS = 'REMOVE_CLASS';
const SET_CLASSES = 'SET_CLASSES';

// Initial state
const initialState = {
    classList: []
};

// Reducer function
const classReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CLASSES:
            return {
                ...state,
                classList: action.payload
            };
        case ADD_CLASS:
            return {
                ...state,
                classList: [...state.classList, action.payload]
            };
        case REMOVE_CLASS:
            return {
                ...state,
                classList: state.classList.filter(
                    cls => !(cls.className === action.payload.className && 
                             cls.teacherName === action.payload.teacherName)
                )
            };
        default:
            return state;
    }
};

// Action creators
export const setClasses = (classList) => ({
    type: SET_CLASSES,
    payload: classList
});

export const addClass = (className, teacherName) => ({
    type: ADD_CLASS,
    payload: { className, teacherName }
});

export const removeClass = (className, teacherName) => ({
    type: REMOVE_CLASS,
    payload: { className, teacherName }
});

export default classReducer;

