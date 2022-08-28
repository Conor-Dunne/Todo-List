import "./styles.css";
import toDoItem from "./Todo";
import displayFolders from "./foldersDom";

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


const addNewFolder = function(folderName) {
return folders[folderName] = [];
}


const deleteFolder = function(folderName){
    delete folders[folderName];
}


addNewFolder("Gym");
addNewFolder("Job Hunt")
addToDoItem("Gym","Chest", "Do some Bench", "Friday","High")
addToDoItem("main", "Buy milk", "Go to store and buy milk", "today", "high");
addToDoItem("Job Hunt","Review CV", "Update CV with skills", "Friday", "high");


console.log(folders);
displayFolders(folders);











localStorage.setItem("folders", JSON.stringify(folders));

