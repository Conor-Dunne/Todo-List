import { createDomElements } from "./helperFunctions";
import { removeAllChildNodes, getKeyByValue } from "./helperFunctions";

export let currentFolder = "Main";

function displayTodoList(folder) {
    currentFolder = getKeyByValue(folders, folder);
    const list = document.querySelector(".list-content");
    if (folder.length < 1) {
        list.textContent = `${getKeyByValue(folders, folder)} is empty! Try adding some items.`
        return;
    }

    const listContent = document.querySelector(".list-content");



    removeAllChildNodes(list);
    folder.forEach(function (obj) {

        const listItemRow = createDomElements("div", "list-item", "");

        const leftCol = createDomElements("div", "left-col", "");
        const checkBox = createDomElements("div", "checkbox", "0");
        const title = createDomElements("h2", "title", obj.title);
        const desc = createDomElements("p", "description", obj.details);
        leftCol.append(checkBox, title, desc);

        const rightCol = createDomElements("div", "right-col", "");
        const viewBtn = createDomElements("button", "view-btn", "View");
        const date = createDomElements("div", "date", obj.dueDate);
        const editBtn = createDomElements("button", "edit", "Edit");
        const deleteBtn = createDomElements("button", "delete", "Delete");
        rightCol.append(viewBtn, date, editBtn, deleteBtn);


        listItemRow.append(leftCol, rightCol);

        listContent.appendChild(listItemRow);

    })







}

export default displayTodoList;





// const ul = createDomElements("ul", "toDo-item", "");
//     removeAllChildNodes(list);
//     folder.forEach(function (obj) {
//         const li = createDomElements("li", "toDo-item", obj.title);
//         ul.appendChild(li);
//     })
//     list.appendChild(ul);