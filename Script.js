let input = document.querySelector("#input");
let btn = document.querySelector(".btn");
let ul = document.querySelector(".list");

btn.addEventListener("click", () =>{
    const newTodoText = input.value;

    if(newTodoText!==""){
        const newToDoItem =document.createElement("li");
        newToDoItem.innerText = newTodoText;

        const deleteToDOBtn = document.createElement("button");
        deleteToDOBtn.innerText = "X";

        deleteToDOBtn.classList.add("deletebtn");
        deleteToDOBtn.addEventListener("click",() =>{
            newToDoItem.remove();
        })

        newToDoItem.appendChild(deleteToDOBtn);
        ul.appendChild(newToDoItem);
        input.value = "";
        
    }
});