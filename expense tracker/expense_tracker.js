var form = document.querySelector("form");
var ul = document.querySelector("ul");
let myObj;

form.addEventListener("submit",onSubmit);

function onSubmit(e){
    e.preventDefault();
    
    showInUi();
    storeInLocalStorage();
}

function showInUi(){

    myObj = {
        expense: document.getElementById("expense-amt").value,
        category: document.getElementById("category").value
    }
    if(myObj.expense===""){
        var msg = document.getElementById("msg");
        msg.className = "alert alert-danger p-2 text-center";
        msg.innerHTML = "Enter Both Expense Amount and Category";
    }
    else{
        createElement();
    }
}

function createElement(){
    // create list of items
    var li = document.createElement("li");
    li.className = "list-group-item p-1 mb-2";
    li.appendChild(document.createTextNode(myObj.expense+" - "+myObj.category));

    // create delete-btn
    var deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-dark btn-sm float-end delete"
    deleteBtn.appendChild(document.createTextNode("X"));
    li.appendChild(deleteBtn);

    // create editBtn
    var editBtn = document.createElement("button");
    editBtn.className = "btn btn-success btn-sm float-end me-2 edit"
    editBtn.appendChild(document.createTextNode("Edit"));
    li.appendChild(editBtn);

    ul.appendChild(li);

    // adding functionality to deleteBtn
    deleteBtn.addEventListener("click",onDeleteClick);

    function onDeleteClick(e){
        var li = (e.target.parentElement);
        ul.removeChild(li);
        localStorage.removeItem(myObj.expense);
    }

    // adding functionality to edit button
    editBtn.addEventListener("click",onEditClick);

    function onEditClick(e){
        var li = (e.target.parentElement);
        ul.removeChild(li);
        localStorage.removeItem(myObj.expense);

        document.getElementById("expense-amt").value = myObj.expense;
        document.getElementById("category").value = myObj.category;
    }

    // clear fields
    document.getElementById("expense-amt").value = "";
    document.getElementById("category").value = "";
}

// storing items in the local storage
function storeInLocalStorage(){
    if(myObj.expense!=="" && myObj.category!==""){
       localStorage.setItem(myObj.expense,JSON.stringify(myObj));
    }
}



