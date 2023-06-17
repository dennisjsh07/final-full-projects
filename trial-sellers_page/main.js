var form = document.querySelector("form");
var electronicItems = document.querySelector(".electronic-items");
var foodItems = document.querySelector(".food-items");
var skincareItems = document.querySelector(".skincare-items");

let myObj;

form.addEventListener("submit",onSubmit);

function onSubmit(e){
    e.preventDefault();

    showInUi();
} 

function showInUi(){
    myObj = {
        sellingPrice: document.getElementById("selling-price").value,
        productName: document.getElementById("product-name").value,
        category: document.getElementById("category").value
    }
    var li = document.createElement("li");
    li.className = "list-group-item";
    li.appendChild(document.createTextNode(myObj.sellingPrice+" - "+myObj.productName+" - "+myObj.category));

    // adding deleteBtn
    deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-danger btn-sm float-end delete"
    deleteBtn.appendChild(document.createTextNode("Delete Order"));
    li.appendChild(deleteBtn);

    // adding editBtn
    editBtn = document.createElement("button");
    editBtn.className = "btn btn-primary btn-sm float-end me-2 edit"
    editBtn.appendChild(document.createTextNode("Edit"));
    li.appendChild(editBtn);

    if(document.getElementById("category").value=="Electronics"){
        electronicItems.appendChild(li);
    }
    else if(document.getElementById("category").value=="Food Items"){
        foodItems.appendChild(li);
    }
    else{
        skincareItems.appendChild(li);
    }

    // adding functionality to deleteBtn
    deleteBtn.addEventListener("click",onDeleteClick);

    function onDeleteClick(e){
        var li = (e.target.parentElement);
        ul.removsChild(li);        
    }

    // adding functionality to editBtn

    editBtn.addEventListener("click",onEditClick);

    function onEditClick(e){
        editBtn.addEventListener("click",onEditClick);

        function onEditClick(e){
            var li = (e.target.parentElement);
            ul.removsChild(li);        
        }
    }
}

