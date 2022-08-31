
export function hitEnterToSubmit (e) {
    if (e.key === "Enter") {
        e.preventDefault();
        document.querySelector("#add-folder-btn").click();
    }
}

// export function noEmptyInput (value) {

//     if(value == "") alert("Please enter folder name");
//     return

// }