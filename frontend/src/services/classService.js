const CLASS_STORAGE_KEY = 'classList';

// Helper function to load class data from LocalStorage
const loadClasses = () => {
    const data = localStorage.getItem(CLASS_STORAGE_KEY);
    return data ? JSON.parse(data) : [];
};

// Helper function to save class data to LocalStorage
const saveClasses = (classes) => {
    localStorage.setItem(CLASS_STORAGE_KEY, JSON.stringify(classes));
};

// Get all classes
const getAllClasses = () => {
    return loadClasses();
};

// Add a new class
const addClass = (className, teacherName) => {
    const classes = loadClasses();
    const classExists = classes.some(cls => cls.className === className && cls.teacherName === teacherName);
    if (!classExists) {
        classes.push({ className, teacherName, students: [] });
        saveClasses(classes);
        return true;
    }
    return false;
};

// Remove a class
const removeClass = (className, teacherName) => {
    let classes = loadClasses();
    classes = classes.filter(cls => !(cls.className === className && cls.teacherName === teacherName));
    saveClasses(classes);
};

// Example of adding some initial data
const initializeSampleData = () => {
    const sampleData = [
        { className: 'Math 101', teacherName: 'Mr. Smith', students: [] },
        { className: 'History 202', teacherName: 'Mrs. Johnson', students: [] },
        { className: 'Biology 303', teacherName: 'Dr. Brown', students: [] }
    ];
    saveClasses(sampleData);
};

// Uncomment this line to initialize sample data once
// initializeSampleData();

export { getAllClasses, addClass, removeClass };

