/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://todo-list/./src/styles.css?");

/***/ }),

/***/ "./src/Todo.js":
/*!*********************!*\
  !*** ./src/Todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toDoItem)\n/* harmony export */ });\n\n\n\nclass toDoItem {\n\tconstructor (title, details, dueDate, priority) {\n  \tthis.title = title;\n    this.details = details;\n    this.dueDate = dueDate;\n    this.priority = priority;\n    this. id = Math.floor(Math.random()* 1000000)\n  }\n\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/Todo.js?");

/***/ }),

/***/ "./src/controls.js":
/*!*************************!*\
  !*** ./src/controls.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addNewFolder\": () => (/* binding */ addNewFolder),\n/* harmony export */   \"addToDoItemFromUserInput\": () => (/* binding */ addToDoItemFromUserInput),\n/* harmony export */   \"closeModal\": () => (/* binding */ closeModal),\n/* harmony export */   \"closeNewItemModule\": () => (/* binding */ closeNewItemModule),\n/* harmony export */   \"deleteFolder\": () => (/* binding */ deleteFolder),\n/* harmony export */   \"deleteNote\": () => (/* binding */ deleteNote),\n/* harmony export */   \"editItemModal\": () => (/* binding */ editItemModal),\n/* harmony export */   \"newFolderName\": () => (/* binding */ newFolderName),\n/* harmony export */   \"showNewFolderModal\": () => (/* binding */ showNewFolderModal),\n/* harmony export */   \"showNewItemModal\": () => (/* binding */ showNewItemModal),\n/* harmony export */   \"submitEdit\": () => (/* binding */ submitEdit)\n/* harmony export */ });\n/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Todo */ \"./src/Todo.js\");\n/* harmony import */ var _foldersDom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foldersDom */ \"./src/foldersDom.js\");\n/* harmony import */ var _itemsListDom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./itemsListDom */ \"./src/itemsListDom.js\");\n/* harmony import */ var _helperFunctions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helperFunctions */ \"./src/helperFunctions.js\");\n\n\n\n\n\n\n\n\nconst addFolderModule = document.querySelector(\"#add-folder-module\");\nconst addItemModal = document.querySelector(\"#add-item-module\");\nconst newItemBtn = document.querySelector(\"#add-item-btn\");\nconst editItemBtn = document.querySelector(\"#edit\");\nconst formTitle = document.querySelector(\"#add-item-h1\");\nlet editObjid;\n\n\n\n\nfunction showNewFolderModal() {\n    addFolderModule.classList.remove(\"hide-content\");\n    addFolderModule.classList.add(\"module\");\n\n}\n\nfunction showNewItemModal() {\n    formTitle.textContent = \"Add new ToDo item\";\n\n    addItemModal.classList.remove(\"hide-content\");\n    addItemModal.classList.add(\"module\");\n\n    newItemBtn.classList.remove(\"hide-content\");\n    editItemBtn.classList.add(\"hide-content\");\n\n}\n\nfunction editItemModal (id) {\n\n    formTitle.textContent = \"Edit Item\";\n    addItemModal.classList.remove(\"hide-content\");\n    addItemModal.classList.add(\"module\");\n    editObjid = id\n    let obj = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_3__.findObjInArrById)(folders[_itemsListDom__WEBPACK_IMPORTED_MODULE_2__.currentFolder], id);\n    const newTitle = document.querySelector(\"#new-item-title\").value = obj.title;\n    const newDetails = document.querySelector(\"#new-item-details\").value = obj.details;\n    const newDueDate = document.querySelector(\"#new-item-due-date\").value = obj.dueDate;\n    const priorityToUse = document.querySelector(\"#new-item-priority\").value = obj.priority;\n\n    newItemBtn.classList.add(\"hide-content\");\n    editItemBtn.classList.remove(\"hide-content\");\n    console.log(id);\n}\n\n\nfunction submitEdit() {\n\n    let obj = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_3__.findObjInArrById)(folders[_itemsListDom__WEBPACK_IMPORTED_MODULE_2__.currentFolder], editObjid);\n    const newTitle = document.querySelector(\"#new-item-title\").value;\n    const newDetails = document.querySelector(\"#new-item-details\").value;\n    const newDueDate = document.querySelector(\"#new-item-due-date\").value;\n    const priorityToUse = document.querySelector(\"#new-item-priority\").value;\n\n    console.log(newTitle);\n\n    obj.title = newTitle;\n    obj.details = newDetails;\n    obj.dueDate = newDueDate;\n    obj.priority = priorityToUse;\n    \n    localStorage.setItem(\"folders\", JSON.stringify(folders));\n    (0,_itemsListDom__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(folders[_itemsListDom__WEBPACK_IMPORTED_MODULE_2__.currentFolder]);\n    closeNewItemModule();\n\n\n    console.log(obj);\n}\n\nfunction closeModal() {\n    addFolderModule.classList.remove(\"module\");\n    addFolderModule.classList.add(\"hide-content\");\n}\n\nfunction closeNewItemModule() {\n    addItemModal.classList.remove(\"module\");\n    addItemModal.classList.add(\"hide-content\");\n}\n\nfunction newFolderName() {\n    const name = document.querySelector(\"#new-folder\").value;\n    return name;\n}\n\nfunction addToDoItemFromUserInput () {\n    // const folderToUse = \"main\";\n    const newTitle = document.querySelector(\"#new-item-title\").value;\n    if (newTitle == \"\") {return};\n    const newDetails = document.querySelector(\"#new-item-details\").value;\n    const newDueDate = document.querySelector(\"#new-item-due-date\").value;\n    const priorityToUse = document.querySelector(\"#new-item-priority\").value;\n    const newItem = new _Todo__WEBPACK_IMPORTED_MODULE_0__[\"default\"](newTitle, newDetails, newDueDate, priorityToUse );\n    \n    folders[_itemsListDom__WEBPACK_IMPORTED_MODULE_2__.currentFolder].push(newItem);\n    localStorage.setItem(\"folders\", JSON.stringify(folders));\n    (0,_itemsListDom__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(folders[_itemsListDom__WEBPACK_IMPORTED_MODULE_2__.currentFolder]);\n    closeNewItemModule();\n\n}\n\n\nfunction deleteNote(id) {\n    let index = folders[_itemsListDom__WEBPACK_IMPORTED_MODULE_2__.currentFolder].findIndex(obj => obj.id == id);\n    folders[_itemsListDom__WEBPACK_IMPORTED_MODULE_2__.currentFolder].splice(index, 1);\n    localStorage.setItem(\"folders\", JSON.stringify(folders));\n    (0,_itemsListDom__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(folders[_itemsListDom__WEBPACK_IMPORTED_MODULE_2__.currentFolder]);\n};\n\nfunction addNewFolder() {\n    const folderName = document.querySelector(\"#new-folder\").value;\n    if (folderName == \"\") {return;};\n    folders[folderName] = [];\n    localStorage.setItem(\"folders\", JSON.stringify(folders));\n    (0,_foldersDom__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(folders);\n    closeModal();\n\n}\n\nfunction deleteFolder(folderName) {\n    delete folders[folderName];\n}\n\n\n//# sourceURL=webpack://todo-list/./src/controls.js?");

