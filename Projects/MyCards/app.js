//Selectors
const cardInput = document.querySelector('.card-input');
const cardButton = document.querySelector('.card-button');
const cardList = document.querySelector('.card-list');

//Event Listeners
cardButton.addEventListener('click', addCard);
cardList.addEventListener('click', editOrDelete);
document.addEventListener("DOMContentLoaded", loadCards);

//Functions
function addCard(event) {

    event.preventDefault();

    //Create <Div>
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');

    //Create <Li>
    const cardLi = document.createElement('li');
    cardLi.innerText = cardInput.value;
    cardLi.classList.add('card-item');
    cardDiv.appendChild(cardLi);

    //Saves
    saveLocal(cardInput.value);

    //Create Edit button
    const editButton = document.createElement('button');
    editButton.innerHTML = '<i class="fas fa-pencil-alt"></i>';
    editButton.classList.add("edit-btn");
    cardDiv.appendChild(editButton);

    //Create Delete button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    cardDiv.appendChild(trashButton);

    //Append the cardDiv
    cardList.appendChild(cardDiv);

    cardInput.value = ""
}

//Function for Edit and Delete
function editOrDelete(e) {
    const item = e.target;
    
    if (item.classList[0] === "trash-btn") {
        const cardParent = item.parentElement;
        deleteLocalCard(cardParent);
        cardParent.remove();
    }

    if (item.classList[0 === "edit-btn"]) {
        console.log("Edit function implementation here")
    }

}

//Save function to local storage
function saveLocal(card) {
    
    let cards;
    if (localStorage.getItem("cards") === null) {
        cards = [];
    } else {
        cards = JSON.parse(localStorage.getItem("cards"));
    }
    cards.push(card);
    localStorage.setItem("cards", JSON.stringify(cards));
}

function loadCards() {
    let cards;
    if (localStorage.getItem("cards") === null) {
        cards = [];
    } else {
        cards = JSON.parse(localStorage.getItem("cards"));
    }
    
    cards.forEach(function(card) {
        //Create <Div>
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');

        //Create <Li>
        const cardLi = document.createElement('li');
        cardLi.innerText = card;
        cardLi.classList.add('card-item');
        cardDiv.appendChild(cardLi);

        //Create Edit button
        const editButton = document.createElement('button');
        editButton.innerHTML = '<i class="fas fa-pencil-alt"></i>';
        editButton.classList.add("edit-btn");
        cardDiv.appendChild(editButton);

        //Create Delete button
        const trashButton = document.createElement('button');
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';
        trashButton.classList.add("trash-btn");
        cardDiv.appendChild(trashButton);

        //Append the cardDiv
        cardList.appendChild(cardDiv);
    })

}

//Deletes element from LocalStorage array
function deleteLocalCard(card) {
    let cards;
    if (localStorage.getItem("cards") === null) {
        cards = [];
    } else {
        cards = JSON.parse(localStorage.getItem("cards"));
    }
    
    const cardIndex = card.children[0].innerText;
    cards.splice(cards.indexOf(cardIndex), 1);
    localStorage.setItem("cards", JSON.stringify(cards));
}