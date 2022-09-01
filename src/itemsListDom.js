
function displayTodoList(folder) {
    console.log();
    const list = document.querySelector(".list-content");
    if (folder.length < 1) {
        list.textContent = `${getKeyByValue(folders, folder)} is empty! Try adding some items.`
        return;
    }
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


function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }

export default displayTodoList;