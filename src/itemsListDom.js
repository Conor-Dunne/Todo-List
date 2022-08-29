
function displayTodoList(folder) {
    const list = document.querySelector(".main");
    const ul = document.createElement("ul");
    const li = document.createElement("li");
    li.classList.add("toDo-item");

    folder.forEach(function (obj) {
        const li = document.createElement("li");
        li.classList.add("toDo-item");
        li.textContent = obj.title;
        ul.appendChild(li);
    })

        list.appendChild(ul);

}

export default displayTodoList;