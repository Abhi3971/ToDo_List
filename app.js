let search = document.querySelector("#fisrt");
let btn = document.querySelector(".btn");
let add = document.querySelector(".taskbar ol");
let del = document.querySelector(".Btn");
console.log(add);

btn.addEventListener("click" , () =>{
    if(search.value == ""){
        alert("empty task");
    }else{
    let item = document.createElement("li");
    let bttn = document.createElement("button");
    bttn.innerText = "Delete"; 
    bttn.classList.add("Btn");
    item.innerText = search.value;
    add.appendChild(item);
    search.value = "";
    item.appendChild(bttn);}
})

add.addEventListener("click" , (e) =>{
    if(e.target.nodeName == "BUTTON"){
        let itemdel = e.target.parentElement;
        itemdel.remove();
    }
})

