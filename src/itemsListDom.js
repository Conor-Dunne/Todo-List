import { createDomElements } from "./helperFunctions";
import { removeAllChildNodes, getKeyByValue } from "./helperFunctions";

export let currentFolder = "Main";

function displayTodoList(folder) {
  const listFolderTitle = document.querySelector("#list-title");
  currentFolder = getKeyByValue(folders, folder);
  listFolderTitle.textContent = currentFolder;

  const list = document.querySelector(".list-content");
  if (folder.length < 1) {
    list.textContent = `${currentFolder} is empty! Try adding some items.`;
    return;
  }

  removeAllChildNodes(list);

  folder.forEach(function (obj) {
    const listItemRow = createDomElements("div", "list-item", "");

    const leftCol = createDomElements("div", "left-col", "");
    const title = createDomElements("h2", "title", obj.title);
    const desc = createDomElements("p", "description", obj.details);
    leftCol.append(title, desc);

    const rightCol = createDomElements("div", "right-col", "");
    // const viewBtn = createDomElements("button", "view-btn", "View");
    const date = createDomElements("div", "date", obj.dueDate);
    const editBtn = createDomElements("button", "edit", "Edit");
    editBtn.dataset.id = obj.id;
    const deleteBtn = createDomElements("button", "delete", "Delete");
    deleteBtn.dataset.id = obj.id;
    rightCol.append(date, editBtn, deleteBtn);

    listItemRow.append(leftCol, rightCol);

    list.appendChild(listItemRow);
  });
}

export default displayTodoList;

// const ul = createDomElements("ul", "toDo-item", "");
//     removeAllChildNodes(list);
//     folder.forEach(function (obj) {
//         const li = createDomElements("li", "toDo-item", obj.title);
//         ul.appendChild(li);
//     })
//     list.appendChild(ul);
