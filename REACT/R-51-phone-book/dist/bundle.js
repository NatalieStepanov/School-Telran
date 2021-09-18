/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ (() => {

eval("function main(){\n\nconst contacts = [\n    { name: 'John Doe', phone: '123456789', email: 'john@mail.com', address: 'Tel Aviv', desc: 'Best friend' },\n    { name: 'Jack Sparrow', phone: '0987654321', email: 'jack@mail.com', address: 'Carribian Sea', desc: 'Pirate' },\n    { name: 'Tony Stark', phone: '4566778', email: 'tony@stark.com', address: 'New York', desc: 'IronMen' }\n];\n\nconst root = document.querySelector('#root'),\n    nav = document.querySelector('.nav'),\n    searchInput = nav.querySelector('.search input'),\n    searchBtn = nav.querySelector('#search-btn');\n\nlet currentPageLink = document.querySelector('a[href= \"contacts\"]'),\n    currentContactRow;\n\nrenderContacts(contacts);\n\nnav.onclick = function (event) {\n    event.preventDefault();\n    if (event.target.tagName === 'A') {\n        currentPageLink.classList.remove('active');\n        currentPageLink = event.target;\n        currentPageLink.classList.add('active');\n        navigation(currentPageLink.getAttribute('href'))\n    }\n}\n\nsearchInput.oninput = function () {\n    const filterContact = contacts.filter((item) =>\n        item.name.toLowerCase().startsWith(searchInput.value.toLowerCase()));\n    renderContacts(filterContact);\n}\n\n/* searchInput.addEventListener('keydown', (e)=>{\n    if(e.key === 'Enter'){\n    const name = searchInput.value.toLowerCase();\n    const filterContact = contacts.filter((item) =>\n    item.name.toLowerCase().startsWith(name));\n    renderContacts(filterContact);\n    }\n}) */\n\n\nsearchBtn.onclick = function () {\n    const city = searchInput.value.toLowerCase();\n    const contactsByCity = contacts.filter(item => item.address.toLowerCase() === city);\n    searchInput.value = '';\n    renderContacts(contactsByCity);\n}\n\ndocument.body.onkeydown = function (e) {\n    if (e.key === 'Enter') {\n        const city = searchInput.value.toLowerCase();\n        const contactsByCity = contacts.filter(item => item.address.toLowerCase() === city);\n        searchInput.value = '';\n        renderContacts(contactsByCity);\n    }\n\n}\n\nfunction navigation(path) {\n    switch (path) {\n        case 'contacts':\n            renderContacts(contacts);\n            break;\n        case 'addContact':\n            renderAddContact();\n            break;\n        case 'registration':\n            renderRegistartionForm();\n            break;\n    }\n}\n\nfunction renderContacts(array) {\n    root.className = 'contacts';\n    root.innerHTML = `\n        <ul class = 'list'>\n         ${array.map(mapToContactRow).join('')}\n         </ul>\n         <div class = 'contact-view'>No selected contact</div>\n    `;\n    root.querySelector('.list').onclick = (event)=>{\n        contactClickHandler(event, array);\n    }\n    \n}\n\nfunction renderAddContact() {\n    root.className = 'add-contact';\n    root.innerHTML = `\n    <form name = \"addContactForm\" action=\"#\">  \n     <input\n      id=\"inputName\"\n      class=\"form-control\"\n      type=\"text\"\n      name=\"name\"\n      placeholder=\"Type name\"\n     />\n     <input\n      id=\"inputPhone\"\n      class=\"form-control\"\n      type=\"text\"\n      name=\"phone\"\n      placeholder=\"Type phone\"\n     />\n     <input\n      id=\"inputEmail\"\n      class=\"form-control\"\n      type=\"text\"\n      name=\"email\"\n      placeholder=\"Type email\"\n     />\n     <input\n      id=\"inputAddress\"\n      class=\"form-control\"\n      type=\"text\"\n      name=\"address\"\n      placeholder=\"Type address\"\n     />\n     <textarea\n     id=\"inputDesc\"\n      class=\"form-control\"\n      type=\"text\"\n      name=\"description\"\n      placeholder=\"Type description\"\n     ></textarea>\n     <div class=\"buttons\"><button class=\"add-btn\">Add</button></div>\n    </form>`;\n\n    const form = document.forms.addContactForm;\n    //console.log(form)\n\n    form.onsubmit = formSubmitHandler;\n\n}\n\nfunction renderRegistartionForm() {\n    root.innerHTML = 'registration'\n}\n\nfunction mapToContactRow(contact, index) {\n    return `\n    <li class = 'list-item' data-index = ${index}>\n        <h2 class = 'title'>${contact.name}</h2>\n        <h3 class = 'sub-title'>${contact.phone}</h3>\n        <div class = 'delete'></div>\n    </li>\n    `\n}\n\n/* function contactClickHandler(event) {\n    let li = event.target;\n    console.log(event.target)\n    if (li.classList.contains('delete')) {\n        contacts.splice(li.parentNode.dataset.index, 1);\n        renderContacts(contacts);\n    } else {\n        if (li.tagName !== 'LI') {\n            li = event.target.parentNode;\n        }\n        if (currentContactRow) {\n            currentContactRow.classList.remove('item-active')\n        }\n        showContact(li.dataset.index);\n        currentContactRow = li;\n        currentContactRow.classList.add('item-active')\n    }\n} */\n\nfunction contactClickHandler(event, array) {\n    let li = event.target;\n    if (li.classList.contains('delete')) {\n        array.splice(li.parentNode.dataset.index, 1)\n        renderContacts(contacts)\n    } else {\n        if (li.tagName !== 'LI') {\n            li = event.target.parentNode\n        }\n        if (currentContactRow) {\n            currentContactRow.classList.remove('item-active')\n        }\n        showContact(li.dataset.index, array)\n        currentContactRow = li\n        currentContactRow.classList.add('item-active')\n    }\n}\n\n/* function showContact(index) {\n    const contact = contacts[+index];\n    const contactView = root.querySelector('.contact-view');\n    contactView.innerHTML = `\n    <h2>${contact.name}</h2>\n    <div class=\"contact-view-row\">\n      <img src=\"./img/technology.png\" alt=\"\" />\n      <h3>${contact.phone}</h3>\n     </div>\n     <div class=\"contact-view-row\">\n      <img src=\"./img/multimedia.png\" alt=\"\" />\n      <h3>${contact.email}</h3>\n     </div>\n     <div class=\"contact-view-row\">\n      <img src=\"./img/buildings.png\" alt=\"\" />\n      <h3 \">${contact.address}</h3>\n     </div>\n     <p>${contact.desc}</p>\n    `;\n} */\n\nfunction showContact(index, array) {\n    const contact = array[+index];\n    const contactView = root.querySelector('.contact-view')\n    contactView.innerHTML = `\n    <h2>${contact.name}</h2>\n    <div class=\"contact-view-row\">\n    <img src=\"./img/technology.png\" alt=\"\" />\n    <h3>${contact.phone}</h3>\n    </div>\n    <div class=\"contact-view-row\">\n    <img src=\"./img/multimedia.png\" alt=\"\" />\n    <h3>${contact.email}</h3>\n    </div>\n    <div class=\"contact-view-row\">\n    <img src=\"./img/buildings.png\" alt=\"\" />\n    <h3 \">${contact.address}</h3>\n    </div>\n    <p>${contact.desc}</p>\n    `\n}\n\nfunction formSubmitHandler(event) {\n    event.preventDefault();\n    const form = event.target\n    console.log(form.elements)\n    if(!formValidation(form)){\n    contacts.push({\n        name: form.name.value,\n        phone: form.phone.value,\n        email: form.email.value,\n        address: form.address.value,\n        desc: form.description.value\n    });\n    showSuccess(form.name.value)\n    clearForm(form);\n}\n   \n\n   /* currentPageLink.classList.remove('active')\n    currentPageLink = document.querySelector('a[href= \"contacts\"]')\n    currentPageLink.classList.add('active');\n    navigation('contacts'); */\n\n}\n\nfunction formValidation(form){\n    let hasError = false;\n     for( element of form){\n         if(element.localName !== 'button'){           \n             if(element.value.trim() === ''){\n                 element.classList.add('is-invalid');\n                 hasError = true;\n             }else{\n                element.classList.remove('is-invalid');\n             }\n         }\n     }\n     if(hasError){\n         showError('All fields schould be fill!!!')\n     }\n     return hasError;\n}\n\nfunction showError(error){\n    let div = root.querySelector('.alert');\n    if(!div){\n        div = document.createElement('div');\n        root.prepend(div)\n    }\n    div.className = 'alert alert-danger';\n    div.innerHTML = error\n}\n\nfunction showSuccess(name){\n    let div = root.querySelector('.alert');\n    if(!div){\n        div = document.createElement('div');\n        root.prepend(div)\n    }\n    div.className = 'alert alert-success';\n    div.innerHTML = `Contact ${name} was added`\n}\n\n\nfunction clearForm(form) {\n    for (element of form) {\n        if (element.localName !== 'button') {\n            element.value = ''\n        }\n    }\n}\n}\n\nmain();\n\n//# sourceURL=webpack://51-02-09-phone-book/./src/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/script.js"]();
/******/ 	
/******/ })()
;