let addToDoButton = document.querySelector('#addtodo');
let toDoContainer = document.querySelector('#todocontainer');
let inputField = document.querySelector('#inputfield');

addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph); 
    inputField.value = '';

    /*underline if done*/

    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = 'red double line-through';
    })

    /*---------remove the text-----------*/

    paragraph.addEventListener('dblclick', function(){
        alert('This Text Will Delete!')
        toDoContainer.removeChild(paragraph); 
    })


    
})