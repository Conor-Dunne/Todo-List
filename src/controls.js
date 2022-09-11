
import toDoItem from "./Todo";
import displayFolders from "./foldersDom";
import displayTodoList from "./itemsListDom";
import { currentFolder } from "./itemsListDom";
import {findObjInArrById} from "./helperFunctions";


const addFolderModule = document.querySelector("#add-folder-module");
const addItemModal = document.querySelector("#add-item-module");
const newItemBtn = document.querySelector("#add-item-btn");
const editItemBtn = document.querySelector("#edit");
const formTitle = document.querySelector("#add-item-h1");
let editObjid;




export function showNewFolderModal() {
    addFolderModule.classList.remove("hide-content");
    addFolderModule.classList.add("module");

}

export function showNewItemModal() {
    formTitle.textContent = "Add new ToDo item";

    addItemModal.classList.remove("hide-content");
    addItemModal.classList.add("module");

    newItemBtn.classList.remove("hide-content");
    editItemBtn.classList.add("hide-content");

}

export function editItemModal (id) {

    formTitle.textContent = "Edit Item";
    addItemModal.classList.remove("hide-content");
    addItemModal.classList.add("module");
    editObjid = id
    let obj = findObjInArrById(folders[currentFolder], id);
    const newTitle = document.querySelector("#new-item-title").value = obj.title;
    const newDetails = document.querySelector("#new-item-details").value = obj.details;
    const newDueDate = document.querySelector("#new-item-due-date").value = obj.dueDate;
    const priorityToUse = document.querySelector("#new-item-priority").value = obj.priority;

    newItemBtn.classList.add("hide-content");
    editItemBtn.classList.remove("hide-content");
    console.log(id);
}


export function submitEdit() {

    let obj = findObjInArrById(folders[currentFolder], editObjid);
    const newTitle = document.querySelector("#new-item-title").value;
    const newDetails = document.querySelector("#new-item-details").value;
    const newDueDate = document.querySelector("#new-item-due-date").value;
    const priorityToUse = document.querySelector("#new-item-priority").value;

    console.log(newTitle);

    obj.title = newTitle;
    obj.details = newDetails;
    obj.dueDate = newDueDate;
    obj.priority = priorityToUse;
    
    localStorage.setItem("folders", JSON.stringify(folders));
    displayTodoList(folders[currentFolder]);
    closeNewItemModule();


    console.log(obj);
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


export function deleteNote(id) {
    let index = folders[currentFolder].findIndex(obj => obj.id == id);
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


export function openMobileMenu() {
    const menu = document.querySelector(".sidebar");
    const overlay = document.querySelector(".menu-overlay");
    
    
    menu.classList.add("sidebar-mobile")
    overlay.style.display = "initial";

}

export function closeMobileMenu () {
    const menu = document.querySelector(".sidebar");
    const overlay = document.querySelector(".menu-overlay");

    menu.classList.remove("sidebar-mobile")
    menu.classList.add("sidebar");
    overlay.style.display = "none";

}
