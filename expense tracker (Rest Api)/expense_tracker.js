var form = document.querySelector("form");
var ul = document.querySelector("ul");
let myObj;

form.addEventListener("submit",onSubmit);

function onSubmit(e){
    e.preventDefault();

    myObj = {
        expense: document.getElementById("expense-amt").value,
        category: document.getElementById("category").value
    }

    // add HTTP post request
    axios
    .post("https://crudcrud.com/api/14e7b6fcf8ad417eb0f9814cb4f78f2e/expenseData",myObj)
    .then((response)=>{
        console.log(response)
        // showInUi(response.data);
    })
    .catch((error)=>{
        console.log(error);
    })
}

window.addEventListener("DOMContentLoaded",()=>{
    axios
    .get("https://crudcrud.com/api/14e7b6fcf8ad417eb0f9814cb4f78f2e/expenseData")
    .then((response)=>{
        console.log(response);

        for(var i=0;i<response.data.length;i++){
            showInUi(response.data[i])
        }
    })
    .catch((error)=>{
        console.log(error);
    })
})

function showInUi(myObj){
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
        var userId = myObj._id;

        // adding delete HTTP request
        axios
        .delete("https://crudcrud.com/api/14e7b6fcf8ad417eb0f9814cb4f78f2e/expenseData/"+userId)
        .then((response)=>{
            console.log(response)
            ul.removeChild(li);
        })
        .catch((error)=>console.log(error));
    }

    // adding functionality to edit button
    editBtn.addEventListener("click",onEditClick);

    function onEditClick(e){
        var userId = myObj._id;
        var expenseData = {
            expense: document.getElementById("expense-amt").value,
            category: document.getElementById("category").value
        }

        // adding HTTP put request
        axios
        .put("https://crudcrud.com/api/14e7b6fcf8ad417eb0f9814cb4f78f2e/expenseData/"+userId,expenseData)
        .then((response)=>{
            console.log(response)
        })
        .catch((error)=>console.log(error));
    }

    // clear fields
    document.getElementById("expense-amt").value = "";
    document.getElementById("category").value = "";
}

