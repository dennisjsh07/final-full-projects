var form = document.querySelector("form");
var electronicItems = document.querySelector(".electronic-items");
var foodItems = document.querySelector(".food-items");
var skincareItems = document.querySelector(".skincare-items");
let myObj;

form.addEventListener("submit",onSubmit);

function onSubmit(e){
    e.preventDefault();

    myObj = {
        sellingPrice: document.getElementById("selling-price").value,
        productName: document.getElementById("product-name").value,
        category: document.getElementById("category").value
    }

    // add HTTP post request
    axios
    .post("https://crudcrud.com/api/0c0065ffe9164cbd86d8d8f6372da9e2/cart",myObj)
    .then((response)=>{
        console.log(response);
        // showInUi(response.data);
    })
    .catch((error)=>{
        console.log(error);
    })
} 

// add HTTP get request
window.addEventListener("DOMContentLoaded",()=>{
    axios
    .get("https://crudcrud.com/api/0c0065ffe9164cbd86d8d8f6372da9e2/cart")
    .then((response)=>{
        console.log(response); 

        for(var i=0;i<response.data.length;i++){
            showInUi(response.data[i]);
        }
    })
    .catch((error)=>{
        console.log(error)
    })
})

function showInUi(myObj){
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

    if(myObj.category==="Electronics"){
        electronicItems.appendChild(li);
    }
    else if(myObj.category==="Food Items"){
        foodItems.appendChild(li);
    }
    else{
        skincareItems.appendChild(li);
    }

    // adding functionality to deleteBtn
    deleteBtn.addEventListener("click",onDeleteClick);

    function onDeleteClick(e){
        var userId = myObj._id;
        
        // adding HTTP delete requset
        axios
        .delete("https://crudcrud.com/api/0c0065ffe9164cbd86d8d8f6372da9e2/cart/"+userId)
        .then((response)=>{
            console.log(response);
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    // adding functionality to editBtn

    editBtn.addEventListener("click",onEditClick);

    function onEditClick(e){
        
        var userId = myObj._id;
        var updateData = {
            sellingPrice: document.getElementById("selling-price").value,
            productName: document.getElementById("product-name").value,
            category: document.getElementById("category").value
        }

        // adding HTTP put request
        axios
        .put("https://crudcrud.com/api/0c0065ffe9164cbd86d8d8f6372da9e2/cart/"+userId,updateData)
        .then((response)=>console.log(response))
        .catch((error)=>console.log(error))
    }
}


  

