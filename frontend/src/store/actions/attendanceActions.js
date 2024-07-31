import { getAllAttendance, addAttendance, removeAttendance } from './attendanceService.js';

// Function to render the attendance list on the UI
const renderAttendanceList = (attendanceListElement) => {
    const attendanceRecords = getAllAttendance();
    attendanceListElement.innerHTML = '';

    attendanceRecords.forEach(record => {
        const listItem = document.createElement('li');
        listItem.textContent = `Class: ${record.classId}, Student: ${record.studentName}, Date: ${record.date}`;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => {
            removeAttendance(record.classId, record.studentName, record.date);
            renderAttendanceList(attendanceListElement);
        });

        listItem.appendChild(removeButton);
        attendanceListElement.appendChild(listItem);
    });
};

// Function to handle adding a new attendance record
const handleAddAttendance = (classIdInput, studentNameInput, dateInput, attendanceListElement) => {
    const classId = classIdInput.value.trim();
    const studentName = studentNameInput.value.trim();
    const date = dateInput.value.trim();

    if (classId && studentName && date) {
        const success = addAttendance(classId, studentName, date);
        if (success) {
            renderAttendanceList(attendanceListElement);
            classIdInput.value = '';
            studentNameInput.value = '';
            dateInput.value = '';
        } else {
            alert('Attendance record already exists.');
        }
    } else {
        alert('Please fill out all fields.');
    }
};

export { renderAttendanceList, handleAddAttendance };

