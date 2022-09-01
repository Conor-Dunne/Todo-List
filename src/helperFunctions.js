
export function hitEnterToSubmit (e) {
    if (e.key === "Enter") {
        e.preventDefault();
        document.querySelector("#add-folder-btn").click();
    }
}

export function addGlobalEventListener(type, selector, callback) {
    document.addEventListener(type, e => {
      if (e.target.matches(selector)) callback(e)
    })
  };

// export function noEmptyInput (value) {

//     if(value == "") alert("Please enter folder name");
//     return

// }