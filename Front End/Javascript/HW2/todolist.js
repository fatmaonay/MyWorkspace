/*https://github.com/fatihyuksel3109/Kodluyoruz-ToDoList-JavaScript/tree/main/JStodolist/todolist/js */

const task = document.querySelector('#task');
let list = document.querySelector('#list');
let a = document.querySelector('#liveToastBtn');

document.querySelectorAll("#list > li").forEach((element) => {
    let deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = `<i class="fa-sharp fa-solid fa-xmark"></i>`;
    deleteBtn.classList.add("removeBtn");
    element.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", removeElement);
});

function removeElement() {
    this.parentElement.remove();
}

document.querySelectorAll("#list >li").forEach((element) => {
    element.addEventListener("click", () => {
        element.classList.toggle("done");
    });
})

function newElement() {
    if(task.value.length > 0 && task.value != "nothing") {
        let liDOM = document.createElement("li");
        liDOM.innerHTML = `${task.value}`
        list.appendChild(liDOM);
        $('.success').toast("show")
        let deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = `<i class="fa-sharp fa-solid fa-xmark"></i>`
        deleteBtn.classList.add("removeBtn");
        liDOM.appendChild(deleteBtn);
        deleteBtn.addEventListener("click", removeElement);
        deleteBtn.addEventListener("click", removeStorage);
        addStorage();
        liDOM.addEventListener("click", () => {
            liDOM.classList.toggle("done")
        })
    }
    else {
        $('.error').toast("show");
    }
}

task.addEventListener("keydown", (event) => { 
    if (event.key === "Enter") {
      a.click()
    }
})

a.addEventListener("click", () => {
    task.focus();
})

let localArray;
if (localStorage.getItem("livalue")) {
    localArray = JSON.parse(localStorage.getItem("livalue"))
} else {
    localArray = [];
}

function addStorage() {
    localArray.push(task.value);    
    localStorage.setItem("livalue", JSON.stringify(localArray))
}

localArray.forEach((element) => {
    let liDOM = document.createElement("li")
    liDOM.innerHTML = element;
    list.appendChild(liDOM);

    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = `<i class="fa-sharp fa-solid fa-xmark"></i>`;
    deleteBtn.classList.add("removeBtn")
    liDOM.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", removeElement); 
    deleteBtn.addEventListener("click", removeStorage);

    liDOM.addEventListener("click", () => {
        liDOM.classList.toggle("done")
    })
})

function removeStorage() {
    let indexNo= localArray.indexOf(this.parentElement.textContent) 
    localArray.splice(indexNo,1)
    localStorage.setItem("livalue",JSON.stringify(localArray))
}