
import toDoItem from "./Todo";
import displayFolders from "./foldersDom";


const addFolderModule = document.querySelector("#add-folder-module");

export function showNewFolderModal() {
    addFolderModule.classList.remove("hide-content");
    addFolderModule.classList.add("module");

}


export function closeModal() {
    addFolderModule.classList.remove("module");
    addFolderModule.classList.add("hide-content");

}

export function newFolderName() {
    const name = document.querySelector("#new-folder").value;
    return name;
}


export function addToDoItem(folder, title, details, dueDate, priority) {
    const note = new toDoItem(title, details, dueDate, priority);
    folders[folder].push(note);
};

export function editNote(id, newContent) {
    let note = data.find(note => note.id == id);
    note.content = newContent;
}

export function deleteNote(index) {
    data.splice(index, 1);
}

export function addNewFolder() {
    const folderName = document.querySelector("#new-folder").value;
    if (folderName == "") {
        alert("Enter folder name");
        return;
    }
    folders[folderName] = [];
    localStorage.setItem("folders", JSON.stringify(folders));
    displayFolders(folders);
    closeModal();

}

export function deleteFolder(folderName) {
    delete folders[folderName];
}
