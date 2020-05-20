'use strict';

const Inputfield = document.getElementsByClassName('inputfield')[0];
const Register = document.getElementsByClassName('register')[0];
const addlist = document.getElementsByClassName('addlist')[0];

const removeTask = removeButtona => {
    const targetTask = removeButtona.closest('li');
    addlist.removeChild(targetTask);
};

const addTask = taskb => {
 const listItem = document.createElement('li');
 const removeButton = document.createElement('button');

 removeButton.innerText = 'Delete';
 removeButton.addEventListener('click' , ()=> removeTask(removeButton));

 listItem.innerText = taskb;
 addlist.appendChild(listItem);
listItem.appendChild(removeButton);
 
};

Register.addEventListener('click', () => {
    const task = Inputfield.value;
    Inputfield.value='';
    addTask(task);
});