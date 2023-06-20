// var form = document.querySelector("form");
// var electronicItems = document.querySelector(".electronic-items");
// var foodItems = document.querySelector(".food-items");
// var skincareItems = document.querySelector(".skincare-items");
// let myObj;

// form.addEventListener("submit",onSubmit);

// async function onSubmit(e){
//     e.preventDefault();

//     myObj = {
//         sellingPrice: document.getElementById("selling-price").value,
//         productName: document.getElementById("product-name").value,
//         category: document.getElementById("category").value
//     }

//     // add HTTP post request
//     try{
//         const response = await axios.post("https://crudcrud.com/api/5820bf89f5404c5faaaaca3f0483f81a/cart",myObj);
//         console.log(response);
//         location.reload();
//     } catch(error){
//         console.log(error)
//     }
// } 

// // add HTTP get request
// window.addEventListener("DOMContentLoaded",async ()=>{
//     try{
//         const response = await axios.get("https://crudcrud.com/api/5820bf89f5404c5faaaaca3f0483f81a/cart");
//         console.log(response);

//         for(var i=0;i<response.data.length;i++){
//             showInUi(response.data[i]);
//         }
//     }catch(error){
//         console.log(error);
//     }
// });

// function showInUi(myObj){
//     var li = document.createElement("li");
//     li.className = "list-group-item";
//     li.appendChild(document.createTextNode(myObj.sellingPrice+" - "+myObj.productName+" - "+myObj.category));

//     // adding deleteBtn
//     deleteBtn = document.createElement("button");
//     deleteBtn.className = "btn btn-danger btn-sm float-end delete"
//     deleteBtn.appendChild(document.createTextNode("Delete Order"));
//     li.appendChild(deleteBtn);

//     // adding editBtn
//     editBtn = document.createElement("button");
//     editBtn.className = "btn btn-primary btn-sm float-end me-2 edit"
//     editBtn.appendChild(document.createTextNode("Edit"));
//     li.appendChild(editBtn);

//     if(myObj.category==="Electronics"){
//         electronicItems.appendChild(li);
//     }
//     else if(myObj.category==="Food Items"){
//         foodItems.appendChild(li);
//     }
//     else{
//         skincareItems.appendChild(li);
//     }

//     // adding functionality to deleteBtn
//     deleteBtn.addEventListener("click",onDeleteClick);

//     async function onDeleteClick(e){
//         var userId = myObj._id;
        
//         // adding HTTP delete requset
//         try{
//             const response = await axios.delete("https://crudcrud.com/api/5820bf89f5404c5faaaaca3f0483f81a/cart/"+userId);
//             console.log(response);
//             location.reload();
//         } catch(error){
//             console.log(error);
//         }
//     }

//     // adding functionality to editBtn

//     editBtn.addEventListener("click",onEditClick);

//     async function onEditClick(e){
        
//         var userId = myObj._id;
//         var updateData = {
//             sellingPrice: document.getElementById("selling-price").value,
//             productName: document.getElementById("product-name").value,
//             category: document.getElementById("category").value
//         }

//         // adding HTTP put request
//         try{
//             const response = await axios.put("https://crudcrud.com/api/5820bf89f5404c5faaaaca3f0483f81a/cart/"+userId,updateData);
//             console.log(response);
//             location.reload();
//         } catch(error){
//             console.log(error);
//         }
//     }
// }


// without using location.reload()------------------------------------------------------------------------------------------------------------

var form = document.querySelector("form");
var electronicItems = document.querySelector(".electronic-items");
var foodItems = document.querySelector(".food-items");
var skincareItems = document.querySelector(".skincare-items");
let myObj;

form.addEventListener("submit", onSubmit);

async function onSubmit(e) {
  e.preventDefault();

  myObj = {
    sellingPrice: document.getElementById("selling-price").value,
    productName: document.getElementById("product-name").value,
    category: document.getElementById("category").value,
  };

  try {
    const response = await axios.post("https://crudcrud.com/api/5820bf89f5404c5faaaaca3f0483f81a/cart", myObj);
    console.log(response);
    getRequest();
  } catch (error) {
    console.log(error);
  }

  // clear fields
    document.getElementById("selling-price").value = "";
    document.getElementById("product-name").value = "";
    document.getElementById("category").value = "";
}

async function getRequest() {
  try {
    const response = await axios.get("https://crudcrud.com/api/5820bf89f5404c5faaaaca3f0483f81a/cart");
    console.log(response);

    electronicItems.innerHTML = ""; // Clear previous items
    foodItems.innerHTML = "";
    skincareItems.innerHTML = "";

    for (var i = 0; i < response.data.length; i++) {
      showInUi(response.data[i]);
    }
  } catch (error) {
    console.log(error);
  }
}

function showInUi(myObj) {
  var li = document.createElement("li");
  li.className = "list-group-item";
  li.appendChild(document.createTextNode(myObj.sellingPrice + " - " + myObj.productName + " - " + myObj.category));

  // adding deleteBtn
  deleteBtn = document.createElement("button");
  deleteBtn.className = "btn btn-danger btn-sm float-end delete";
  deleteBtn.appendChild(document.createTextNode("Delete Order"));
  li.appendChild(deleteBtn);

  // adding editBtn
  editBtn = document.createElement("button");
  editBtn.className = "btn btn-primary btn-sm float-end me-2 edit";
  editBtn.appendChild(document.createTextNode("Edit"));
  li.appendChild(editBtn);

  if (myObj.category === "Electronics") {
    electronicItems.appendChild(li);
  } else if (myObj.category === "Food Items") {
    foodItems.appendChild(li);
  } else {
    skincareItems.appendChild(li);
  }

  // adding functionality to deleteBtn
  deleteBtn.addEventListener("click", onDeleteClick);

  async function onDeleteClick(e) {
    var userId = myObj._id;

    try {
      const response = await axios.delete("https://crudcrud.com/api/5820bf89f5404c5faaaaca3f0483f81a/cart/" + userId);
      console.log(response);
      getRequest();
    } catch (error) {
      console.log(error);
    }
  }

  // adding functionality to editBtn
  editBtn.addEventListener("click", onEditClick);

  async function onEditClick(e) {
    var userId = myObj._id;
    var updateData = {
      sellingPrice: document.getElementById("selling-price").value,
      productName: document.getElementById("product-name").value,
      category: document.getElementById("category").value,
    }; /// vip note when im using (get request) to print the elements on the screen then use myObj.sellingPrice,productName,category.

    try {
      const response = await axios.put("https://crudcrud.com/api/5820bf89f5404c5faaaaca3f0483f81a/cart/" + userId, updateData);
      console.log(response);
      getRequest(); 
    } catch (error) {
      console.log(error);
    }
  }
}

document.addEventListener("DOMContentLoaded",()=>{
    getRequest();
})