/***/ }),

/***/ "./src/foldersDom.js":
/*!***************************!*\
  !*** ./src/foldersDom.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ displayFolders)\n/* harmony export */ });\n\n\n\n\nfunction displayFolders(obj) {\n\n    const list = document.querySelector(\".folders-list\");\n    const ul = document.createElement(\"ul\");\n    ul.classList.add(\"click-item\");\n\n    removeAllChildNodes(list);\n\n\n     for (const property in obj) {\n        const li = document.createElement(\"li\");\n        li.classList.add(\"folders\")\n        li.textContent = property;\n        ul.append(li);\n    }\n\n    \n\n    list.appendChild(ul);\n \n};\n\n\nfunction removeAllChildNodes(parent) {\n    while (parent.firstChild) {\n        parent.removeChild(parent.firstChild);\n    }\n}\n\n//# sourceURL=webpack://todo-list/./src/foldersDom.js?");

/***/ }),

/***/ "./src/helperFunctions.js":
/*!********************************!*\
  !*** ./src/helperFunctions.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addGlobalEventListener\": () => (/* binding */ addGlobalEventListener),\n/* harmony export */   \"createDomElements\": () => (/* binding */ createDomElements),\n/* harmony export */   \"findObjInArrById\": () => (/* binding */ findObjInArrById),\n/* harmony export */   \"getKeyByValue\": () => (/* binding */ getKeyByValue),\n/* harmony export */   \"hitEnterToSubmit\": () => (/* binding */ hitEnterToSubmit),\n/* harmony export */   \"removeAllChildNodes\": () => (/* binding */ removeAllChildNodes)\n/* harmony export */ });\n\n\n\nfunction hitEnterToSubmit(e) {\n  if (e.key === \"Enter\") {\n    e.preventDefault();\n    document.querySelector(\"#add-folder-btn\").click();\n  }\n}\n\nfunction addGlobalEventListener(type, selector, callback) {\n  document.addEventListener(type, e => {\n    if (e.target.matches(selector)) callback(e)\n  })\n};\n\nfunction createDomElements(element, classlist, addText) {\n  const el = document.createElement(`${element}`);\n  el.classList.add(`${classlist}`);\n  el.textContent = `${addText}`;\n  return el;\n}\n\nfunction removeAllChildNodes(parent) {\n  while (parent.firstChild) {\n    parent.removeChild(parent.firstChild);\n  }\n}\n\nfunction getKeyByValue(object, value) {\n  return Object.keys(object).find(key => object[key] === value);\n}\n\nfunction findObjInArrById (arr, id) {\n  let index = arr.findIndex(obj => obj.id == id);\n  return arr[index];\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/helperFunctions.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _foldersDom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foldersDom */ \"./src/foldersDom.js\");\n/* harmony import */ var _itemsListDom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./itemsListDom */ \"./src/itemsListDom.js\");\n/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controls */ \"./src/controls.js\");\n/* harmony import */ var _helperFunctions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helperFunctions */ \"./src/helperFunctions.js\");\n\n\n\n\n\n\n\n\nwindow.folders = {\n \"Main\": []   \n\n}\n\n\nObject.assign(folders, JSON.parse(localStorage.getItem(\"folders\")));\n\n\n(0,_foldersDom__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(folders);\n(0,_itemsListDom__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(folders[\"Main\"]);\n\n\n\n// =======================EVENT LISTENERSS=============================\n\n\n// Display folder list dynamically\n(0,_helperFunctions__WEBPACK_IMPORTED_MODULE_4__.addGlobalEventListener)(\"click\", \".folders\", (el) => (0,_itemsListDom__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(folders[el.target.textContent]))\n\n;(0,_helperFunctions__WEBPACK_IMPORTED_MODULE_4__.addGlobalEventListener)(\"click\", \".delete\", (e) => (0,_controls__WEBPACK_IMPORTED_MODULE_3__.deleteNote)(e.target.dataset.id));\n\n(0,_helperFunctions__WEBPACK_IMPORTED_MODULE_4__.addGlobalEventListener)(\"click\", \".edit\", (e) => (0,_controls__WEBPACK_IMPORTED_MODULE_3__.editItemModal)(e.target.dataset.id));\n\nconst submitEditBtn = document.querySelector(\"#edit\");\nsubmitEditBtn.addEventListener(\"click\", (e) => (0,_controls__WEBPACK_IMPORTED_MODULE_3__.submitEdit)(e.target.dataset.id));\n\n//Open form for adding new folder\nconst newFolderBtn = document.querySelector(\"#add-folder\");\nnewFolderBtn.addEventListener(\"click\", _controls__WEBPACK_IMPORTED_MODULE_3__.showNewFolderModal);\n\n//Open new ToDo item form\nconst addNewItemBtn = document.querySelector(\"#add-item\");\naddNewItemBtn.addEventListener(\"click\", _controls__WEBPACK_IMPORTED_MODULE_3__.showNewItemModal);\n\n//Close module form for adding new folder\nconst cancelBtn = document.querySelector(\".close-module\");\ncancelBtn.addEventListener(\"click\", _controls__WEBPACK_IMPORTED_MODULE_3__.closeModal);\n\n//CLose module form for adding new item\nconst cancelNewItemBtn = document.querySelector(\"#close-new-item-form\")\ncancelNewItemBtn.addEventListener(\"click\", _controls__WEBPACK_IMPORTED_MODULE_3__.closeNewItemModule);\n\n//Add new folder\nconst submitNewFolderBtn = document.querySelector(\"#add-folder-btn\");\nsubmitNewFolderBtn.addEventListener(\"click\", _controls__WEBPACK_IMPORTED_MODULE_3__.addNewFolder);\n\n//Add new item\nconst submitNewItem = document.querySelector(\"#add-item-btn\");\nsubmitNewItem.addEventListener(\"click\", _controls__WEBPACK_IMPORTED_MODULE_3__.addToDoItemFromUserInput)\n\n\n//Press enter to submit new folder\nconst addFolderInput = document.querySelector(\"#new-folder\");\naddFolderInput.addEventListener(\"keypress\", _helperFunctions__WEBPACK_IMPORTED_MODULE_4__.hitEnterToSubmit)\n\n\n// localStorage.setItem(\"folders\", JSON.stringify(folders));\n\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/itemsListDom.js":
