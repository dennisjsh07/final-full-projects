var form = document.querySelector("form")
var ul = document.querySelector("ul");
let myObj;

form.addEventListener("submit",onSubmit);

function onSubmit(e){
    e.preventDefault();
    showOnUi();
    addLocalStorage();
} 

function showOnUi(){
    myObj = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        date: document.getElementById("date").value,
    }

    if(myObj.name==="" && myObj.email===""){
        var msg = document.getElementById("msg");
        msg.className = "alert alert-danger text-center";
        msg.innerHTML = "Enter Both Name and Email";
    }
    else {
        createElement();
    }
}

function createElement(){
    // create list of items
    var li = document.createElement("li");
    li.className = "list-group-item"
    li.appendChild(document.createTextNode(myObj.name+" - "+myObj.email));

    // create deleteBtn
    var deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-danger btn-sm float-end delete";
    deleteBtn.appendChild(document.createTextNode("X"));
    li.appendChild(deleteBtn);

    // create editBtn
    var editBtn = document.createElement("button");
    editBtn.className = "btn btn-primary btn-sm float-end me-1 edit";
    editBtn.appendChild(document.createTextNode("Edit"));
    li.appendChild(editBtn);

    ul.appendChild(li);

    // clear fields
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("date").value = "";

    // add functionality to deleteBtn
    deleteBtn.addEventListener("click",onDeleteClick)

    function onDeleteClick(e){
        var li = (e.target.parentElement);
        ul.removeChild(li);
        localStorage.removeItem(myObj.email);
    }

    // add functionality to editBtn
    editBtn.addEventListener("click",onEditClick);

    function onEditClick(e){
        var li = (e.target.parentElement);
        ul.removeChild(li);
        localStorage.removeItem(myObj.email);

        document.getElementById("name").value = myObj.name;
        document.getElementById("email").value = myObj.email;
        document.getElementById("phone").value = myObj.phone;
        document.getElementById("date").value = myObj.date;        
    }
}

// function store in localstorage
function addLocalStorage(){
    if(myObj.name!=="" & myObj.email!==""){
        localStorage.setItem(myObj.email,JSON.stringify(myObj));
    }
}

