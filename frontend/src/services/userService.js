const USER_STORAGE_KEY = 'userList';

// Helper function to load user data from LocalStorage
const loadUsers = () => {
    const data = localStorage.getItem(USER_STORAGE_KEY);
    return data ? JSON.parse(data) : [];
};

// Helper function to save user data to LocalStorage
const saveUsers = (users) => {
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(users));
};

// Get all users
const getAllUsers = () => {
    return loadUsers();
};

// Add a new user
const addUser = (userName) => {
    const users = loadUsers();
    const userExists = users.includes(userName);
    if (!userExists) {
        users.push(userName);
        saveUsers(users);
        return true;
    }
    return false;
};

// Remove a user
const removeUser = (userName) => {
    let users = loadUsers();
    users = users.filter(user => user !== userName);
    saveUsers(users);
};

// Example of adding some initial data
const initializeSampleData = () => {
    const sampleData = ['John Doe', 'Jane Smith', 'Emily Johnson'];
    saveUsers(sampleData);
};

// Uncomment this line to initialize sample data once
// initializeSampleData();

export { getAllUsers, addUser, removeUser };

