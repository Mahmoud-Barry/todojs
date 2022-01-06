//Creation d'element
const createTodo = () => {
    let input = document.getElementById("input").value;
    let ul = document.getElementById("ulTodo");
    let li = document.createElement("li");
    let todo = document.createTextNode(input);

    if(input !== ""){
        ul.appendChild(li);
        li.appendChild(todo);
        li.classList.add("list-group-item");
    }
    
    document.getElementById("input").value = "";
}