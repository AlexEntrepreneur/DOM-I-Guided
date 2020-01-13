// console.dir(document);

//====== Selecting HTML Elements ======//
const btnById = document.getElementById('custom-btn');
console.log(btnById);

const btnByQuery = document.querySelector('#custom-btn');
console.log(btnByQuery);

const btnsByQueryAll = document.querySelectorAll('button');
console.log(btnsByQueryAll);

const tagNameTest = document.getElementsByTagName('p');
console.log(tagNameTest);

const classNameTest = document.getElementsByClassName('container');
console.log(classNameTest);

const extraPara = document.querySelectorAll('.extra-stuff');
console.log(extraPara);


//====== Converting HTMLCollection or NodeList to Arrays ======//
// Array-like objects (they do not have .map, .reduce, .filter)
// HTMLCollection - List of HTML elements
// NodeList - List of all nodes of every type (including HTML elements)


//====== Manipulating HTML Elements ======//


//====== Creating New HTML Elements ======//
// 1- Create Element
// 2- Add Content
// 3- Select Target Parent Element
// 4- Add Element To Parent
