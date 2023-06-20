var form = document.querySelector("form");
var electronics = document.querySelector(".electronic-items");
var foodItems = document.querySelector(".food-items");
var skincareItems = document.querySelector(".skincare-items");

form.addEventListener("submit",onSubmit);

function onSubmit(e){
    e.preventDefault();

    var myObj = {
        sellingPrice: document.getElementById("selling-price").value,
        product: document.getElementById("product-name").value,
        category: document.getElementById("category").value
    }

    // adding items
    var li = document.createElement("li");
    li.className = "list-group-item";
    li.appendChild(document.createTextNode(myObj.sellingPrice+" - "+myObj.product+" - "+myObj.category));

    //adding delete-btn
    var deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-danger btn-sm float-end delete";
    deleteBtn.appendChild(document.createTextNode("X"));
    li.appendChild(deleteBtn);

    //adding edit-btn
    var editBtn = document.createElement("button");
    editBtn.className = "btn btn-primary btn-sm float-end me-2 delete";
    editBtn.appendChild(document.createTextNode("Edit"));
    li.appendChild(editBtn);

    // adding functionality to delete button.
    deleteBtn.addEventListener("click",onDeleteClick);
    
    function onDeleteClick(e){
        let li = (e.target.parentElement);
        if(myObj.category == "Electronics"){
            electronics.removeChild(li);
        }
        else if(myObj.category == "Food Items"){
            foodItems.removeChild(li);
        }
        else{
            skincareItems.removeChild(li);
        }
    }

    // adding functionality to edit button.
    editBtn.addEventListener("click",onEditClick);

    function onEditClick(e){
        let li = (e.target.parentElement);
        if(myObj.category == "Electronics"){
            electronics.removeChild(li);
        }
        else if(myObj.category == "Food Items"){
            foodItems.removeChild(li);
        }
        else{
            skincareItems.removeChild(li);
        }

        document.getElementById("selling-price").value = myObj.sellingPrice;
        document.getElementById("product-name").value = myObj.product;
        document.getElementById("category").value = myObj.category;
    }

    if(myObj.category == "Electronics"){
        electronics.appendChild(li);
    }
    else if(myObj.category == "Food Items"){
        foodItems.appendChild(li);
    }
    else{
        skincareItems.appendChild(li);
    }

    //clear fields
    document.getElementById("selling-price").value = "";
    document.getElementById("product-name").value = "";
    document.getElementById("category").value = "";
}

