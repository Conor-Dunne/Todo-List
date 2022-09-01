
export function hitEnterToSubmit(e) {
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

export function createDomElements(element, classlist, addText) {
  const el = document.createElement(`${element}`);
  el.classList.add(`${classlist}`);
  el.textContent = `${addText}`;
  return el;
}

export function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

export function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}

