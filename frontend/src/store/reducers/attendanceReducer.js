// Action types
const ADD_ATTENDANCE = 'ADD_ATTENDANCE';
const REMOVE_ATTENDANCE = 'REMOVE_ATTENDANCE';
const SET_ATTENDANCE = 'SET_ATTENDANCE';

// Initial state
const initialState = {
    attendanceRecords: []
};

// Reducer function
const attendanceReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ATTENDANCE:
            return {
                ...state,
                attendanceRecords: action.payload
            };
        case ADD_ATTENDANCE:
            return {
                ...state,
                attendanceRecords: [...state.attendanceRecords, action.payload]
            };
        case REMOVE_ATTENDANCE:
            return {
                ...state,
                attendanceRecords: state.attendanceRecords.filter(
                    record => !(record.classId === action.payload.classId && 
                                record.studentName === action.payload.studentName && 
                                record.date === action.payload.date)
                )
            };
        default:
            return state;
    }
};

// Action creators
export const setAttendance = (attendanceRecords) => ({
    type: SET_ATTENDANCE,
    payload: attendanceRecords
});

export const addAttendance = (classId, studentName, date) => ({
    type: ADD_ATTENDANCE,
    payload: { classId, studentName, date }
});

export const removeAttendance = (classId, studentName, date) => ({
    type: REMOVE_ATTENDANCE,
    payload: { classId, studentName, date }
});

export default attendanceReducer;