/*!*****************************!*\
  !*** ./src/itemsListDom.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"currentFolder\": () => (/* binding */ currentFolder),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helperFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helperFunctions */ \"./src/helperFunctions.js\");\n\n\n\nlet currentFolder = \"Main\";\n\nfunction displayTodoList(folder) {\n    currentFolder = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.getKeyByValue)(folders, folder);\n    const list = document.querySelector(\".list-content\");\n    if (folder.length < 1) {\n        list.textContent = `${(0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.getKeyByValue)(folders, folder)} is empty! Try adding some items.`\n        return;\n    }\n\n    // const listContent = document.querySelector(\".list-content\");\n\n\n\n    (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.removeAllChildNodes)(list);\n    folder.forEach(function (obj) {\n\n        const listItemRow = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.createDomElements)(\"div\", \"list-item\", \"\");\n\n        const leftCol = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.createDomElements)(\"div\", \"left-col\", \"\");\n        const title = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.createDomElements)(\"h2\", \"title\", obj.title);\n        const desc = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.createDomElements)(\"p\", \"description\", obj.details);\n        leftCol.append(title, desc);\n\n        const rightCol = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.createDomElements)(\"div\", \"right-col\", \"\");\n        // const viewBtn = createDomElements(\"button\", \"view-btn\", \"View\");\n        const date = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.createDomElements)(\"div\", \"date\", obj.dueDate);\n        const editBtn = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.createDomElements)(\"button\", \"edit\", \"Edit\");\n        editBtn.dataset.id = obj.id;\n        const deleteBtn = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.createDomElements)(\"button\", \"delete\", \"Delete\");\n        deleteBtn.dataset.id = obj.id;\n        rightCol.append(date, editBtn, deleteBtn);\n\n\n        listItemRow.append(leftCol, rightCol);\n\n        list.appendChild(listItemRow);\n\n    })\n\n\n\n\n\n\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayTodoList);\n\n\n\n\n\n// const ul = createDomElements(\"ul\", \"toDo-item\", \"\");\n//     removeAllChildNodes(list);\n//     folder.forEach(function (obj) {\n//         const li = createDomElements(\"li\", \"toDo-item\", obj.title);\n//         ul.appendChild(li);\n//     })\n//     list.appendChild(ul);\n\n//# sourceURL=webpack://todo-list/./src/itemsListDom.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;