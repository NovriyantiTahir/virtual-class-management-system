document.addEventListener('DOMContentLoaded', (event) => {
    const userForm = document.getElementById('userForm');
    const userNameInput = document.getElementById('userNameInput');
    const userList = document.getElementById('userList');

    // Load user list from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const renderUserList = () => {
        userList.innerHTML = '';
        users.forEach((user, index) => {
            const listItem = document.createElement('li');
            listItem.textContent = user;
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.classList.add('remove');
            removeButton.addEventListener('click', () => {
                users.splice(index, 1);
                updateLocalStorage();
                renderUserList();
            });
            listItem.appendChild(removeButton);
            userList.appendChild(listItem);
        });
    };

    const updateLocalStorage = () => {
        localStorage.setItem('users', JSON.stringify(users));
    };

    userForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const userName = userNameInput.value.trim();
        if (userName) {
            users.push(userName);
            updateLocalStorage();
            renderUserList();
            userNameInput.value = '';
        }
    });

    // Initial render
    renderUserList();
});

