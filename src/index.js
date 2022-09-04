import "./styles.css";
import displayFolders from "./foldersDom";
import displayTodoList from "./itemsListDom";
import { addToDoItem, editNote, deleteNote, addNewFolder, deleteFolder, showNewFolderModal, closeModal, showNewItemModal, closeNewItemModule, addToDoItemFromUserInput } from "./controls";
import { hitEnterToSubmit, addGlobalEventListener } from "./helperFunctions";




window.folders = {

}

folders = JSON.parse(localStorage.getItem("folders"));

if (Object.keys(folders).length === 0) {
    folders["Main"] = [];
}

displayFolders(folders);
displayTodoList(folders["Main"]);

deleteNote("Main", 1);

// addToDoItem("main", "Buy milk", "Go to store and buy milk", "today", "high");
// addToDoItem("main", "Get milk in the shop to make pancakes", "Go to store and buy milk", "today", "high");
// addToDoItem("main", "Buy bread", "Go to store and buy milk", "today", "high");
// addToDoItem("main", "Buy cheese", "Go to store and buy milk", "today", "high");
// addToDoItem("main", "Buy butter", "Go to store and buy milk", "today", "high");




// =======================EVENT LISTENERSS=============================


// Display folder list dynamically
addGlobalEventListener("click", ".folders", (el) => displayTodoList(folders[el.target.textContent]))

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


localStorage.setItem("folders", JSON.stringify(folders));

