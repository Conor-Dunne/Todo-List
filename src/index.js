import "./styles.css";
import toDoItem from "./Todo";
import displayFolders from "./foldersDom";
import displayTodoList from "./itemsListDom";
import { closeModule, showNewFoldermodule, newFolderName } from "./controls";
import { hitEnterToSubmit, noEmptyInput, addGlobalEventListener } from "./helperFunctions";


window.folders = {
    "main": [],
    "JLPT": []
}

let data = []


const addToDoItem = function (folder, title, details, dueDate, priority) {
    const note = new toDoItem(title, details, dueDate, priority);
    folders[folder].push(note);
};

const editNote = function (id, newContent) {
    let note = data.find(note => note.id == id);
    note.content = newContent;
}

const deleteNote = function (index) {
    data.splice(index, 1);
}

const addNewFolder = function () {
    const folderName = document.querySelector("#new-folder").value;
    if (folderName == "") {
        alert("Enter folder name");
        return;
    }
    folders[folderName] = [];
    localStorage.setItem("folders", JSON.stringify(folders));
    displayFolders(folders);
    closeModule();

}


const deleteFolder = function (folderName) {
    delete folders[folderName];
}






// folderList.forEach(addEventListener("click", ()=> console.log("hi")));


addToDoItem("main", "Buy milk", "Go to store and buy milk", "today", "high");


displayFolders(folders);


// =======================EVENT LISTENERSS=============================


// Display folder list dynamically
addGlobalEventListener("click", ".folders", (el) => displayTodoList(folders[el.target.textContent])  )

//Open module form for adding new folder
const newFolderBtn = document.querySelector("#add-folder");
newFolderBtn.addEventListener("click", showNewFoldermodule);

//Close module form for adding new folder
const cancelBtn = document.querySelector(".close-module");
cancelBtn.addEventListener("click", closeModule);

//Add new folder
const submitNewFolderBtn = document.querySelector("#add-folder-btn");
submitNewFolderBtn.addEventListener("click", addNewFolder);

//Press enter to submit new folder
const addFolderInput = document.querySelector("#new-folder");
addFolderInput.addEventListener("keypress", hitEnterToSubmit)







localStorage.setItem("folders", JSON.stringify(folders));

