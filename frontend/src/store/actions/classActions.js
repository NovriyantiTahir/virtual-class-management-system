import { getAllClasses, addClass, removeClass } from './classService.js';

// Function to render the class list on the UI
const renderClassList = (classListElement) => {
    const classes = getAllClasses();
    classListElement.innerHTML = '';

    classes.forEach(cls => {
        const listItem = document.createElement('li');
        listItem.textContent = `Class: ${cls.className}, Teacher: ${cls.teacherName}`;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => {
            removeClass(cls.className, cls.teacherName);
            renderClassList(classListElement);
        });

        listItem.appendChild(removeButton);
        classListElement.appendChild(listItem);
    });
};

// Function to handle adding a new class
const handleAddClass = (classNameInput, teacherNameInput, classListElement) => {
    const className = classNameInput.value.trim();
    const teacherName = teacherNameInput.value.trim();

    if (className && teacherName) {
        const success = addClass(className, teacherName);
        if (success) {
            renderClassList(classListElement);
            classNameInput.value = '';
            teacherNameInput.value = '';
        } else {
            alert('Class already exists.');
        }
    } else {
        alert('Please fill out all fields.');
    }
};

export { renderClassList, handleAddClass };

