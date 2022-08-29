



export default function displayFolders(obj) {

    const sidebar = document.querySelector(".sidebar");
    const ul = document.createElement("ul");
    

     for (const property in obj) {
        const li = document.createElement("li");
        li.classList.add("folders")
        li.textContent = property;
        ul.append(li);
    }

    sidebar.appendChild(ul);

 
};


   