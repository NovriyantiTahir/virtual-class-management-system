import { getAllUsers, addUser, removeUser } from './userService.js';

// Function to render the user list on the UI
const renderUserList = (userListElement) => {
    const users = getAllUsers();
    userListElement.innerHTML = '';

    users.forEach(user => {
        const listItem = document.createElement('li');
        listItem.textContent = `User: ${user}`;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => {
            removeUser(user);
            renderUserList(userListElement);
        });

        listItem.appendChild(removeButton);
        userListElement.appendChild(listItem);
    });
};

// Function to handle adding a new user
const handleAddUser = (userNameInput, userListElement) => {
    const userName = userNameInput.value.trim();

    if (userName) {
        const success = addUser(userName);
        if (success) {
            renderUserList(userListElement);
            userNameInput.value = '';
        } else {
            alert('User already exists.');
        }
    } else {
        alert('Please enter a user name.');
    }
};

export { renderUserList, handleAddUser };
