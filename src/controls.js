const addFolderModule = document.querySelector("#add-folder-module");



export function showNewFoldermodule() {
    addFolderModule.classList.remove("hide-content");
    addFolderModule.classList.add("module");

}


export function closeModule() {
    addFolderModule.classList.remove("module");
    addFolderModule.classList.add("hide-content");
   
}

export function newFolderName() {
    const name = document.querySelector("#new-folder").value;
    return name;
}


