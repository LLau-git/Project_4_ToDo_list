var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems = document.getElementsByTagName("li");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";

    //button delete for new li item
var btnDelete = document.createElement("button");

    btnDelete.appendChild(document.createTextNode("Delete!"));
    li.appendChild(btnDelete);
    btnDelete.onclick = removeParent;
}
function removeParent(evt) {
    evt.target.parentNode.remove();
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

// mark as done! 


function strikeThrough(e) {
    if (e.target.tagName === "listItems") {
        e.target.classList.toggle("done");
    }
}
ul.addEventListener("click", strikeThrough);


// adds delete button to old items;
function listLenght() {
    return listItems.length;
}

function deleteButton() {
    var btn = document.createElement("button");
    btn.appendChild(document.createTextNode("Delete!"));
    listItems[i].appendChild(btn);
    btn.onclick=removeParent;
}
for(i=0; i<listLenght(); i++) {
    deleteButton();
}
