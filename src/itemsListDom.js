
function displayTodoList(folder) {
    const list = document.querySelector(".list-content");
    const ul = document.createElement("ul");
    ul.classList.add("click-item");
    const li = document.createElement("li");
    li.classList.add("toDo-item");

    removeAllChildNodes(list);

    folder.forEach(function (obj) {
        const li = document.createElement("li");
        li.classList.add("toDo-item");
        li.textContent = obj.title;
        ul.appendChild(li);
    })

        list.appendChild(ul);

}


function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

export default displayTodoList;