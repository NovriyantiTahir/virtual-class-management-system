// Action types
const ADD_USER = 'ADD_USER';
const REMOVE_USER = 'REMOVE_USER';
const SET_USERS = 'SET_USERS';

// Initial state
const initialState = {
    userList: []
};

// Reducer function
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                userList: action.payload
            };
        case ADD_USER:
            return {
                ...state,
                userList: [...state.userList, action.payload]
            };
        case REMOVE_USER:
            return {
                ...state,
                userList: state.userList.filter(user => user !== action.payload)
            };
        default:
            return state;
    }
};

// Action creators
export const setUsers = (userList) => ({
    type: SET_USERS,
    payload: userList
});

export const addUser = (userName) => ({
    type: ADD_USER,
    payload: userName
});

export const removeUser = (userName) => ({
    type: REMOVE_USER,
    payload: userName
});

export default userReducer;

