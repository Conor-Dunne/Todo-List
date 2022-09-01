import { createDomElements } from "./helperFunctions";
import {removeAllChildNodes, getKeyByValue} from "./helperFunctions";

function displayTodoList(folder) {
    const list = document.querySelector(".list-content");
    if (folder.length < 1) {
        list.textContent = `${getKeyByValue(folders, folder)} is empty! Try adding some items.`
        return;
    }
    const ul = createDomElements("ul", "toDo-item", "");
    removeAllChildNodes(list);
    folder.forEach(function (obj) {
        const li = createDomElements("li", "toDo-item", obj.title);
        ul.appendChild(li);
    })
    list.appendChild(ul);
}

export default displayTodoList;