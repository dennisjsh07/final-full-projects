var form = document.querySelector("form");
var ul = document.querySelector("ul");
let myObj;

form.addEventListener("submit",onSubmit);

function onSubmit(e){
    e.preventDefault();

    myObj = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        date: document.getElementById("date").value
    }
    
    axios
    .post("https://crudcrud.com/api/63c713dcd7884ad4b7df0b8bd1c76e09/userDetails",myObj)
    .then((response)=>{
        console.log(response);
    })
    .catch((error)=>{
        console.log(error)
    })
    // showInUi();
}

window.addEventListener("DOMContentLoaded",()=>{
    axios
    .get("https://crudcrud.com/api/63c713dcd7884ad4b7df0b8bd1c76e09/userDetails")
    .then((response)=>{
        console.log(response);

        for(var i=0;i<response.data.length;i++){
            showInUi(response.data[i]);
        }
    })
    .catch((error)=>console.log(error));
})

function showInUi(myObj){
  
    var li = document.createElement("li");
    li.className = "list-group-item mb-2";
    
    li.appendChild(document.createTextNode(myObj.name+" - "+myObj.email));
    
    // add delete button
    var deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-danger btn-sm float-end delete"

    deleteBtn.appendChild(document.createTextNode("X"));

    li.appendChild(deleteBtn);


    // add Edit button
    var editBtn = document.createElement("button");
    editBtn.className = "btn btn-primary btn-sm float-end me-2 edit";

    editBtn.appendChild(document.createTextNode("Edit"));

    li.appendChild(editBtn);

    ul.appendChild(li);
    
    // adding functionality to deleteBtn
    deleteBtn.addEventListener("click",onDeleteClick);

    function onDeleteClick(e){
        var li = (e.target.parentElement);
        var userId = myObj._id;

         // delete HTTP function
        axios
        .delete("https://crudcrud.com/api/63c713dcd7884ad4b7df0b8bd1c76e09/userDetails/"+userId)
        .then((response)=>{
            console.log(response)
            ul.removeChild(li);
        })
        .catch((error)=>console.log(error))
    }

    // adding functionality to editBtn
    editBtn.addEventListener("click",onEditClick);

    function onEditClick(e){
        var li = (e.target.parentElement);
        var userId = myObj._id;
        var updateData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            date: document.getElementById("date").value
        }

        axios
        .put("https://crudcrud.com/api/63c713dcd7884ad4b7df0b8bd1c76e09/userDetails/"+userId,updateData)
        .then((response)=>{
            console.log(response)
        })
        .catch((error)=>console.log(error))
    } 

    // clear fields
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("date").value = "";
}



  


 

























      



















      











