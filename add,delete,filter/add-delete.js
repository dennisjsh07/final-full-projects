// submitting the form and storing the value in UI
var form = document.querySelector("form");

var ul = document.querySelector(".list-group");

let li;

form.addEventListener("submit",onSubmit);

function onSubmit(e){
    e.preventDefault();
    createNewItem();
}

function createNewItem(){
    li = document.createElement("li");
    li.className = "list-group-item";

    var newItem = document.getElementById("item").value;
    if(newItem!==""){
        li.appendChild(document.createTextNode(newItem));

        createDeleteBtn();

        ul.appendChild(li);
    }  
}

// creating delete-btn
function createDeleteBtn(){
    var deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-danger btn-sm float-right delete"

    deleteBtn.appendChild(document.createTextNode("X"));

    li.appendChild(deleteBtn);
}

// adding delete functionality to delete-btn
ul.addEventListener("click",onClick);

function onClick(e){
    if(e.target.classList.contains("delete")){
        var li = (e.target.parentElement);
        ul.removeChild(li);
    }
}

// adding filter.
var filter = document.getElementById("filter");

filter.addEventListener("keyup",filterItems);

function filterItems(e){
    var text = (e.target.value.toLowerCase());

    var li = document.getElementsByTagName("li");
    Array.from(li).forEach(function(li){
        var liContent = li.firstChild.textContent;
        if(liContent.toLowerCase().indexOf(text)!=-1){
            li.style.display = "block";
        }
        else{
            li.style.display = "none";
        }
    })  
}


    






















