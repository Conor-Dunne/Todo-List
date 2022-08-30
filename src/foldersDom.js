



export default function displayFolders(obj) {

    const list = document.querySelector(".folders-list");
    const ul = document.createElement("ul");
    ul.classList.add("click-item");

    removeAllChildNodes(list);


     for (const property in obj) {
        const li = document.createElement("li");
        li.classList.add("folders")
        li.textContent = property;
        ul.append(li);
    }

    

    list.appendChild(ul);

 
};


function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}