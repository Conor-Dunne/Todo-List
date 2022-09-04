
import toDoItem from "./Todo";
import displayFolders from "./foldersDom";
import displayTodoList from "./itemsListDom";
import { currentFolder } from "./itemsListDom";


const addFolderModule = document.querySelector("#add-folder-module");
const addItemModal = document.querySelector("#add-item-module")

export function showNewFolderModal() {
    addFolderModule.classList.remove("hide-content");
    addFolderModule.classList.add("module");

}

export function showNewItemModal() {
    addItemModal.classList.remove("hide-content");
    addItemModal.classList.add("module");
}


export function closeModal() {
    addFolderModule.classList.remove("module");
    addFolderModule.classList.add("hide-content");

}

export function closeNewItemModule() {
    addItemModal.classList.remove("module");
    addItemModal.classList.add("hide-content");
}

export function newFolderName() {
    const name = document.querySelector("#new-folder").value;
    return name;
}

export function addToDoItemFromUserInput () {
    // const folderToUse = "main";
    const newTitle = document.querySelector("#new-item-title").value;
    if (newTitle == "") {return};
    const newDetails = document.querySelector("#new-item-details").value;
    const newDueDate = document.querySelector("#new-item-due-date").value;
    const priorityToUse = document.querySelector("#new-item-priority").value;
    const newItem = new toDoItem(newTitle, newDetails, newDueDate, priorityToUse );
    
    folders[currentFolder].push(newItem);
    localStorage.setItem("folders", JSON.stringify(folders));
    displayTodoList(folders[currentFolder]);
    closeNewItemModule();

}

export function editNote(id, newContent) {
    let note = data.find(note => note.id == id);
    note.content = newContent;
}

export function deleteNote(id) {
    let index = folders[currentFolder].findIndex(obj => obj.id == id);
    console.log(index);
    folders[currentFolder].splice(index, 1);
    localStorage.setItem("folders", JSON.stringify(folders));
    displayTodoList(folders[currentFolder]);

};

export function addNewFolder() {
    const folderName = document.querySelector("#new-folder").value;
    if (folderName == "") {return;};
    folders[folderName] = [];
    localStorage.setItem("folders", JSON.stringify(folders));
    displayFolders(folders);
    closeModal();

}

export function deleteFolder(folderName) {
    delete folders[folderName];
}
