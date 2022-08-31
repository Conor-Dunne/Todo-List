import "./styles.css";
import toDoItem from "./Todo";
import displayFolders from "./foldersDom";
import displayTodoList from "./itemsListDom";
import {closeModule, showNewFoldermodule,newFolderName} from "./controls";
import {hitEnterToSubmit, noEmptyInput} from "./helperFunctions";


let folders = {
    "main": []
  }

let data = []


const addToDoItem = function(folder, title, details, dueDate, priority) {
    const note = new toDoItem(title, details, dueDate, priority);
folders[folder].push(note);
};

const editNote = function(id, newContent) {
let note = data.find(note => note.id == id);
note.content = newContent;
}

const deleteNote = function (index) {
data.splice(index,1);
}

const addNewFolder = function() {
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


const deleteFolder = function(folderName){
    delete folders[folderName];
}






// folderList.forEach(addEventListener("click", ()=> console.log("hi")));


// addNewFolder("Gym");
// addNewFolder("Job Hunt")
// addToDoItem("Gym","Chest", "Do some Bench", "Friday","High")
// addToDoItem("main", "Buy milk", "Go to store and buy milk", "today", "high");
// addToDoItem("Job Hunt","Review CV", "Update CV with skills", "Friday", "high");
// addToDoItem("Job Hunt","Call Saul", "Tell him all", "Yesterday", "high");


displayFolders(folders);


// EVENT LISTENERSS

const folderList = document.querySelectorAll(".folders");
folderList.forEach(folder => folder.addEventListener("click", (el) => displayTodoList(folders[el.target.textContent])));


const newFolderBtn = document.querySelector("#add-folder");
const cancelBtn = document.querySelector(".close-module");

newFolderBtn.addEventListener("click", showNewFoldermodule);
cancelBtn.addEventListener("click", closeModule);

const submitNewFolderBtn = document.querySelector("#add-folder-btn");
submitNewFolderBtn.addEventListener("click", addNewFolder);

const addFolderInput = document.querySelector("#new-folder");
addFolderInput.addEventListener("keypress", hitEnterToSubmit )







localStorage.setItem("folders", JSON.stringify(folders));

