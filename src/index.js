import "./styles.css";
import displayFolders from "./foldersDom";
import displayTodoList from "./itemsListDom";
import { addToDoItem, editNote, deleteNote, addNewFolder, deleteFolder, showNewFolderModal, closeModal, showNewItemModal, closeNewItemModule, addToDoItemFromUserInput, editItemModal, submitEdit } from "./controls";
import { hitEnterToSubmit, addGlobalEventListener, findObjInArrById } from "./helperFunctions";



window.folders = {
 "Main": []   

}


Object.assign(folders, JSON.parse(localStorage.getItem("folders")));


displayFolders(folders);
displayTodoList(folders["Main"]);



// =======================EVENT LISTENERSS=============================


// Display folder list dynamically
addGlobalEventListener("click", ".folders", (el) => displayTodoList(folders[el.target.textContent]))

addGlobalEventListener("click", ".delete", (e) => deleteNote(e.target.dataset.id));

addGlobalEventListener("click", ".edit", (e) => editItemModal(e.target.dataset.id));

const submitEditBtn = document.querySelector("#edit");
submitEditBtn.addEventListener("click", (e) => submitEdit(e.target.dataset.id));

//Open form for adding new folder
const newFolderBtn = document.querySelector("#add-folder");
newFolderBtn.addEventListener("click", showNewFolderModal);

//Open new ToDo item form
const addNewItemBtn = document.querySelector("#add-item");
addNewItemBtn.addEventListener("click", showNewItemModal);

//Close module form for adding new folder
const cancelBtn = document.querySelector(".close-module");
cancelBtn.addEventListener("click", closeModal);

//CLose module form for adding new item
const cancelNewItemBtn = document.querySelector("#close-new-item-form")
cancelNewItemBtn.addEventListener("click", closeNewItemModule);

//Add new folder
const submitNewFolderBtn = document.querySelector("#add-folder-btn");
submitNewFolderBtn.addEventListener("click", addNewFolder);

//Add new item
const submitNewItem = document.querySelector("#add-item-btn");
submitNewItem.addEventListener("click", addToDoItemFromUserInput)


//Press enter to submit new folder
const addFolderInput = document.querySelector("#new-folder");
addFolderInput.addEventListener("keypress", hitEnterToSubmit)


// localStorage.setItem("folders", JSON.stringify(folders));

