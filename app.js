const resetButton = document.querySelector('#reset-button');
const userInput = document.querySelector('#user-input');
const ulItems = document.querySelector('#ul-items');

userInput.addEventListener('keypress', () => {
    if(event.key === "Enter") {
        handleAppend(userInput.value);
        userInput.value = '';
    };
});

resetButton.addEventListener('click', () => {
    ulItems.innerHTML = '';
});

const handleAppend = (element) => {
    ulItems.innerHTML += `<li id="li=element"><input type="checkbox"> ${element} <input id="delete-button" type="button" value="delete"></li>`;
    document.querySelector('#delete-button').addEventListener('click', handleDelete);
};

const handleDelete = (event) => {
    console.log(event.target.parentElement);
    event.target.parentElement.remove();
};