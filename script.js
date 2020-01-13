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
const arrayConvert = Array.from(tagNameTest);
console.log('arrayConvert: ', arrayConvert);


//====== Manipulating HTML Elements ======//
const servicesImg = document.querySelector('.services-img');
servicesImg.src = contentData.main_content.main_img.src;
servicesImg.alt = contentData.main_content.main_img.alt;

console.log(servicesImg);

const secondaryHeadings = document.querySelectorAll('h2');
console.log(secondaryHeadings);

secondaryHeadings.forEach(element => {
  element.style.fontSize = '25px';
  element.style.color = '#BB1333';
});

// Removing the extra-stuff paragraph
// extraPara[0].classList.add('invisible');

// Using array methods on HTMLCollection
const allLinks = document.getElementsByTagName('a');
console.log(allLinks);

const allLinksArray = Array.from(allLinks);

allLinksArray.forEach(element => {
  element.classList.add('blue-links');
});

// Adding/replacing text in an element
extraPara[0].textContent = 'This is a string to replace the text content in the bottom paragraph.';


// Zakaria
const logo = document.querySelector('#headerLogo');
logo.src = contentData.header.logo_img;


//====== Creating New HTML Elements ======//
// 1- Create Element
const newParagraph = document.createElement('p');
// 2- Add Content
newParagraph.textContent = 'Hello! I hope you are having a lovely morning!';
// 3- Select Target Parent Element
const secondaryContent = document.querySelector('.secondary-content');
// 4- Add Element To Parent
// Add element as parent container's last child
secondaryContent.append(newParagraph);

// Add element as parent container's first child
// secondaryContent.prepend(newParagraph);


// AVOID USING INNERHTML PLEASE THANK YOU :)