import "./styles.css";
import displayFolders from "./foldersDom";
import displayTodoList from "./itemsListDom";
import { addToDoItem, editNote, deleteNote, addNewFolder, deleteFolder, showNewFolderModal, closeModal } from "./controls";
import { hitEnterToSubmit, addGlobalEventListener } from "./helperFunctions";


window.folders = {
    "main": [],
    "JLPT": []
}

let data = []





addToDoItem("main", "Buy milk", "Go to store and buy milk", "today", "high");
addToDoItem("main", "Get milk in the shop to make pancakes", "Go to store and buy milk", "today", "high");
addToDoItem("main", "Buy bread", "Go to store and buy milk", "today", "high");
addToDoItem("main", "Buy cheese", "Go to store and buy milk", "today", "high");
addToDoItem("main", "Buy butter", "Go to store and buy milk", "today", "high");


displayFolders(folders);


// =======================EVENT LISTENERSS=============================


// Display folder list dynamically
addGlobalEventListener("click", ".folders", (el) => displayTodoList(folders[el.target.textContent]))

//Open module form for adding new folder
const newFolderBtn = document.querySelector("#add-folder");
newFolderBtn.addEventListener("click", showNewFolderModal);

//Close module form for adding new folder
const cancelBtn = document.querySelector(".close-module");
cancelBtn.addEventListener("click", closeModal);

//Add new folder
const submitNewFolderBtn = document.querySelector("#add-folder-btn");
submitNewFolderBtn.addEventListener("click", addNewFolder);

//Press enter to submit new folder
const addFolderInput = document.querySelector("#new-folder");
addFolderInput.addEventListener("keypress", hitEnterToSubmit)


localStorage.setItem("folders", JSON.stringify(folders));

