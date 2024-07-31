const ATTENDANCE_STORAGE_KEY = 'attendanceList';

// Helper function to load attendance data from LocalStorage
const loadAttendance = () => {
    const data = localStorage.getItem(ATTENDANCE_STORAGE_KEY);
    return data ? JSON.parse(data) : [];
};

// Helper function to save attendance data to LocalStorage
const saveAttendance = (attendance) => {
    localStorage.setItem(ATTENDANCE_STORAGE_KEY, JSON.stringify(attendance));
};

// Get all attendance records
const getAllAttendance = () => {
    return loadAttendance();
};

// Add a new attendance record
const addAttendance = (classId, studentName, date) => {
    const attendance = loadAttendance();
    const existingRecordIndex = attendance.findIndex(record => 
        record.classId === classId && record.date === date && record.studentName === studentName
    );
    if (existingRecordIndex === -1) {
        attendance.push({ classId, studentName, date });
        saveAttendance(attendance);
        return true;
    }
    return false;
};

// Remove an attendance record
const removeAttendance = (classId, studentName, date) => {
    let attendance = loadAttendance();
    attendance = attendance.filter(record => 
        !(record.classId === classId && record.studentName === studentName && record.date === date)
    );
    saveAttendance(attendance);
};

// Example of adding some initial data
const initializeSampleData = () => {
    const sampleData = [
        { classId: '1', studentName: 'John Doe', date: '2024-07-30' },
        { classId: '1', studentName: 'Jane Smith', date: '2024-07-30' },
        { classId: '2', studentName: 'Emily Johnson', date: '2024-07-31' }
    ];
    saveAttendance(sampleData);
};

// Uncomment this line to initialize sample data once
// initializeSampleData();

export { getAllAttendance, addAttendance, removeAttendance };

